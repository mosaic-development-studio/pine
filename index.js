const express = require('express');
const app = express();
const router = express.Router();

app.use(express.static(__dirname + '/client'));

router.get('/article', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html lang="EN">
    <head>
        <meta charset="utf-8">
        <title>Editable List | Web Components</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <editable-list
            title="TODO"
            list-item-0="First item on the list"
            list-item-1="Second item on the list"
            list-item-2="Third item on the list"
            list-item-3="Fourth item on the list"
            list-item-4="Fifth item on the list"
            listItem="This will not appear"
            add-item-text="Add new list item:"
        >
        </editable-list>
        <script type="text/javascript" src="main.js"></script>
    </body>
    </html>`);
});

app.use('/', router);

function listen(port = 3000) {
    app.listen(port, () => console.log('Listening on ' + port));
}

listen(process.env.PORT);