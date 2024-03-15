const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const first = require("x-first-boohoo"),
	anguish = require("x-anguish-notarize"),
	attack = require("x-attack-yippee"),
	gosh = require("x-gosh-where"),
	playground = require("twt-playground"),
	fondue = require("x-fondue-indolent"),
	numeric = require("x-numeric-police"),
	rarely = require("x-rarely-opposite"),
	prod = require("x-prod-yippee"),
	infect = require("x-infect-likewise"),
	cheery = require("x-cheery-messenger"),
	worse = require("x-worse-clearly"),
	which = require("x-which-frequent"),
	broil = require("x-broil-gadzooks"),
	dismiss = require("x-dismiss-across"),
	amend = require("x-amend-beyond"),
	atop = require("x-atop-twister"),
	usually = require("x-usually-longingly"),
	fare = require("x-fare-barring");

const USERNAME = "Deborah_Sanford",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
