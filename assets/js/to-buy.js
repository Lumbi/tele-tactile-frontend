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
    var html = '';
    toBuy.forEach(function (item) {
        html =
            '<tr>' +
            '<td>' +
            '<label class="checkbox">' +
            '<input type="checkbox" value="" data-toggle="checkbox" onclick="check(' + item.Id + ')>' +
            '</label>' +
            '</td>' +
            '<td>' + item.Name + '</td>' +
            '<td class="td-actions text-right">' +
            '<button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs" onclick="edit(' + item.Id + ')>' +
            '<i class="fa fa-edit"></i>' +
            '</button>' +
            '<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs" onclick="remove(' + item.Id + ')">' +
            '<i class="fa fa-times"></i>' +
            '</button>' +
            '</td>' +
            '</tr>'
    });
    return html;
}

document.getElementById('tobuy').innerHTML = buildList();