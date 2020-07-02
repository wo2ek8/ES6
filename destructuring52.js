const settings = {
    color: {
        chosen_color: 'dark'
    }
};

const {
    color: {chosen_color = 'light'}
} = settings;

console.log(chosen_color);