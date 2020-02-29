pragma solidity ^0.4.25;

import "./Oracle.sol";
import "./Swapk.sol";

contract SwapMaster {
    
    uint public constant ORACLE_FEE = 100;
    uint public constant GLOBAL_MIN_ETH = 1 ether;
    address public feeAddress;
    address public constant BURN_ADRESS = 0xdead;
    bool public isPaused;
    mapping(address => address) public swapks;
    Oracle public oracle;    
    mapping(address => bool) public admins;
    
    
    constructor (address _priceOracle)
    public
    {
        admins[msg.sender] = true;
        feeAddress = msg.sender;
        oracle = Oracle(_priceOracle);
    }
    
    modifier onlyAdmin()
    {
        require(admins[msg.sender]);
        _;
    }

    modifier pausable() {
        require (!isPaused, "Contract has been paused");
        _;
    }
    
    
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
    
     function createSwap(uint _min, address _hashedsecret, string _btcReceiveAddress)
        public
        pausable
        payable
        returns (address newSwap)
    {
        require(msg.value >= GLOBAL_MIN_ETH, "Eth amount must be larger than the minimum");
        require (swapks[msg.sender] == 0x0, "User must not have a preexisting book");
        swapks[msg.sender] = new Swap(msg.sender, this, _min, _hashedsecret, _btcReceiveAddress);
        return swapks[msg.sender];
    }

    
     function takeSwap(address _EthSender, uint _EthAmount)
        public
        payable
        pausable
    {
        uint minETH = swapk.minETH();
        require(msg.value >= _EthAmount * (1 ether), "Insuffient ETH for this swapk"); // allow only whole number amounts
        Swap swapk = Swap(swapks[_EthSender]);
        bytes32 newId = swapk.take.value(msg.value)(msg.sender, _EthAmount);
    }
    


    function getSwapData(address _ethSender)
        public
        view
        returns (
        address  ethSender,
        uint   EthSenderMargin,
        uint  BtcSenderMargin,
        uint  EthToSend,   
        address  EthSender,
        address  BtcSender
    )
    {
        Swapk swapk = Swapk(swapks[_ethSender]);
        if (swapk != 0x0) {
        ethSender = _ethSender;
        EthSenderMargin = swapk.ethSenderMargin;
        BtcSenderMargin = swapk.btcSenderMargin;
        EthToSend = swapk.ethToSend;
        EthSender = swapk.ethSender;
        BtcSender = swapk.btcSender;
        }
    }
    
        function getProgData(address _ethSender)
        public
        view
        returns (
        uint _ethSender,
        uint BtcToSend,
        uint EthUSDPrice,
        uint BtcUSDPrice,
        uint BtcEthprice,
        uint initTimeStamp,
        uint StartOracleTime,
        bytes32 HashedSecret,
        string  BtcAddress,
        uint8   ContractStage
        )
    {
        swapk = swapks[_ethSender];
        if (swapk != 0x0) {
        ethSender = _ethSender;
        BtcToSend = swapk.btcToSend;
        EthUSDPrice = swapk.eth0Price;
        BtcUSDPrice = swapk.btc0Price;
        BtcEthprice = swapk.btceth0Price;
        InitTimeStamp = swapk.initTimeStamp;
        StartOracleTime = swapk.startOracleTime;
        HashedSecret =  swapk.hashedSecret;
        BtcAddress = swapk.btcAddress;
        ContractStage = swapk.kProgress;
        }
    }
    
     function activate(address _ethSender)
        public
    {
         Swapk swapk = Swapk(swapks[_ethSender]);
          if (swapk != 0x0) {
               uint oracleTimestamp  = oracle.getLastUpdateTime;
               eth0 = oracle.getCurrentPrice(0);
               btc0 = oracle.getCurrentPrice(2);
               btceth0 = oracle.getCurrentPrice(3);
              swapk.activate(_ethSender, oracleTimestamp, eth0, btc0, btceth0);
          }
    }
    
       function refundnoTake(address _ethSender)
        public
        
    {  
         Swap swapk = Swap(swapks[_EthSender]);
          if (swapk != 0x0) {
              uint oracleTimestamp  = oracle.getLastUpdateTime;
              swapk.refundnoTake(_ethSender, oracleTimestamp);
          }
        
    }
    
     function refundAll(address _ethSender)
        public
    {   
         if (swapk != 0x0) {
              swapk.refundAll(_ethSender);
          }
        
    }
    
     function refundnoActivate(address _ethSender)
        public
    {
         if (swapk != 0x0) {
              swapk.refundnoActivate(_ethSender);
          }
        
    }
    
     function redeem(address _ethSender, string _secret)
        public
    {
         if (swapk != 0x0) {
              swapk.redeem(_ethSender,_secret);
          }
        
    }
    
     function burn(address _numSubcontract)
        public
    {
         if (swapk != 0x0) {
              swapk. burn(_numSubcontract);
          }
        
    }

      function getOraclePrice(uint id)
        public
        view
        returns (uint ethPrice, uint btcPrice, uint btcethPrice)
    {   
        uint ethPrice  = oracle.getCurrentPrice(0);
        uint btcPrice  = oracle.getCurrentPrice(2);
        uint btcethPrice  = oracle.getCurrentPrice(3);
    }

    /** Get the timestamp of the last price update time
    * @param id the asset id of the desired asset
    * @return timestamp the price update timestamp
    */
    function getOracleUpdateTime(uint id)
        public
        view
          returns (uint oracleTimestamp)
    {   
        uint oracleTimestamp  = oracle.getLastUpdateTime;
    }

    }
    
    
    