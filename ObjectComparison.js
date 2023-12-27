let obj1 = {name:"person1", age:5, location:"Chennai"};
let obj2 = {age:5, name:"person1", location:"Chennai"};

let flag = true;

if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(let key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag = false;
            break;
        }
    }
}
else {
    flag = false;
}
console.log(flag);