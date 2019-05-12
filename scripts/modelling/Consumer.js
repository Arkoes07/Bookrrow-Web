class Consumer {
    constructor(consumerJsonObj){
        this.id = consumerJsonObj.id
        this.name = consumerJsonObj.name
        this.email = consumerJsonObj.email
        this.username = consumerJsonObj.username
        this.password = consumerJsonObj.password
        this.phoneNumber = consumerJsonObj.phoneNumber
    }

    consoleData(){
        console.log("====== id : " + this.id)
        console.log("name : " + this.name)
        console.log("email : " + this.email)
        console.log("username : " + this.username)
        console.log("password : " + this.password)
        console.log("phoneNumber : " + this.phoneNumber)
    }
}