/*function saveSettings(followAlert, unfollowAlert, mrkAlert, themeColor) {
    
};*/

/*function saveSettings(settings) {
    console.log(settings);
}*/

/*function saveSettings(settings) {
    if(!settings.mkt) {
        
    }
    saveColor(settings.color)
}*/

/*function saveSettings({follow, alert, color = 'blue'}) {
    console.log(color);
}*/

function saveSettings({notifications, color: {theme}}) {
    console.log(theme);
}


/*saveSettings({
    follow: true,
    alert: true,
    mkt: true,
    color: 'green'
});*/

/*saveSettings({
    follow: true,
    alert: true,
    mkt: false,
    color: 'green'
});*/

/*saveSettings({
    follow: true,
    alert: true,
    mkt: false
});*/

saveSettings({
    notifications: {
        follow: true,
    alert: true,
    mkt: false
    },
    color: {
        theme: 'blue'
    }
});