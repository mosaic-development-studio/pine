require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const { router } = require(__dirname + '/router');
const { server } = require(__dirname + '/server');

server.use(router);

module.exports = { server };