/**
 * Created by benoit on 2016-09-07.
 */

//Get number of notification (send date to server, server check open notification then send the number

var notifications = [
    {
        path: "https://www.youtube.com/user/LeZap2Spi0n",
        text: "New Zap de spion"
    },
    {
        path: "https://www.youtube.com/watch?v=HL1UzIK-flA",
        text: "Watch this!"
    }
];

// Write the number of notification
document.getElementById('number-notifications').innerHTML = notifications.length;
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
        html += '<li><a href="' + notif["path"] + '">' + notif["text"] + '</a></li>';
    })
    return html;
}
