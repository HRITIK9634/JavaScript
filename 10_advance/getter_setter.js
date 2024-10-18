
// class based getter and setter

// class user{
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//     get password(){
//         return `${this._password}hritik`
//     }

//     set password(val){
//         this._password = val;
//     }
// }


// const hritik = new user("H@ritik.com", "abc");
// console.log(hritik.password);




//property based getter and setter

// function user(email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email',{

//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set:function(val){
//             this._email = val
//         }
//     })
// }

// const chai = new user("H@ritik.ai", "abc");
// console.log(chai.email);




//object based getter and setter

const user = {
    _email: 'hritik@gmail.com',
    _password: 'abc',



    get email(){
        return this._email.toUpperCase();
    },

    set email(val){
        this._email = val
    }
}


const tea = Object.create(user)
console.log(tea.email);