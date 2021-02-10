const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');
const output = connect();


setupInput(output);

