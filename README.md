# ParsiCoin BlockChain Explorer
Block explorer for ParsiCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon parsicoind. It should be accessible from the Internet. Run parsicoind with open port as follows:
```bash
./parsicoind --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=18230
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.

Based on :

https://github.com/Karbovanets/Karbowanec-Blockchain-Explorer
