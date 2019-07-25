require("dotenv").config();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;

search_manifest_url = async function( id ){
    let url = new URL("https://www.europeana.eu/api/v2/record" + id + ".json");
    let params = { wskey: process.env.EUROPEAN_API_KEY }
    url.search = new URLSearchParams(params);

    return fetch( url )
    .then(res => res.json() )
    .then(response => {
    })
    .catch(error => console.error( 'Error:', error ));
}


get_manifest = async function( req_query, req_theme, req_sort, req_rows ){
    let api_key = process.env.EUROPEAN_API_KEY;
    let url = new URL("https://www.europeana.eu/api/v2/search.json");
    let params = {query:"sv_dcterms_conformsTo:*iiif*", rows: req_rows, wskey: api_key, qf: "title:*"+ req_query +"*", theme: req_theme, sort: req_sort };
    url.search = new URLSearchParams(params);
    
    return fetch( url )
    .then( res => res.json() )
    .then( response => {
        console.log( 'Success:');
        manifest_array = [];
        response.items.forEach( async function(value) {
            manifest_url = await search_manifest_url(vlaue.id);
            manifest_array.push({
                "url" : manifest_url,
                "title" : value.title[0],
                "description" : value.dcDescription[0],
                "thumbnail": value.edmPreview[0],
                "license": value.dataProvider[0]
            });
        });
        return manifest_array;
    })
    .catch( error => console.error( 'Error:', error ) );
}

console.log( get_manifest("北斎", "", "", "10") );