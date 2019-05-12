class Transaction {
    constructor(transactionJsonObj) {
        this.id = transactionJsonObj.id
        this.bookObj = transactionJsonObj.book
        this.borrowerObj = transactionJsonObj.borrower
        this.transactionStatusObj = transactionJsonObj.transactionStatus

        this.requestDate = transactionJsonObj.requestDate
        if(this.requestDate == null){
            this.requestDate = ""
        }

        this.finishDate = transactionJsonObj.finishDate
        if(this.finishDate == null){
            this.finishDate = ""
        }

        this.startDate = transactionJsonObj.startDate
        if(this.startDate == null){
            this.startDate = ""
        }
    }

    consoleData(){
        console.log("====== id : " + this.id)
        console.log("bookId : " + this.bookObj.id)
        console.log("borrowerId : " + this.borrowerObj.id)
        console.log("transactionStatus : " + this.transactionStatusObj.transactionStatus)
        console.log("requestDate : " + this.requestDate)
        console.log("startDate : " + this.startDate)
        console.log("finishDate : " + this.finishDate)
    }
}