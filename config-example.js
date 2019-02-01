/* Websocket server and port the bot should connect to. Check the 'Request URL'
 * of the websocket. If you don't know what that means, just leave this as-is. */
exports.server = "sim.psim.us";
exports.port = 80;

/* The server ID. This should almost certainly be "showdown", but just in case,
 * check where the AJAX call "goes to" when you log in. For example, on the PS server,
 * it will say ~~showdown somewhere in the URL, indicating the server ID is "showdown"
 * If you don't know what that means, just leave this as-is.   */
exports.serverid = "showdown";

/* The name of the bot and password. I recommend setting up the account prior to
 * launching node main.js for the first time. Use a strong password if you
 * intend for this bot to be a roombot.   */
exports.nick = "";
exports.pass = "";
exports.avatar = "";

/* Rooms that should be joined in quotes, separated by commas. Showdown
 * policy is not to join lobby, so please don't do that. */
exports.rooms = [""];

/* Any private rooms that should be joined in quotes, separated by commas.
 * The only difference in private rooms are moderation type (you can't warn).
 * Groupchats are included as private rooms. If the room fails to exist, the
 * bot will just ignore it and move on.   */
exports.privaterooms = [""];

/* The character to use to execute commands from commands.js. The command
 * character must be made of more than just alphanumeric characters and
 * spaces, and you really shouldn't use ! or / because those are normal
 * commands.   */
exports.commandcharacter = '.';

/* If this is changed to true, config changes can be adjusted on-the-fly.
 * It's pretty much useless though (use .reload to dynamically update
 * parser and commands), so I would just leave it false.*/
exports.watchconfig = false;

/* Secondary websocket protocols should be defined here. However, I'm told
 * Showdown doesn't support these yet, so it's best to leave this empty. */
exports.secprotocols = [];

/* Logs information to the console so you can monitor various things.
 * 0 = error, ok, info, debug, recv, send
 * 1 = error, ok, info, debug, cmdr, send
 * 2 = error, ok, info, debug (recommended for development)
 * 3 = error, ok, info (recommended for production)
 * 4 = error, ok
 * 5 = error   */
exports.debuglevel = 2;

/* Users here will never be punished by the bot. By default, all
 * users with drivers or higher will not be warned.   */
exports.whitelist = [];

/* Add a help link for the bot here, e.g. to pastebin to explain commands. */
exports.botguide = "";

/* Turns on moderation capabilities for the bot. THE BOT IS NOT HUMAN AND
 * DOES NOT MAKE A PERFECT MODERATOR. If enabled, I encourage roomstaff to
 * override the bot if it is being unfair. There is a relatively serious bug
 * where rarely on disconnects, two instances of the bot will rejoin a room, so
 * it doubly counts chat input and advances punishments accordingly. Use with caution.
 *
 * -Spamming/flooding is considered to be users who send 6 lines or more in 6 or fewer seconds.
 * -CAPS abuse is considered to be a chat line with at least 18 letters in CAPS and
 * with 80% of their total letters being in CAPS.
 * -Stretching is considered to be using the same character 8 times in a row, or some
 * group of characters 5 times in a row.
 * - Punishments are accelerated if a user continues to activate the bot's warnings/mutes.   */
exports.allowmute = false;

/* You can customize what punishments are appropriate after repeated offenses here.*/
exports.punishvals =
{
	1: "warn",
	2: "mute",
	3: "hourmute",
	4: "hourmute",
	5: "roomban"
};
