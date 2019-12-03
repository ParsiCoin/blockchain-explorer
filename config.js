var api = 'https://us.parsicoin.net';
var apiList = ["http://eu.parsicoin.net", "https://node.parsicoin.net", "https://us.parsicoin.net"];
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
        ["http://parsicoin.net:18240"],
        ["https://node.parsicoin.net"],
        ["https://eu.parsicoin.net"],
		["https://us.parsicoin.net"],
		["http://ir.parsicoin.net:18240"]
    ];
