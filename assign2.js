var result = (first, last) => {
    return first[0] + last[0];
}




async function getData(uId) {
        var result=new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("Fetched Data!");
                resolve( "skc@gmail.com");
            }, 4000);
        });
        //  await result.then((res)=>console.log("Email id of the user id is: "+res));
        result.then(write);
    
}
function write(email){
    console.log("start");
    console.log("Email id of the user id is: " + email);
console.log("end");
}

getData("skc");
