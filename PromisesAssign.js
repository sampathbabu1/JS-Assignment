
function getData(uId) {
    var pr=new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve( "skc@gmail.com");
            }, 4000);
    });
   return pr;
}   
async function write(){
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

write();