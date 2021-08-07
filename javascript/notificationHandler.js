function showNotification(id) {
    markOpenedNotification(id);
    create_exception(notifications[id]["text"], notifications[id]["duration"], notifications[id]["style"]);
}

window.addEventListener('load',
    function() {
        removeOldNotificationsFromLocalStorage();
        prepareSpaceForNewNotifications();
        let id = findNotificationToOpen();
        ((id > 0) ? setTimeout(function() { showNotification(id); }, 5000) : {});
    }, false);

function numberOfNotifications() {
    return Object.keys(notifications).length;
}

function removeOldNotificationsFromLocalStorage() {
    for (var variable in localStorage) {
        if (variable.startsWith("idavis-notification_") &&
        parseInt(variable.split("_")[1]) > numberOfNotifications()) {
            localStorage.removeItem(variable);
        }
    }
}

function prepareSpaceForNewNotifications() {
    for (let i = 1; i <= numberOfNotifications(); i++) {
        if (localStorage.getItem("idavis-notification_"+i.toString()) === null) {
            markOpenedNotification(i, false);
        }
    }
}

function markOpenedNotification(id, showed=true) {
    if (showed) {
        localStorage.setItem("idavis-notification_"+id.toString(), Date.now().toString());
    } else {
        localStorage.setItem("idavis-notification_"+id.toString(), "0");
    }
}

function findNotificationToOpen() {
    let activeNotifications = [];
    for (let i = 1; i <= numberOfNotifications(); i++) {
        if (isAvailable(i)) {
            activeNotifications.push(notifications[i]);
        }
    }
    activeNotifications.sort((a,b) => (a.priority > b.priority) ? -1 : 1);
    return ((activeNotifications.length > 0) ? activeNotifications[0].id : -1);
}

function isAvailable(id) {
    if (notifications[id]["active"] === false) {
        return false;
    }
    if ((((Date.now() - parseInt(localStorage.getItem("idavis-notification_"+id.toString()))))/1000)
    < notifications[id].repeatAfter) {
        return false;
    }
    return true;
}