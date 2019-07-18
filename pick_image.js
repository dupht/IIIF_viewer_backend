const fetch = require("node-fetch");

//https://www.dl.ndl.go.jp/api/iiif/8929985/manifest.json

const manifest_url = "http://dcollections.lib.keio.ac.jp/sites/default/files/iiif/FKZ/F7-A01-01/manifest.json";
const images = [];

fetch(manifest_url
).then(res => res.json())
.then(response => {
    console.log('Success!');
    response.sequences[0].canvases.forEach(element => {
        if(element.thumbnail) {
            images.push(element.thumbnail["@id"]);
        }else {
            images.push(element["@id"]);
        }
    });
})
.then(response => console.log(images))
.catch(error => console.error('Error:', error));