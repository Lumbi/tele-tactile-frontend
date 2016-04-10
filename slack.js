var slackToken = getSettings(0);

if (slackToken != null){

	$.get('https://slack.com/api/channels.history?'+ slackToken +'&channel=C0SCHHM3J&count=5', function( data ) {
		$.get('/tele-tactile/slack-template.html', function(template) {
			//data.messages.reverse();
			for(var i = 0; i < data.messages.length; i++) {
				(function(index) {
					
					$.ajax({
					 async: false,//Async doit être false pour garder l'ordre des messages (p-t une idée a regarder plus tard pour le garder Async)
					 type: 'GET',
					 url: 'https://slack.com/api/users.info?'+ slackToken +'&&user=' + data.messages[i].user,
					 success: function(user) {
						// Formatting the date
						var date = new Date(data.messages[index].ts * 1000);

						function zeroPadding(number, digits) {
							return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
						}
						data.messages[index].ts = zeroPadding(date.getHours(), 2) + ':' + zeroPadding(date.getMinutes(), 2);
						data.messages[index].user = user.user;

						var output = Mustache.render(template, data.messages[index]);
						$('#plugin-slack').append(output);
					}
					});
						
				})(i)
			}
		});
	});
}


/* 					$.get('https://slack.com/api/users.info?'+ slackToken +'&&user=' + data.messages[i].user, function (user) {
                    // Formatting the date
                    var date = new Date(data.messages[index].ts * 1000);

                    function zeroPadding(number, digits) {
                        return Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
                    }
                    data.messages[index].ts = zeroPadding(date.getHours(), 2) + ':' + zeroPadding(date.getMinutes(), 2);
                    data.messages[index].user = user.user;

                    var output = Mustache.render(template, data.messages[index]);
                    $('#plugin-slack').append(output);
                });*/