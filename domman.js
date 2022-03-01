// console.log("Hello fromn the JS file 👋🏻👋🏻");

// let firstExample = document.getElementById("IdDom");

// const handlerFunction = () => {
//     firstExample.innerText = "Let's change it";
// }

// console.log(firstExample);
// let firstExample = document.getElementById("IdDom").innerText;

// firstExample.innerText = "Lets Change it";

// console.log(firstExample);

let thisisArray=["lubna",7,true,2**3,null];
let game=["anam","India","dog","toy"]
thisisArray.length//return the length;
console.log(thisisArray.length);
console.log(thisisArray.reverse);
console.log(thisisArray.concat(game));


let iterable=thisisArray.entries();
console.log(iterable.next().value);
console.log(iterable.next().done);
// for(let item of iterable){
//     console.log(item);
// }
// console.log(...thisisArray);

//slicing
console.log(thisisArray.slice(-1,-4));
console.log(thisisArray.slice(-1,4));
console.log(thisisArray.slice(1,4));


//every

// const callbackFunction=(item)=>item=="test"
// let result=thisisArray.every(callbackFunction);
// console.log(result);

//array map
const callfunc=(item)=>{
    console.log(item);
    return item
}
let res=thisisArray.map(callfunc)
console.log(res);
let array2 = [0,1,2,3,4,5,6,7]

function callback2(item) {
    console.log(item);
    return "This is running"
}

const varName = (arguments) => {
    console.log("hello");
    return 1
}

const varName2 = (item2) => {
    console.log(item2);
    return item2
}

let result = array2.map(varName2)

console.log(result);

//filter runs a callback on every element of the array and returns that retutn true for callbac

array3=[13,41,5,6,17,18,9,10,11,12]
function born(item){
    return item>=5
}
let re=array3.filter(born);
console.log(re);
console.log(array3.filter(item=>item>=5));



// array sort
//negative descending
//0 
//positive assending
// function sorting(a,b){
//    return b-a

// }
// array3.sort(sorting)
// console.log(array3);
//
//reduce an array into single values
//based on the 2 parameter you paas in function

console.log(array3.reduce((accumulator,items)=>accumulator+items,0));
    
let arraytotest=[
    {
        studentname:"Lubna",
        favorite:"cricket",
        rank:"first",
        birthday:24,
    },
    {
        studentname:"Kanak",
        favorite:"pubg",
        rank:"diamond",
        birthday:24,
    },
    {
        studentname:"Prachi",
        favorite:"khokho",
        rank:"gold",
        birthday:19,
    },
    {
        studentname:"Sweta",
        favorite:"badminton",
        rank:"silver",
        birthday:7,
    },
]
//arraycreate an array of objects with only
// two properties == first, the random number in ascending order
// and then the student Name to be consoled

arraytotest.sort((a,b)=>a.birthday-b.birthday)
    arraytotest.forEach((sname)=>{
console.log(sname.studentname,sname.birthday);
    });


    //event loop

    let user=[
        {
            id:1,
            name:"lubna",
            leaves:[
                {
                id:1,
                reason:"fun",
                dates:["2022-02-05","2022-02-24"]
            },
            {
                id:2,
                reason:"movie",
                dates:["2022-02-04","2022-02-21"]
            },
    ]
},
{
    id:1,
    name:"prachi",
    leaves:[
        {
        id:1,
        reason:"bday",
        dates:["2022-02-05","2022-02-22"]
    },
    {
        id:2,
        reason:"ill",
        dates:["2022-02-04","2022-02-23"]
    },
]
},
{
    id:5,
    name:"kanak",
    leaves:[
        {
            id:3,
            reason:"class",
            dates:["2022-02-06","2022-02-23"]
        },{
            id:4,
            reason:"sick",
            dates:["2022-02-04","2022-02-20"]
        }
    ]
}
    ];
    //from a user array that fall leaves between those days from upper and lower date
// just to show the user id and all the leav
// let lower= new Date("2022-02-20")
// let upper =new Date("2022-02-25")
// function date(lower,upper){
// let leavetaken=user.map(item=>item.leaves.map(ele=>ele.dates.filter(d=>d.dates>lower&&d<upper)))
// return leavetaken
// }


// console.log(user);
//     console.log(date(lower,upper));




let lower= new Date("2022-02-20");
let upper =new Date("2022-02-25");

    var d = new Date();
function find_leavetaken(a=new Date(d.getFullYear(),d.getMonth(),1), b=new Date(d.getFullYear(),d.getMonth()+1,0)){
    
    return( user.map(item=>{
            return {
                id:item.id,
                name:item.name,
                leaves:item.leaves.map((it)=>{
                    let date=it.dates.filter(i=>(new Date(a)<new Date(i))&&(new Date(b)>new Date(i)));
                    if(date.length>0){
                        return {
                            dates:it.dates.filter(i=>new Date(a)<new Date(i)&&new Date(b)>new Date(i)),
                            id:it.id,
                            reason:it.reason
                        };
                    }
                    
                    else{
                        return null;
                    }
                }).filter(x=>!!x)
            };
        }
    )
    );
    
}
console.log(find_leavetaken(lower));
