const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
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
  return conn;
}

console.log('Connecting ...');
connect();