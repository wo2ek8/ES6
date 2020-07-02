/*const settings = {
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: 'dark'
    }
};*/

const settings = {
    notifications: {
        alerts: true,
        unfollow: false
    },
    color: {
        theme: 'dark'
    }
};

/*if(settings.notifications.follow) {
    //send email
}*/

/*const follow = settings.notifications.follow;*/

/*const {
    notifications: {follow}
} = settings;*/

/*const {
    notifications: {follow},
    color
} = settings;*/

/*const {
    notifications
} = settings;*/

/*const notifications = settings.notifications;*/

/*const {notifications} = settings;*/

/*const {
    notifications: {follow = false}
} = settings;*/

/*const {
    notifications: {follow = '재이가짱이야'}
} = settings;*/

const {notifications: {follow = 'false'} = {}} = settings;

/*console.log(follow);*/
/*console.log(color);*/

/*console.log(notifications);*/
console.log(follow);

/*const {
    color: {theme}
} = settings;*/

const {
    color: {theme = 'light'}
} = settings;

console.log(theme);