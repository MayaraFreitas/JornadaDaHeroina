$(document).ready(function() {
    getInterviews();
    getHosts();
});

function getInterviewsCardHtml(){

    return "<div class=\"col-xs-12 col-md-6\" onclick=\"redirectToEpisode(_episodeNumber_);\">"
    + "<div class=\"box organization-card pointer\">"
        + "<div class=\"photo\"></div>"
        + "<div class=\"episode-info\">"
            + "<div class=\"epp-number\">#_interviewNumber_</div>"
            + "<div class=\"title\">HEROÍNA</div>"
            + "<div class=\"name\">_name_</div>"
            + "<div class=\"work-function\">_workFunction_</div>"
            + "<div class=\"description\">_description_</div>"
            + "<div class=\"company-name\">_companyName_</div>"
        + "</div>"
    + "</div></div>";
}

function getInterviews(){
  var flickerAPI = "https://api.sheetson.com/v1/sheets/Entrevistas?spreadsheetId=14HNQD6hduOtPvJzUX4nOmxFp071diarN1lVlyI6iadg";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.results, function( i, item ) {

        var row = getInterviewsCardHtml();
        row = row
        .replace("_interviewNumber_", item.Index)
        .replace("_name_", isValid(item.Name) ? item.Name : "Anônimo")
        .replace("_workFunction_", isValid(item.WorkFunction) ? item.WorkFunction : "Anônimo")
        .replace("_description_", isValid(item.Description) ? item.Description : "Anônimo")
        .replace("_companyName_", isValid(item.CompanyName) ? item.CompanyName : "Anônimo")
        .replace("_episodeNumber_", item.rowIndex);
        
        $("#interview-cards").append(row);
      });
    });
}

function getHostsCardHtml(){
  return "<div class=\"col-xs-12 col-md-6\">"
    + "<div class=\"box hosts-card \">"
    + "<div class=\"photo\"><img src=\"_photo_\"></div>"
    + "<div class=\"info\">"
    + "<div class=\"name\">_name_</div>"
    + "<div class=\"work-function\">_function_</div>"
    + "<div class=\"description\">_description_</div>"
    + "</div></div></div>";
}

function getHosts(){
  var flickerAPI = "https://api.sheetson.com/v1/sheets/Hosts?spreadsheetId=14HNQD6hduOtPvJzUX4nOmxFp071diarN1lVlyI6iadg";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
  .done(function( data ) {
    $.each( data.results, function( i, item ) {
      var row = getHostsCardHtml();
      row = row
      .replace("_name_", isValid(item.Name) ? item.Name : "Anônimo")
      .replace("_function_", isValid(item.Function) ? item.Function : "Anônimo")
      .replace("_description_", isValid(item.Description) ? item.Description : "[Sem Descrição]")
      .replace("_photo_", isValid(item.Photo) ? ("../img/hosts/" + item.Photo) : "../img/undefined-person.png")
      $("#hosts-cards").append(row);
    });
  });
}

function isValid(item){
  if(item == null || item == "" || item == "undefined"){
    return false;
  }
  return true;
}

function scrollTo() {
  console.log('SCROOOLLLL: ');
  //$(id).scrollIntoView({behavior: "smooth"})
}

function redirectToEpisode(code) {
  var array = window.location.pathname.split( '/' );
  var newArray = array.slice(0, array.length - 1);
  var newUrl = window.location.origin + newArray.join('/') + '/episode.html?value=' + code;
  window.location.replace(newUrl);
}
