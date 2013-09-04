//globals: equal, responseText, statement, ok, deepEqual, QUnit, module, asyncTest, Util, start, golfStatements, console
/*jslint bitwise: true, browser: true, plusplus: true, maxerr: 50, indent: 4 */
function Config() {
	"use strict";
}
Config.endpoint = "https://cloud.scorm.com/ScormEngineInterface/TCAPI/public/";
Config.authUser = "";
Config.authPassword = "";
Config.actor = { "mbox":["jbnieto@gmail.com"], "name":["Julian Betancur"] };
Config.registration = "<registration-uuid>";
