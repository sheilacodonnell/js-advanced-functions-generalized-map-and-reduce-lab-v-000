function sayHello(name="") {
  console.log(`Hello${name}`)
}
 
let sayHola = function(name="") {
  console.log(`Hola${name}`)
}
 
functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
}, " Gary")
 
function map(en, es, zh, name){
  en(name)
  es(name)
  zh(name)
}