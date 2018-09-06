const path = require('path');
const fs = require('fs');
const solc = require('solc');

// We cannot use require function to include Inbox.sol since require tries to execute a file it will throw error
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];