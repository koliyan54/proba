var User = require('./user');
var db = require('./db');
db.connect();
function run(){
var vasia = new User("vasa");
var petia = new User('петя');

vasia.hello(petia);
console.log(db.getPhrase("Run succesful"));
}
if(module.parent){
  exports.run = run;
}
else{
  run()
}