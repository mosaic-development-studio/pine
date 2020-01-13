const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));

function listen(port = 3000) {
    app.listen(port, () => console.log('Listening on ' + port));
}

listen(process.env.PORT);