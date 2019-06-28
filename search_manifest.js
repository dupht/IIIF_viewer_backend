require("dotenv").config();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;

export default function( query ){
    let api_key = process.env.EUROPEAN_API_KEY;
    let url = new URL("https://www.europeana.eu/api/v2/search.json");
    let params = {query:"sv_dcterms_conformsTo:*iiif*", rows:"10", wskey: api_key, qf: "title:*"+ query +"*"}
    url.search = new URLSearchParams(params);


    fetch( url )
    .then( res => res.json() )
    .then( response => {
        console.log( 'Success:', JSON.stringify(response) );
        return response
    })
    .catch( error => console.error( 'Error:', error ) );
}

