$(document).ready(function() {
    getParam();
});

function getParam(){
    var params = window.location.search.substring(1).split('&');
    var param = params[0].split('=');
    getHosts(param[1]);
}

function getHosts(hostId){
    var flickerAPI = "https://api.sheetson.com/v1/sheets/Entrevistas?spreadsheetId=14HNQD6hduOtPvJzUX4nOmxFp071diarN1lVlyI6iadg";
    $.getJSON( flickerAPI, {
      tags: "mount rainier",
      tagmode: "any",
      format: "json"
    })
    .done(function( data ) {
        var item = data.results.find(x => x.rowIndex == hostId);
        $("#name").append(isValid(item.Name) ? item.Name : "Anônimo");
        $("#function").append(isValid(item.WorkFunction) ? item.WorkFunction : "Anônimo");
        $("#date").append(isValid(item.Date) ? item.Date : "Anônimo");
        $("#photo").attr('src', isValid(item.Photo) ? ("../img/interviews/" + item.Photo) : "../img/undefined-person.png");
        
    });
}

function isValid(item){
    if(item == null || item == "" || item == "undefined"){
      return false;
    }
    return true;
  }

  function redirectToIndex(local) {
      console.log("local");
    var array = window.location.pathname.split( '/' );
    var newArray = array.slice(0, array.length - 1);
    var newUrl = window.location.origin + newArray.join('/') + '/index.html' + local;
    window.location.replace(newUrl);
  }
  

