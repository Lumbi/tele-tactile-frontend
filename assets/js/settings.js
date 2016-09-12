/**
 * Created by Benoit on 2016-05-31.
 */

function getSettings(noLine) {
    var lines = '';

    $.ajax({
        async: false,//Doit être false pour attendre le settings avant de continuer
        type: 'GET',
        url: '../../slack.txt',
        dataType: 'text',
        success: function (data) {
            lines = data.split("\n");
        }
    });
    return lines[noLine];
}

function getSettingsTest(noLine) {
    var lines = '';

    $.ajax({
        async: false,//Doit être false pour attendre le settings avant de continuer
        type: 'GET',
        url: 'slack.txt',
        dataType: 'text',
        success: function (data) {
            lines = data.split("\n");
        }
    });
    return lines[noLine];
}