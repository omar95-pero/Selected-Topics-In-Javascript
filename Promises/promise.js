/*in the general case in js when setTimeOute For log statment will excute next step but promises excute code with arrangement*/

MyPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve()
        console.log('First Step')
    },3000)
})

MyPromise.then(()=>{
    setTimeout(()=>{
        console.log('Second Step')
    },2000)
},()=>{
    console.log('error occured')
})