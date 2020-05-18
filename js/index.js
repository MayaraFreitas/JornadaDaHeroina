$(document).ready(function() {
    getInterviews();
    getHosts();
});

function getInterviewsCardHtml(){

    return "<div class=\"col-xs-12 col-md-6\">"
    + "<div class=\"box organization-card\">"
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
        .replace("_companyName_", isValid(item.CompanyName) ? item.CompanyName : "Anônimo");
        $("#interview-cards").append(row);
      });
    });
}

function getHostsCardHtml(){
  return "<div class=\"col-xs-12 col-md-6\">"
    + "<div class=\"box hosts-card\">"
    + "<div class=\"photo\"><img src=\"../img/hosts/_photo_\"></div>"
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
      .replace("_photo_", isValid(item.Photo) ? item.Photo : "undefined-host.png")
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