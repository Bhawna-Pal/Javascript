class User {
     constructor(email, password){
        this.email = email;
        this.password = password
     }
     
     get email(){
        return this._email.toUpperCase()
     }
     set email(value){
      this._email = value
     }

     get password(){
       return `${this._password}bhawna`
     }  

     set password(value){
        this._password = value
     }
    }

const bhawna = new User("b@bhawna.ai","abc")
console.log(bhawna.password);
console.log(bhawna.email);
  