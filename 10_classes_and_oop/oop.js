const user = {
    username: "Saad",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

