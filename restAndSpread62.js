const infiniteArgs = (...kimchi) => console.log(kimchi);

infiniteArgs('1', 2, true, 'lalala', [1, 2, 3, 4], 'aaaaaaaaaa', 'bbbbbbbbbbb', 1, 4, 5);

/*const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(potato);
}*/

const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(rest);
}

bestFriendMaker('jaei', 'jaemin', '추워', '시발');