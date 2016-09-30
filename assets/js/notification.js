/**
 * Created by benoit on 2016-09-07.
 */

//Get number of notification (send date to server, server check open notification then send the number

var notifications = [
    {
        NewUntil: "2016-09-30T20:30:52",
        HtmlPath: "https://www.youtube.com/user/LeZap2Spi0n",
        Text: "New Zap de spion"
    },
    {
        NewUntil: "2016-09-30T20:30:52",
        HtmlPath: "https://www.youtube.com/watch?v=HL1UzIK-flA",
        Text: "Watch this!"
    }
];

// Write the number of notification
document.getElementById('number-notifications').innerHTML = notifications.length.toString();
// Write the notification
document.getElementById('notification-area').innerHTML = formatNotifications(notifications);

/**
 * Put the notification in a html format
 * @param notifications
 * @returns {string}
 */
function formatNotifications(notifications) {
    var html = '';
    notifications.forEach(function (notif) {
        html += '<li><a href="' + notif["HtmlPath"] + '">' + notif["Text"] + '</a></li>';
    })
    return html;
}
