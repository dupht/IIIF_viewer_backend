require("dotenv").config();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;


exports.get_manifest = async function( req_query, req_theme, req_sort, req_rows ){
    let api_key = process.env.EUROPEAN_API_KEY;
    let url = new URL("https://www.europeana.eu/api/v2/search.json");
    let params = {query:"sv_dcterms_conformsTo:*iiif*", rows: req_rows, wskey: api_key, qf: "title:*"+ req_query +"*", theme: req_theme, sort: req_sort };
    url.search = new URLSearchParams(params);
    
    return fetch( url )
    .then( res => res.json() )
    .then( response => {
        console.log( 'Success:');
        manifest_array = [];
        response.items.forEach( function(value) {
            manifest_array.push({
                "url" : "https://iiif.europeana.eu/presentation" + value.id + "/manifest.json",
                "title" : value.title[0],
                "description" : value.dcDescription[0],
                "thumbnail": ""
            });
        });
        return manifest_array;
    })
    .catch( error => console.error( 'Error:', error ) );
}