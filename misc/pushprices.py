import requests
from datetime import datetime, timedelta
import os
from pathlib import Path
import numpy as np
from web3 import Web3, HTTPProvider
import time
import json

if os.name == 'nt':
    contract_abi = Path('C:/users/Eric/documents/mega/oracleNY1/Oracle.json')
else:
    contract_abi = Path('/home/lorenzo/oracle/Oracle.json')
wallet_private_key = "0x1ecb9e4a4b7be7d33392c7c53fa23a31daab1917a8ac271efa8573f166cfa62b"
wallet_address = "0xd7184Fafc2B4337E49FD059CA9FD04a98b63537a"

#  provider_url =  "https://ropsten.infura.io/v3/30a3fd3439754a74aa30ffae717d5d4c"
provider_url = "https://mainnet.infura.io/v3/30a3fd3439754a74aa30ffae717d5d4c"
contract_address = "0xb0009Be42625f9AD53221DD0aC1BB1b799467AC0"

start_time = time.time()
gas_url = "https://ethgasstation.info/json/ethgasAPI.json"
gas_p = 0
req = requests.get(gas_url)
if (req.status_code == 200):
    t = json.loads(req.content)
    gas_p = t['fast'] / 10
    print('gas price', gas_p)
else:
    gas_p = 15

w3 = Web3(HTTPProvider(provider_url))
with open(contract_abi) as f:
    contract_abi = json.load(f)
    # 1 for mainnet, 3 for ropsten
    contract_address = contract_abi['address']
    contract_address = w3.toChecksumAddress(contract_address)
    contract = w3.eth.contract(address=contract_address, abi=contract_abi['abi'])


def seive(array_in):
    array_in = array_in[array_in != 0]
    num1 = array_in.size
    if num1 > 1:
        med1 = np.median(array_in)
    return med1


def update_PriceBatch(ethprice, spxprice, btcprice, final_day):
    nonce = w3.eth.getTransactionCount(wallet_address)
    txn_dict = contract.functions.updatePrices(ethprice, spxprice, btcprice, final_day).buildTransaction({
      'gas': 500000,
      'gasPrice': w3.toWei(gas_p, 'gwei'),
      'nonce': nonce,
    })
    signed_txn = w3.eth.account.signTransaction(txn_dict, private_key=wallet_private_key)
    result = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.waitForTransactionReceipt(result)
    if tx_receipt is None:
        return {'status': 'failed', 'error': 'timeout'}
    return {'status': 'added'}


def update_Settle(ethprice, spxprice, btcprice):
    nonce = w3.eth.getTransactionCount(wallet_address)
    txn_dict = contract.functions.settlePrice(ethprice, spxprice, btcprice).buildTransaction({
      'gas': 900000,
      'gasPrice': w3.toWei(gas_p, 'gwei'),
      'nonce': nonce,
    })
    signed_txn = w3.eth.account.signTransaction(txn_dict, private_key=wallet_private_key)
    result = w3.eth.sendRawTransaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.waitForTransactionReceipt(result)
    if tx_receipt is None:
        return {'status': 'failed', 'error': 'timeout'}
    return {'status': 'added'}

def is_final_day():
    date_num = datetime.today().weekday()
    if date_num == 3:
        return True
    else:
        return False

if __name__ == "__main__":
    AVdate = datetime.now().date() - timedelta(days=0)
    current_date = AVdate.strftime("%y%m%d")
    is_final = is_final_day()

    eth_app = 'eth' + current_date + '.txt'
    btc_app = 'btc' + current_date + '.txt'
    spx_app = 'spx' + current_date + '.txt'

    if os.name == 'nt':
        eth_new = Path('C:/users/Eric/documents/mega/oracleNY1/data/') / eth_app
        btc_new = Path('C:/users/Eric/documents/mega/oracleNY1/data/') / btc_app
        spx_new = Path('C:/users/Eric/documents/mega/oracleNY1/data/') / spx_app
        contract_abi = Path('C:/users/Eric/documents/mega/oracleNY1/Oracle.json')
    else:
        eth_new = Path('/home/lorenzo/oracle/data/') / eth_app
        btc_new = Path('/home/lorenzo/oracle/data/') / btc_app
        spx_new = Path('/home/lorenzo/oracle/data/') / spx_app
        contract_abi = Path('C:/users/Eric/documents/mega/oracleNY1/Oracle.json')

    spx_final_f = open(spx_new, 'r')
    spx_final = spx_final_f.readline()
    spx_final_f.close()
    spx_final = float(spx_final)

    eth_final_f = open(eth_new, 'r')
    eth_final = eth_final_f.readline()
    eth_final_f.close()
    eth_final = float(eth_final)

    btc_final_f = open(btc_new, 'r')
    btc_final = btc_final_f.readline()
    btc_final_f.close()
    btc_final = float(btc_final)

    w3 = Web3(HTTPProvider(provider_url))
    with open(contract_abi) as f:
        contract_abi = json.load(f)
        contract = w3.eth.contract(address=contract_address, abi=contract_abi['abi'])
    currDay = contract.functions.currentDay().call()
    isSettle = contract.functions.nextUpdateSettle().call()
    updateTime = contract.functions.lastUpdateTime().call()
    OracleContractDay = datetime.utcfromtimestamp(updateTime).strftime("%y%m%d")


    if current_date != OracleContractDay:
        if not isSettle:
            eth_tx = update_PriceBatch(int(eth_final * 1e2), int(spx_final * 1e2), int(btc_final * 1e2), is_final)
            print('regular')
        else:
            eth_tx = update_Settle(int(eth_final * 1e2), int(spx_final * 1e2), int(btc_final * 1e2))
            print('settle')


print(int(eth_final * 1e2), int(spx_final * 1e2), int(btc_final * 1e2))
print('is final flag', is_final)
print('isSettle', isSettle)
print('current date', current_date)
print('date of old data', OracleContractDay)
print('finished')
