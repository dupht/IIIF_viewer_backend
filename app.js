/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();
const fetch = require("node-fetch");

const manifest_url = "https://www.dl.ndl.go.jp/api/iiif/8929985/manifest.json";
const images = [];


app.get("/", function (manifest_url, res){
    fetch(manifest_url)
    .then(res => res.json())
    .then(response => {
        console.log('Success!');
        response.sequences[0].canvases.forEach(element => {
            images.push(element.thumbnail["@id"]);
        });
    })
    .then(()=>{
        res.send(images);
        console.log(images);
    })
    .catch(error => console.error('Error:', error));    
});

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
app.listen(3000, ()=>{
    console.log("listen: port 3000");
});