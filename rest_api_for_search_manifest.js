const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const search_manifest = require("./search_manifest");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post("/search", async (req, res, next) => {

    (async () => {
        let request = req.body;

        let list = await search_manifest.get_manifest(request.query, request.theme, request.sort, request.rows);
        console.log(JSON.stringify(list));
        res.status(200).json(JSON.stringify(list));

    })().catch(next);

});

app.listen(3000, () => console.log("listen on port 3000"));