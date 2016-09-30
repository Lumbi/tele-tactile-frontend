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
        // not working with firefox
        //var template = Handlebars.compile(source);

        toBuy.forEach(function (item) {
            $('#tobuy').append(formatList(item));
        });
    });
}

buildList();

function formatList(item) {
    var html = '<tr>' +
        '<td>' + item.Name + '</td>' +
        '<td class="td-actions text-right">' +
        ' <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs" onclick="edit(' + item.Id + ')">' +
        '<i class="fa fa-edit"></i>' +
        '</button>' +
        '<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs" onclick="remove(' + item.Id + ')">' +
        ' <i class="fa fa-times"></i>' +
        '</button>' +
        '</td>' +
        '</tr>';

    return html;
}