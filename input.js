const { messages } = require("./constants");

// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  messages[data]
    ? connection.write(messages[data])
    : console.log("Invalid input");

  if (data === "\u0003") process.exit();
};

module.exports = { setupInput };
