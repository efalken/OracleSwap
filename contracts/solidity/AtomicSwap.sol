/*# -*- coding: utf-8 -*-
"""
Created on Wed Jun 26 13:08:17 2019

@author: Eric
"""*/

pragma solidity ^0.4.25;

import "./Oracle.sol";


/*
counterparty 1 (cp1) initiates by posting ETH as collateral and to send for BtcSendermargin, E0
cp1 reveals Hash(Secret)
cp2 posts ETH as collateral to receive ETH for sending BtcSendermargin.
CP2 sets E1, the amount of Ether to be sent.
E1 must be >E0/2, and <E0/1.2, so CP1 will have enough Ether to act as margin, but does not waste CP1's time with a trivial transaction
B0,
the amount of BTC to be sent will be a function of E0 and the soon-to-be-revealed BTC/ETH price: B0=E0/btcethprice

Oracle posts BTC/ETH price, btceth, which informs cp2 to send B1=E1/btceth of bitcoin in HTLC to cp1
cp1 or cp1 activates contract, obliging parties to transact. If neither activate after 2 hours after the Oracle posts its priceOracle
both players can activate a refund at no cost (RefundNoActivate)
cp2 sends B1 to cp1 via HTLC
scenario 1: if B1 is 'fair' given B0, cp1 redeems HTLC by revealing S, which unlocks bytes19
cp2 uses revealed S to retrieve cp2(ethmargin) and E1 from cp1's margin. The residual of cp1's margin is sent back to cp1
scenario 2: if B1 is considered unfair by cp2, cp2 will not send B1 to cp1, so cp1 cannot reveal so
if B1 is considered unfair by cp1, cp1 will not accept B1 by revealing sender
After 24 hours, if cp2 does not redeem eth by unlocking with S, either party can redeem contract and receive their ETH margin from the contract
If btceth(1)>btceth(0), we presume cp2 reneged, as he would have lost money. ETH loss amount is sent to burn address as puniishment, remaining
eth is refunded
If btceth(1)<btceth(0), we resume cp1 (ethsender, btcreceiver) reneged, and implied loss sent to burn address, remaining refunded


*/

contract AtomicSwap {

    constructor (address priceOracle)
    public
    {
        admins[msg.sender] = true;
        feeAddress = msg.sender;
        oracle = Oracle(priceOracle);
    }

    Oracle public oracle;
    address constant BURN_ADDRESS = 0xdead;
    uint constant ORACLE_FEE = 100;
    mapping(address => bool) public admins;
    bool public isPaused;
    mapping(uint => Subcontract) public subcontract;
    uint public numSubcontract;
    address feeAddress;

    struct Subcontract
        {
        uint [8]  TheUints;
      /*
      0  EthSendermargin  1 ether ie 1e18
      1  BtcSendermargin; 1 ether
      2  Ethtosend;       1 ether
      3  Btctosend;       1 satoshis ie 1e8
      4   Inittimestamp;  int
      5   Startoracletime; int
      6   Eth0;           1e6 eg 300 --> 300 000 000
      7   Btc0;           1e6
      */
        uint    Btcethprice;  /// x 1e6
        bytes32 HashedSecret;
        address EthSender;  /// receives BTC from bitcoin HTLC
        address BtcSender;  /// receives ETH from this contract if things go well
        string  BtcAddress;
        uint8    KProgress; /// start=0, isTaken=1, isActive=2, isOver=3
        }
        
     modifier onlyAdmin()
    {
        require(admins[msg.sender]);
        _;
    }

    function getBookData(uint _numSubcontract)
        public
        view
        returns (
        uint SubkNumber,
        uint  EthSenderMargin,
        uint  BtcSenderMargin,
        uint  EthToSend,
        address  EthSender,
        address  BtcSender
    )
    {
        SubkNumber = _numSubcontract;
        EthSenderMargin = subcontract[_numSubcontract].TheUints[0];
        BtcSenderMargin = subcontract[_numSubcontract].TheUints[1];
        EthToSend = subcontract[_numSubcontract].TheUints[2];
        EthSender = subcontract[_numSubcontract].EthSender;
        BtcSender = subcontract[_numSubcontract].BtcSender;
    }

        function getProgData(uint _numSubcontract)
        public
        view
        returns (
        uint SubkNumber,
        uint BtcToSend,
        uint ethUSDPrice,
        uint btcUSDPrice,
        uint btcEthprice,
        uint initTimeStamp,
        uint startOracleTime,
        bytes32 HashedSecret,
        string  BtcAddress,
        uint8   ContractStage
        )
    {
        SubkNumber = _numSubcontract;
        BtcToSend = subcontract[_numSubcontract].TheUints[3];
        ethUSDPrice = subcontract[_numSubcontract].TheUints[6];
        btcUSDPrice = subcontract[_numSubcontract].TheUints[7];
        btcEthprice = subcontract[_numSubcontract].Btcethprice;
        initTimeStamp = subcontract[_numSubcontract].TheUints[4];
        startOracleTime = subcontract[_numSubcontract].TheUints[5];
        HashedSecret =  subcontract[_numSubcontract].HashedSecret;
        BtcAddress = subcontract[_numSubcontract].BtcAddress;
        ContractStage = subcontract[_numSubcontract].KProgress;
    }

    function pause(bool pauseValue)
        public
        onlyAdmin
    {
        require (admins[msg.sender]);
        isPaused = pauseValue;
    }

    event Posted(
        uint indexed Numsubcontract,
        address EthSenderAddress,
        string _BtcAddress,
        bytes32 _HashedSecret,
        uint blocktimestamp
        );

    event Taken(
        uint indexed Numsubcontract,
        address BtcSenderAddress,
        uint EthSendAmount,
        uint blocktimestamp
        );

    event Closed(
        uint indexed Numsubcontract,
        string Reason,
        uint blocktimestamp
        );

    event Activated(
        uint indexed Numsubcontract,
        uint EthSendAmount,
        uint BTCsendAmount,
        uint OracleTimestamp,
        uint BTCprice,
        uint ETHprice
        );

    event Burned(
        uint indexed Numsubcontract,
        uint AmountBurned,
        uint newBtcEthPrice,
        uint oldBtcEthPrice,
        string Loser,
        uint blocktimestamp
        );

    function removeAdmin(address toRemove)
        public
        onlyAdmin
    {
        require(toRemove != msg.sender, "You may not remove yourself as an admin.");
        admins[toRemove] = false;
    }

     function addAdmin(address newAdmin)
        public
        onlyAdmin
    {
        admins[newAdmin] = true;
    }

     function changeFeeAddress(address newAddress)
        public
        onlyAdmin
    {
        feeAddress = newAddress;
    }

    function Post(string _BtcAddress, bytes32 _HashedSecret)
        public
        payable
    {
        require(msg.value > 1 ether,
            "Need at least 1 ether to post");
        numSubcontract++;
        Subcontract memory order;
        order.EthSender = msg.sender;
        order.BtcAddress = _BtcAddress;
        order.HashedSecret = _HashedSecret;
        order.TheUints[0] = msg.value;
        subcontract[numSubcontract] = order;
        emit Posted(
            numSubcontract,
            msg.sender,
            _BtcAddress,
            _HashedSecret,
            block.timestamp);
    }

    function take(uint _numSubcontract, uint _EthtoSend)
        public
	    payable
	{
	    require(subcontract[_numSubcontract].KProgress == 0);
	    _EthtoSend = _EthtoSend * 1 ether;
	    uint _EthMargin = _EthtoSend * 2 / 10;
	    require(msg.value >= _EthMargin && (_EthtoSend <= (100 * subcontract[_numSubcontract].TheUints[0] / 120)));
	    require(_EthtoSend > (subcontract[_numSubcontract].TheUints[0] / 2));
	    subcontract[_numSubcontract].BtcSender = msg.sender;
	    subcontract[_numSubcontract].TheUints[1] = msg.value; /// BtcSender margin
	    subcontract[_numSubcontract].TheUints[2] = _EthtoSend;   /// ETH to Send
	    subcontract[_numSubcontract].TheUints[4] = block.timestamp;  /// init time stamp of swap
	    subcontract[_numSubcontract].KProgress = 1;
	    emit Taken(
	        _numSubcontract,
	        msg.sender,
            _EthtoSend,
	        block.timestamp
	        );
	  }

    function activate(uint _numSubcontract)
        public
    {
        require(subcontract[_numSubcontract].KProgress == 1);
        require(_oracleTimeStamp > (subcontract[_numSubcontract].TheUints[4] + 0 minutes));
        uint _oracleTimeStamp = oracle.getLastUpdateTime(3);
        subcontract[_numSubcontract].KProgress = 2;
        subcontract[_numSubcontract].Btcethprice = oracle.getCurrentPrice(3);   /// swap BTCETH transfer price
        subcontract[_numSubcontract].TheUints[3] = subcontract[_numSubcontract].TheUints[2] /
             subcontract[_numSubcontract].Btcethprice / 1e4; /// 1e5*1e3 normalizes output into 1000's of Satoshis
        subcontract[_numSubcontract].TheUints[5] = _oracleTimeStamp;
        subcontract[_numSubcontract].TheUints[6] = oracle.getCurrentPrice(0);   /// swap ETH transfer price
        subcontract[_numSubcontract].TheUints[7] = oracle.getCurrentPrice(2);   /// swap BTC transfer price

        emit Activated(
            _numSubcontract,
            subcontract[_numSubcontract].TheUints[2],
            subcontract[_numSubcontract].TheUints[3],
            subcontract[_numSubcontract].TheUints[4],
            subcontract[_numSubcontract].TheUints[6],
            subcontract[_numSubcontract].TheUints[7]
            );
    }

     function refundnoTake(uint _numSubcontract)
        public
    {
        require(subcontract[_numSubcontract].KProgress == 0);
        require(subcontract[_numSubcontract].EthSender == msg.sender);
        subcontract[_numSubcontract].KProgress = 3;
        uint amount1=subcontract[_numSubcontract].TheUints[0];
        subcontract[_numSubcontract].TheUints[0] = 0;
        subcontract[_numSubcontract].EthSender.transfer(amount1);
        emit Closed(
            _numSubcontract,
            "noTake",
            block.timestamp
            );
    }


    function refundnoActivate(uint _numSubcontract)
        public
    {
        require(subcontract[_numSubcontract].KProgress == 1);
        require(subcontract[_numSubcontract].EthSender == msg.sender || subcontract[_numSubcontract].BtcSender == msg.sender);
        uint  _oracleTimeStamp = oracle.getLastUpdateTime(3);
        require(_oracleTimeStamp > subcontract[_numSubcontract].TheUints[5]);
        require(block.timestamp > (subcontract[_numSubcontract].TheUints[5] + 2 hours));
        subcontract[_numSubcontract].KProgress = 3;
        uint  ethSendmarg=subcontract[_numSubcontract].TheUints[0]; /// penalizes them both for being inactive
        uint  btcSendmarg=subcontract[_numSubcontract].TheUints[1]; /// penalizes them both for being inactive
        subcontract[_numSubcontract].TheUints[0] = 0;
        subcontract[_numSubcontract].TheUints[1] = 0;
        subcontract[_numSubcontract].BtcSender.transfer(btcSendmarg);
        subcontract[_numSubcontract].EthSender.transfer(ethSendmarg);
          emit Closed(
              _numSubcontract,
              "noActivate",
              block.timestamp
              );
    }

    function redeem(uint _numSubcontract, string _secret)
        public
    {
        require(subcontract[_numSubcontract].KProgress == 2);
    	require(msg.sender==subcontract[_numSubcontract].BtcSender);
        require(sha256(abi.encodePacked(_secret)) == subcontract[_numSubcontract].HashedSecret);
        subcontract[_numSubcontract].KProgress = 3;
        uint oracleFee = subcontract[_numSubcontract].TheUints[2] * ORACLE_FEE / 1e4;
        uint amountEthSender = subcontract[_numSubcontract].TheUints[0] - subcontract[_numSubcontract].TheUints[2]  - oracleFee;
        uint amountBtcSender = subcontract[_numSubcontract].TheUints[1] + subcontract[_numSubcontract].TheUints[2]  - oracleFee;
        subcontract[_numSubcontract].TheUints[0] = 0;
        subcontract[_numSubcontract].TheUints[1] = 0;
        subcontract[_numSubcontract].BtcSender.transfer(amountBtcSender);
        subcontract[_numSubcontract].EthSender.transfer(amountEthSender);
        feeAddress.transfer(2 * oracleFee);
          emit Closed(
              _numSubcontract,
              "RedeemedSuccess",
              block.timestamp
              );
    }

    function burn(uint _numSubcontract)
        public
    {
        require(subcontract[_numSubcontract].KProgress == 2);
        require(subcontract[_numSubcontract].EthSender == msg.sender || subcontract[_numSubcontract].BtcSender == msg.sender);
        uint oracleupdatetime = oracle.getLastUpdateTime(3);
        require(oracleupdatetime > (subcontract[_numSubcontract].TheUints[5] + 0 hours));
        subcontract[_numSubcontract].KProgress = 3;
        uint btcethprice = oracle.getCurrentPrice(3);
        uint burnedETH2;
        string memory burnedParty;
            if (btcethprice > subcontract[_numSubcontract].Btcethprice) {
                burnedETH2 = subcontract[_numSubcontract].TheUints[3] * 1e4 * btcethprice - subcontract[_numSubcontract].TheUints[2];
                if (burnedETH2 > subcontract[_numSubcontract].TheUints[1]) burnedETH2=subcontract[_numSubcontract].TheUints[1];
                subcontract[_numSubcontract].TheUints[1] = subcontract[_numSubcontract].TheUints[1] - burnedETH2;
                BURN_ADDRESS.transfer(burnedETH2);
                burnedParty ="BtcSender";
            }
            else {
                burnedETH2 = subcontract[_numSubcontract].TheUints[2] - subcontract[_numSubcontract].TheUints[3] * 1e4 * btcethprice;
                if (burnedETH2 > subcontract[_numSubcontract].TheUints[0]) burnedETH2=subcontract[_numSubcontract].TheUints[0];
                subcontract[_numSubcontract].TheUints[0] = subcontract[_numSubcontract].TheUints[0] - burnedETH2;
                BURN_ADDRESS.transfer(burnedETH2);
                burnedParty ="EthSender";
            }
        uint ethmarg = subcontract[_numSubcontract].TheUints[0];
        uint btcmarg = subcontract[_numSubcontract].TheUints[1];
        subcontract[_numSubcontract].TheUints[0] = 0;
        subcontract[_numSubcontract].TheUints[1] = 0;
        subcontract[_numSubcontract].EthSender.transfer(ethmarg);
        subcontract[_numSubcontract].BtcSender.transfer(btcmarg);
        emit Burned(
             _ numSubcontract,
            burnedETH2,
            btcethprice,
            subcontract[_numSubcontract].TheUints[3],
            burnedParty,
            block.timestamp
            );
    }

    }
