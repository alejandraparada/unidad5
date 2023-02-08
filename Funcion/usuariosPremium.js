const users=[
    {username:'ppc90', age: 30, premium: false},
    {username:'lu65', age: 24, premium: false},
    {username:'maria3', age: 36, premium: false},
    {username:'abc123', age: 20, premium: true},
    {username:'sergio58', age: 26, premium: true}
]
const premium = users.filter(function (user){
    return console.log("el usuario "+ user.username+ " tiene "+ user.age+" años.")
    //return user.premium==true
})
const free = users.filter(function (user){
    return user.premium==false
})
console.log(free)