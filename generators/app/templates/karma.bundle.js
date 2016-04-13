/**
 *
 */
const context = require.context('./<%= props.testsPath %>', true, /\.js$/);
context.keys().forEach(context);
