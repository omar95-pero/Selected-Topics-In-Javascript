let users = ['ali','omar'];


function addUser(new_user,callback){
    setTimeout(function (){
        users.push(new_user);
        console.log(users)
        console.log('user added successfully')
        callback(new_user)
    },2000)
}

function getUsers(user){
    setTimeout(function (){
        console.log(user)
        console.log(user+' Added Successfully')
    },5000)
}
addUser('Mohamed',getUsers)