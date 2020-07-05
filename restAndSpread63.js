/*const user = {
    name: 'jaei',
    age: 23,
    password: 12345
};*/

/*user['password'] = null;

console.log(user);*/

/*const killPassword = ({password, ...rest}) => rest;

const cleanUser = killPassword(user);

console.log(cleanUser);*/

/*const setCountry = ({country = 'KR', ...rest}) => ({country, ...rest});

console.log(setCountry(user));*/

const user = {
    NAME: 'jaei',
    age: 23,
    password: 12345
};

console.log(user);

const rename = ({NAME: name, ...rest}) => ({name, ...rest});

console.log(rename(user));