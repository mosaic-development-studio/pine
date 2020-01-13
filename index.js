const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/client'));

router.get('/article', (req, res, next) => {
    res.send('<h1>article</h1>');
});

app.use('/', router);

function listen(port = 3000) {
    app.listen(port, () => console.log('Listening on ' + port));
}

listen(process.env.PORT);