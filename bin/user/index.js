var frases = require('./ru');

function User(name){
    this.name = name
}

User.prototype.hello = function(who){
    console.log(frases.HELLO + who.name)
};

console.log("USER JS is REQUARED");
exports.User = User;