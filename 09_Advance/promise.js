// const Promise1 = new Promise(function(resolve, reject){
//     //do an async task
//     //db calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is completed');    
//         resolve()    
//     },1000)
// })

// Promise1.then(function(){
//     console.log("Promise Consumed");
    
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Task 2 Resolved');
    
})

const Promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Muhammad", email:"1234@gmail.com"})
    },2000)
})

Promise3.then(function(user){
    console.log(user);
    
})

const Promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Saad", email:"123@gmail.com"})
        }else {
            reject('Error!')
        }
        
    },3000)
})

Promise4
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);  
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("promise is either rejected or resolved m "))

const promise5 =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JS", email:"123@"})
        }else {
            reject('Error! JS went Wrong')
        }
        
    },4000)
})

// promise5.then

async function consumeP5(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeP5()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error)
)
