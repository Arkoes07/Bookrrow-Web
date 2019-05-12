function getIncomingBorrowRequest() {
    $.ajax({ 
        url: domain+"/transaction/incomingrequest/"+userInfoObj.id,
        success: function(data, status, jqXHR) {
            //success
            $('#incoming-request').empty()
            data.forEach(transactionObj => {
                transaction = new Transaction(transactionObj)
                $('#incoming-request').append(transaction.getTransactionToIncomingRequest())
            });
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000,
        async: false
    }) 
}

function getOutgoingBorrowRequest() {
    $.ajax({ 
        url: domain+"/transaction/outgoingrequest/"+userInfoObj.id,
        success: function(data, status, jqXHR) {
            //success
            $('#outgoing-request').empty()
            data.forEach(transactionObj => {
                transaction = new Transaction(transactionObj)
                $('#outgoing-request').append(transaction.getTransactionToOutgoingRequest())
            });
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000,
        async: false
    }) 
}

function getAllBorrowing(){
    console.log(userInfoObj.id)
    $.ajax({ 
        url: domain+"/transaction/borrowing/"+userInfoObj.id,
        success: function(data, status, jqXHR) {
            $('#borrowing').empty()
            data.forEach(transactionObj => {
                transaction = new Transaction(transactionObj)
                $('#borrowing').append(transaction.getTransactionToBorrowing())
            });
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000,
        async: false
    }) 
}

function getAllBorrowed(){
    $.ajax({ 
        url: domain+"/transaction/borrowed/"+userInfoObj.id,
        success: function(data, status, jqXHR) {
            $('#borrowed').empty()
            data.forEach(transactionObj => {
                transaction = new Transaction(transactionObj)
                $('#borrowed').append(transaction.getTransactionToBorrowed())
            });
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000,
        async: false
    }) 
}

function getIncomingHistory(){
    $.ajax({ 
        url: domain+"/transaction/incominghistory/"+userInfoObj.id,
        success: function(data, status, jqXHR) {
            $('#incoming-history').empty()
            data.forEach(transactionObj => {
                transaction = new Transaction(transactionObj)
                $('#incoming-history').append(transaction.getTransactionToIncomingHistory())
            });
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000,
        async: false
    }) 
}

function getOutgoingHistory(){
    $.ajax({ 
        url: domain+"/transaction/outgoinghistory/"+userInfoObj.id,
        success: function(data, status, jqXHR) {
            $('#outgoing-history').empty()
            data.forEach(transactionObj => {
                transaction = new Transaction(transactionObj)
                $('#outgoing-history').append(transaction.getTransactionToOutgoingHistory())
            });
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000,
        async: false
    }) 
}