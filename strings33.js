/*const styled = css => console.log(css);*/

/*const styled = aElement => {
    const el = document.createElement(aElement);
    return el;
};*/

const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        /*console.log(args[0]);*/
        const styles = args[0];
        el.style = styles;
        return el;
    };
};

/*styled('border-radius: 10px');*/

/*styled(`border-radius: 10px;
color: blue`);*/

/*styled`border-radius: 10px;
color: blue`;*/

/*const title = styled('h1');*/
/*const title = styled('div');*/
const title = styled('h1')`
    /*border-radius: 10px;*/
    background-color: red;
    color: blue;
`;

const subtitle = styled('span')`
    color: green;
`;

/*console.log(title);*/

title.innerText = 'We just cloned';
subtitle.innerText = 'Styled Components';

document.body.append(title, subtitle);