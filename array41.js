/*const friends = [
    'jaei@gmail.com',
    'jihan@naver.com',
    'seungjae@yahoo.com',
    'woohyub@hotmail.com',
    'minbyeong@korea.com'
];*/
const friends = [
    'jaei@gmail.com',
    'jihan@naver.com',
    'seungjae@yahoo.com',
    'woohyub@hotmail.com',
    'minbyeong@gorea.com'
];

/*const target = friends.find(friend => friend.includes('@korea.com'));*/
/*const target = friends.find(friend => true);*/
const target = friends.findIndex(friend => friend.includes('@gorea.com'));

console.log(target);

/*friends[target] = 'minbyeong@korea.com';*/

console.log(friends);

const username = friends[target].split('@')[0];

const email = 'korea.com';

console.log(username, email);

console.log(`${username}@${email}`);