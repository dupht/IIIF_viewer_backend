require("dotenv").config();
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
const { URLSearchParams } = require('url');

fetch.Promise = Bluebird;

function get_manifest( query ){
    let api_key = process.env.EUROPEAN_API_KEY;
    let url = new URL("https://www.europeana.eu/api/v2/search.json");
    let params = {query:"sv_dcterms_conformsTo:*iiif*", rows:"10", wskey: api_key, qf: "title:*"+ query +"*"}
    url.search = new URLSearchParams(params);


    fetch( url )
    .then( res => res.json() )
    .then( response => {
        //console.log( 'Success:', JSON.stringify(response) );
        link_array = [];
        manifest_array = [];
        response.items.forEach( function(value) {
            link_array.push(value.link);
        });
        link_array.forEach( function(value) {
            fetch(value)
            .then(res => res.json() )
            .then( response => {
                for(var i = 0; i < 3; i++ ){
                    if(response.object.aggregations[0].webResources[i].dctermsIsReferencedBy != null){
                        manifest_array.push(response.object.aggregations[0].webResources[i].dctermsIsReferencedBy[0]);
                        console.log(response.object.aggregations[0].webResources[i].dctermsIsReferencedBy[0]);
                    }
                }
            });
        });
    })
    .catch( error => console.error( 'Error:', error ) );
}

get_manifest("北斎");