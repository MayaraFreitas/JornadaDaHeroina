$(document).ready(function() {
    getInterviews();
});

function getCardHtml(){

    return "<div class=\"col-xs-12 col-md-6\">"
    + "<div class=\"box card\">"
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

        var row = getCardHtml();
        row = row
        .replace("_interviewNumber_", item.Index)
        .replace("_name_", item.Name)
        .replace("_workFunction_", item.WorkFunction)
        .replace("_description_", item.Description)
        .replace("_companyName_", item.CompanyName);
        $("#cards").append(row);
      });
    });
}