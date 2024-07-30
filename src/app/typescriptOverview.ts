var myVar:string = "";
myVar = '10';

type User = {
    name:string,
    age:number,
    married:boolean
};

interface User2 {
    name:string,
    age:number,
    married:boolean
};

var list = ["","",""];

var personnel:User2|undefined = undefined; 
personnel = {name:"",age:0,married:true};
// personnel = {description:""};

function someFx():number{
    return 5;
}

(x:number,y:string):string => {
    console.log(y + x);
    return "";
}