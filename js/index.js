$(document).ready(function() {

console.log("OI");

for(i = 0; i < 5; i++){
    $("#cards").append(getCardHtml());
}

});

function getCardHtml(){

    return "<div class=\"col-xs-12 col-md-6\">"
    + "<div class=\"box card\">"
        + "<div class=\"photo\"></div>"
        + "<div class=\"episode-info\">"
            + "<div class=\"epp-number\">#01</div>"
            + "<div class=\"title\">HEROÍNA</div>"
            + "<div class=\"name\">Mayara Alves</div>"
            + "<div class=\"work-function\">UX/Designer</div>"
            + "<div class=\"description\">"
                + "\"Apaixonada por solucionar problemas, e colocar tornar a experiênciaApaixonada por solucionar problemas, e colocar tornar a experiênciaApaixonada por solucionar problemas, e colocar tornar a experiência inesquecível"
            + "</div>"
            + "<div class=\"company-name\">Xxxxx Soluções</div>"
        + "</div>"
    + "</div></div>";
}