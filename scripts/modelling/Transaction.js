class Transaction {
    constructor(transactionJsonObj) {
        this.id = transactionJsonObj.id
        this.bookObj = transactionJsonObj.book
        this.borrowerObj = transactionJsonObj.borrower
        this.transactionStatusObj = transactionJsonObj.transactionStatus

        this.requestDate = transactionJsonObj.requestDate
        if (this.requestDate == null) {
            this.requestDate = ""
        }

        this.finishDate = transactionJsonObj.finishDate
        if (this.finishDate == null) {
            this.finishDate = ""
        }

        this.startDate = transactionJsonObj.startDate
        if (this.startDate == null) {
            this.startDate = ""
        }

        let bd = this.bookObj.description
        if(bd == null){ bd = "" }
        this.bookDescription = bd

    }

    consoleData() {
        console.log("====== id : " + this.id)
        console.log("bookId : " + this.bookObj.id)
        console.log("borrowerId : " + this.borrowerObj.id)
        console.log("transactionStatus : " + this.transactionStatusObj.transactionStatus)
        console.log("requestDate : " + this.requestDate)
        console.log("startDate : " + this.startDate)
        console.log("finishDate : " + this.finishDate)
    }

    getTransactionToIncomingRequest() {
        return `
                <div class="col-6 mb-4" style="padding-left:30px; padding-right:15px">
                    <div class="card card-hover">
                        <div class="card-header bg-white text-left">
                            <div class="row">
                                <div class="col text-left">
                                    Borrower: ${this.borrowerObj.name}
                                </div>
                                <div class="col text-right">
                                    ${this.transactionStatusObj.transactionStatus}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-truncate">${this.bookObj.title}</h3>
                            <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.bookObj.language.language} | ${this.bookObj.type.bookType} | ${this.bookObj.genre.genre}</p><br>
                            <p class="card-text">${this.bookDescription}</p>
                            <br>
                            <div class="row">
                                <div class="col-9">
                                    <div class="text-right">
                                        <a href="#" onclick="rejectBorrowRequest(${this.id})" class="card-link" style="color:red">Reject</a>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="text-right">
                                        <a href="#" onclick="acceptBorrowRequest(${this.id})" class="card-link">Accept</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <dib class="card-footer bg-white text-right">
                            Request date: ${this.requestDate.match(/^\d{4}\-\d{2}\-\d{2}/)}
                        </dib>
                    </div>
                </div>
        `
    }

    getTransactionToOutgoingRequest() {
        return `
                <div class="col-6 mb-4" style="padding-left:15px; padding-right:30px">
                    <div class="card card-hover">
                        <div class="card-header bg-white text-left">
                            <div class="row">
                                <div class="col text-left">
                                    Owner: ${this.bookObj.owner.name}
                                </div>
                                <div class="col text-right">
                                    ${this.transactionStatusObj.transactionStatus}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-truncate">${this.bookObj.title}</h3>
                            <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.bookObj.language.language} | ${this.bookObj.type.bookType} | ${this.bookObj.genre.genre}</p><br>
                            <p class="card-text">${this.bookDescription}</p>
                            <br>
                        </div>
                        <dib class="card-footer bg-white text-right">
                            Request date: ${this.requestDate.match(/^\d{4}\-\d{2}\-\d{2}/)}
                        </dib>
                    </div>
                </div>
        `
    }

    getTransactionToBorrowed() {
        return `
                <div class="col-6 mb-4" style="padding-left:30px; padding-right:15px">
                    <div class="card card-hover">
                        <div class="card-header bg-white text-left">
                            <div class="row">
                                <div class="col text-left">
                                    Borrower:  ${this.borrowerObj.name}
                                </div>
                                <div class="col text-right">
                                    ${this.transactionStatusObj.transactionStatus}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-truncate">${this.bookObj.title}</h3>
                            <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.bookObj.language.language} | ${this.bookObj.type.bookType} | ${this.bookObj.genre.genre}</p><br>
                            <p class="card-text">${this.bookDescription}</p>
                            <br>
                            <div class="text-right">
                                <a href="#" onclick="finishOngoingBorrow(${this.id})" class="card-link">Finish Transaction</a>
                            </div>
                        </div>
                        <dib class="card-footer bg-white text-right">
                            Start date: ${this.startDate.match(/^\d{4}\-\d{2}\-\d{2}/)}
                        </dib>
                    </div>
                </div>
        `
    }

    getTransactionToBorrowing() {
        return `
                <div class="col-6 mb-4" style="padding-left:15px; padding-right:30px">
                    <div class="card card-hover">
                        <div class="card-header bg-white text-left">
                            <div class="row">
                                <div class="col text-left">
                                    Owner: ${this.bookObj.owner.name}
                                </div>
                                <div class="col text-right">
                                    ${this.transactionStatusObj.transactionStatus}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-truncate">${this.bookObj.title}</h3>
                            <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.bookObj.language.language} | ${this.bookObj.type.bookType} | ${this.bookObj.genre.genre}</p><br>
                            <p class="card-text">${this.bookDescription}</p>
                            <br>
                            <br>
                        </div>
                        <dib class="card-footer bg-white text-right">
                            Start date: ${this.startDate.match(/^\d{4}\-\d{2}\-\d{2}/)}
                        </dib>
                    </div>
                </div>
        `
    }

    getTransactionToIncomingHistory() {
        return `
                <div class="col-6 mb-4" style="padding-left:30px; padding-right:15px">
                    <div class="card card-hover">
                        <div class="card-header bg-white text-left">
                            <div class="row">
                                <div class="col text-left">
                                    Borrower:  ${this.borrowerObj.name}
                                </div>
                                <div class="col text-right">
                                    ${this.transactionStatusObj.transactionStatus}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-truncate">${this.bookObj.title}</h3>
                            <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.bookObj.language.language} | ${this.bookObj.type.bookType} | ${this.bookObj.genre.genre}</p><br>
                            <p class="card-text">${this.bookDescription}</p>
                            <br>
                        </div>
                        <dib class="card-footer bg-white text-right">
                            Returned date: ${this.finishDate.match(/^\d{4}\-\d{2}\-\d{2}/)}
                        </dib>
                    </div>
                </div>
        `
    }

    getTransactionToOutgoingHistory() {
        return `
                <div class="col-6 mb-4" style="padding-left:15px; padding-right:30px">
                    <div class="card card-hover">
                        <div class="card-header bg-white text-left">
                            <div class="row">
                                <div class="col text-left">
                                    Owner: ${this.bookObj.owner.name}
                                </div>
                                <div class="col text-right">
                                    ${this.transactionStatusObj.transactionStatus}
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-truncate">${this.bookObj.title}</h3>
                            <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.bookObj.language.language} | ${this.bookObj.type.bookType} | ${this.bookObj.genre.genre}</p><br>
                            <p class="card-text">${this.bookDescription}</p>
                            <br>
                        </div>
                        <dib class="card-footer bg-white text-right">
                            Returned date: ${this.finishDate.match(/^\d{4}\-\d{2}\-\d{2}/)}
                        </dib>
                    </div>
                </div>
        `
    }
}