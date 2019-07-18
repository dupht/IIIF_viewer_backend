require("dotenv").config();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;


function get_manifest( query ){
    let api_key = process.env.EUROPEAN_API_KEY;
    let url = new URL("https://www.europeana.eu/api/v2/search.json");
    let params = {query:"sv_dcterms_conformsTo:*iiif*", rows:"10", wskey: api_key, qf: "title:*"+ query +"*"};
    url.search = new URLSearchParams(params);


    fetch( url )
    .then( res => res.json() )
    .then( response => {
        console.log( 'Success:');
        manifest_array = [];
        var i=0;
        response.items.forEach( function(value) {
            manifest_array.push({
                "url" : "https://iiif.europeana.eu/presentation" + value.id + "/manifest.json",
                "title" : value.title[0],
                "description" : value.dcDescription[0]
            });
            console.log(manifest_array[i]);
            i++;
        });
    })
    .catch( error => console.error( 'Error:', error ) );
}

get_manifest("北斎");