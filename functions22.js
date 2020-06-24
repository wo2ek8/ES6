/*
const email = [
    'ji@no.com',
    'naver@google.com',
    'hyungjin@gmail.com',
    'jaei@nomad.com'
];
*/

/*const foundMail = email.find(item => true);*/

/*const foundMail = email.find(item => item.includes('@gmail.com'));*/

/*const foundMail = email.find(function(item) {
    return item.includes('@gmail.com');
});*/

/*console.log(foundMail);*/

const emails = [
    'ji@no.com',
    'naver@google.com',
    'hyungjin@gmail.com',
    'jaei@nomad.com',
    'jaei@gmail.com'
];

const noGmail = emails.filter(potato => !potato.includes('@gmail'));

console.log(noGmail);

/*const name = 'son jaei';

console.log(name.split(' '));*/

/*emails.forEach(email => {
    console.log(email.split('@')[0]);
});*/

/*const cleaned = [];*/

/*emails.forEach(email => {
    cleaned.push(email.split('@')[0]);
});*/

/*const cleaned = emails.map(email => email.split('@')[0]);*/

/*const cleaned = emails.map((email, index) => ({
    username: email.split('@')[0],
    index
}));*/

const cleaned = emails.map((email, index) => ({
    username: email.split('@')[0],
    points: index
}));

/*console.log(cleaned);*/

console.table(cleaned);