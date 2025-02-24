/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let age=12;
let name="sonakshi";
let exp=5;
console.log(age);
console.log(name);
console.log(exp);
console.log("Start");
function sync(){
    console.log("code is running...");
}
sync();
console.log("end");

console.log("Start");
setTimeout(function(){
    console.log("code is running...");
},2000)
console.log("End");

console.log("Start");

setTimeout(function()
{
    try{
        nole.log("Code is running..");
    }
    catch(error)
    {
        console.log(error.message);
    }
    finally{
        console.log("Code");
    }
},2000);
etTimeout(()=>{
    console.log("hell");
},0)

function a1(){
    console.log("my callback");
}
function Async(callback){
    setTimeout(function(){
        console.log("Async code...");
        callback()
    },1000);
}
Async(a1);

function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }
  
  function process(picture) {
    console.log(`Processing ${picture}`);
  }
  
  let url = 'https://www.javascripttutorial.net/pic.jpg';
  download(url, process);
  let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
  
  promise
    .then(
      (result) => {
        console.log(result); // This runs if the promise is resolved.
      },
      (error) => {
        console.log(error); // This runs if the promise is rejected.
      }
    );
  
    let promise = new Promise((resolve, reject) => {
        let success = false;
        if (success) {
          resolve("Promise resolved!");
        } else {
          reject("Promise rejected!");
        }
      });
      
      promise
        .then((result) => {
          console.log(result); // This will not run if the promise is rejected.
        })
        .catch((error) => {
          console.log(error); // This will run if the promise is rejected.
        });
      
        let promise = new Promise((resolve, reject) => {
            resolve(10);
          });
          
          promise
            .then((result) => {
              console.log(result); // 10
              return result * 2; // Returning a new value to the next `then()`
            })
            .then((result) => {
              console.log(result); // 20
              return result + 5;
            })
            .then((result) => {
              console.log(result); // 25
            })
            .catch((error) => {
              console.log(error); // Catch any error that happens in any of the `then()` calls
            });
   */
 
async function A1(){
  let mypromise=new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("code is running..")
    },2000)
  })
  return mypromise
  
}
A1().then((result)=>{
  console.log("promise is resolved!..",result);
}).catch((error)=>{
  console.log("promise is rejected!...",error);
})


/*
async function Eligibilty(){
  let mypromise=new Promise((resolve, reject) => {
    setTimeout(()=>{
      let age=17;
      if(age >18){
        console.log("you are eligible for voting...");
      }
      else{
        console.log("you are not eligible for voting...");
      }
    },2000)
  })
  return mypromise
}
Eligibilty().then((result)=>{
  console.log("my promise",result);
}).catch((error)=>{
  console.log("my promise error",error);
})
*/