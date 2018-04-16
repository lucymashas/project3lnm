const axios = require("axios");
const cheerio = require("cheerio");
const ObjectId = require('mongodb').ObjectId;
const db = require("../models");

function getresult(baseurl){
    axios
    .get(baseurl)
    .then (function(response){
        let $=cheerio.load(response.data);

        $("tr").each(function(i,element){
         var result={};
          link= $(this).find("a").attr("href");
          result.link = "https://www.worldwildlife.org/" + link;
          result.commonName=$(this).find("a").text();
          result.scientificName=$(this).children().eq(1).text();
          result.status= $(this).children("td").eq(2).text();
          if (result.scientificName === ""){
            result.scientificName = result.commonName;
          }
//  Pass the data into the database
            db.Animal.create(result)
              .then(function(dbAnimal){
              })
              .catch(function(err){
                // return res.json(err);
                console.log(err.message);
              })
        });
    });
}

module.exports = {
  scrape: function(req, res) {
    getresult("https://www.worldwildlife.org/species/directory?sort=extinction_status&direction=desc");
    console.log("Scrape page1 Completed");
    getresult("https://www.worldwildlife.org/species/directory?direction=desc&page=2&sort=extinction_status");
    console.log("Scrape page2 Completed");
    axios
    .get("https://ecos.fws.gov/ecp0/reports/ad-hoc-species-report?kingdom=V&status=E&status=T&status=EmE&status=EmT&status=SAE&status=SAT&mapstatus=1&fleadreg=on&fstatus=on&finvpop=on&header=Listed+Vertebrate+Animals")
    .then (function(response){
      let $=cheerio.load(response.data);

      $("tr").each(function(i,element){
           var result={};
           
            link= $(this).find("a").attr("href");
            result.link = "https://ecos.fws.gov" + link;
            result.scientificName=$(this).find("i").text();
            result.commonName=$(this).children().eq(1).text();
            result.status= $(this).children("td").eq(3).text();

 //  Pass the data into the database
            db.Animal.create(result)
            .then(function(dbAnimal){
            })
            .catch(function(err){
              console.log(err.message);
            })
      });
        res.send("scrape complete");
        console.log("Process Completed");
    });
    
  } 
}

   
