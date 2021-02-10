const net = require('net');

const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  }, () => {
    // 'connect' listener.
    console.log('connected to server!');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });
  conn.write('Name: GM', () => {
    console.log('Write completed.');
  })
  //
  // setTimeout(() => {
  //   conn.write("Move: up", () => {
  // })}, 50)
  // setInterval(() => {
  //   conn.write("Move: up", () => {
  // })}, 50);
  
  return conn;
}

module.exports = { connect };