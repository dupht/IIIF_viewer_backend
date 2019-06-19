const fetch = require("node-fetch");

const manifest_url = "https://www.dl.ndl.go.jp/api/iiif/8929985/manifest.json";
const images = [];

fetch(manifest_url
).then(res => res.json())
.then(response => {
    console.log('Success!');
    response.sequences[0].canvases.forEach(element => {
        images.push(element.thumbnail["@id"]);
    });
})
.then(response => console.log(images))
.catch(error => console.error('Error:', error));