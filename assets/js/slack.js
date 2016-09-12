(function () {
    //var slackToken = getSettings(0);
    //var slackToken = getSettingsTest(0);
    var slackToken = 'xoxp-10824024388-40848905906-72679230804-50209b8614';
    var templatePath = 'assets/html/slack-template.html';

    if (slackToken != null) {
        $.get('https://slack.com/api/channels.history?token=' + slackToken + '&channel=C0SCHHM3J&count=10', function (data) {
            $.get(templatePath, function (template) {
                for (var i = 0; i < data.messages.length; i++) {
                    (function (index) {
                        $.ajax({
                            async: false,//Async doit être false pour garder l'ordre des messages (p-t une idée a regarder plus tard pour le garder Async)
                            type: 'GET',
                            url: 'https://slack.com/api/users.info?token=' + slackToken + '&&user=' + data.messages[i].user,
                            success: function (user) {
                                // Formatting the date
                                var date = new Date(data.messages[index].ts * 1000);

                                function zeroPadding(number, digits) {
                                    return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
                                }

                                data.messages[index].ts = zeroPadding(date.getHours(), 2) + ':' + zeroPadding(date.getMinutes(), 2);
                                data.messages[index].user = user.user;

                                var output = Mustache.render(template, data.messages[index]);

                                $('#slack-chat').append(output);
                            }
                        });
                    })(i)
                }
            });
        });
    }
})();