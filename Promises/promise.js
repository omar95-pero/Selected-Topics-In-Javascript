/*in the general case in js when setTimeOute For log statment will excute next step but promises excute code with arrangement*/

// MyPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve()
//          // reject(new Error('rejection'))
//         console.log('First Step')
//     },3000)
// })
//
// MyPromise.then(()=>{
//     setTimeout(()=>{
//         console.log('Second Step')
//     },2000)
// },()=>{
//     console.log('error occured')
// })
//
// let NewPromise = new Promise((resolve, reject)=>{
//     setTimeout(resolve('done!'),3000);
//     // setTimeout(reject('error!'),3000);
// })
//
// NewPromise.then((result)=>{
//     console.log(result)
// },(error)=>{
//     console.log(error)
// })

// NewPromise.catch((result)=>{
//     console.log(result)
// })

let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise1")
    },5000)
})

let promise2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("promise2")
    }, 4000)
})

//race for excute faster promise (Promise.race())
// Promise.race([promise1,promise2]).then((result)=>{
//     console.log(result)
// })

//all for excute all promises will stop when find first reject (Promise.all())
Promise.all([promise1,promise2]).then((result)=>{
    console.log(result)
})
