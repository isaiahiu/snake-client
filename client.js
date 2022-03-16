const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", (connect) => {
    console.log("Successfully connected to server");
    conn.write("Name: Zae");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = { connect };
