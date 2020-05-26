var api = 'https://node.parsicoin.net';
var apiList = ["https://node.parsicoin.net", "http://pool.parsicoin.net:18240", "http://wallet.parsicoin.net:18240"];
var blockTargetInterval = 120;
var coinUnits = 1000000000000;
var symbol = 'PARS';
var refreshDelay = 30000;
var whiteTheme = "css/themes/white-theme.css";
var nightTheme = "css/themes/dark-theme.css";
// pools stats by MainCoins
var poolsStat = 
	[
		["pool.parsicoin.net", "https://pool.parsicoin.net:8119/stats"],
		["pars.ms-pool.net.ua", "http://pars.ms-pool.net.ua:8117/stats"]
    ];
var nodesStat = 
	[
        ["https://node.parsicoin.net"],
        ["http://wallet.parsicoin.net:18240"],
        ["http://pool.parsicoin.net:18240"],
		["http://49.12.79.1:18240"]
    ];
