/*let mon = 'Sat';*/
let sat = 'Mon';

/*[sat, mon] = [mon, sat];*/
/*[sat, mon] = ['Sat', 'Mon'];*/

/*console.log(mon, sat);*/

const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

const [mon, tue] = days;

console.log(mon, tue);

const [, , , thu, fri] = days;

console.log(thu, fri);