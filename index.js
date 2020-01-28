const { server } = require(__dirname + '/application');

server.listen(3000, () => {
    console.log('SSR running on port 3000');
});