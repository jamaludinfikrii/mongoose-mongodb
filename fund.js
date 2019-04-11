var a = 'L'
var b = 'M'
var ukuran = [a] // ['L']

ukuran = [...ukuran , a,b]

var obj = {username : "fikri" , pwd : '123'}

obj = {...obj , role : 'admin' , username : "seto"}
// obj.username = "fikri"

console.log(ukuran) // ['L','L','M']