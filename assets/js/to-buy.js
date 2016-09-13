/**
 * Created by Benoit on 2016-09-10.
 */

//Todo : fetch from API
var toBuy = [
    {
        Name: "Redubull",
        Id: 1
    },
    {
        Name: "Plastique pour l'imprimante",
        Id: 2
    },
    {
        Name: "Costume de vélociraptor",
        Id: 3
    },
    {
        Name: "More redbull",
        Id: 4
    }
];

function buildList() {
    $.get("assets/html/to-buy-template.html", function (source) {
        var template = Handlebars.compile(source);

        toBuy.forEach(function (item) {
            $('#tobuy').append(template(item));
        });
    });
}

buildList();