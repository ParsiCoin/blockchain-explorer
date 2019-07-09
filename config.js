var api = 'https://node.parsicoin.net';
var apiList = ["http://pool.parsicoin.net:18240", "http://parsicoin.net:18240"];
var blockTargetInterval = 120;
var coinUnits = 1000000000000;
var symbol = 'PARS';
var refreshDelay = 30000;
var whiteTheme = "css/themes/white-theme.css";
var nightTheme = "css/themes/dark-theme.css";
// pools stats by MainCoins
var poolsStat = 
	[
		["pool.parsicoin.net", "https://pool.parsicoin.net:8117/stats"],
		["pars.pool-pay.com", "http://pars.pool-pay.com:8117/stats"],
		["pars.ms-pool.net.ua", "http://pars.ms-pool.net.ua:8117/stats"]
    ];
var nodesStat = 
	[
        ["http://parsicoin.net:18240"],
        ["https://node.parsicoin.net"],
        ["http://explorer.parsicoin.net:18240"],
		["http://35.192.191.240:18240"]
    ];