/**
 * prints in STDOUT the string argument.
 * @param {string} message - The message to log.
 * @returns {void}
 */
// Arrow function
const displayMessage = (message) => console.log(message);

/**
 * Exports the displayMessage function.
 * @module displayMessage
 * @function
 */
// Default module export.
module.exports = displayMessage;
