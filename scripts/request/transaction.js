function requestBorrow(book_id, borrower_id) {
    $.ajax({ 
        url: domain+"/transaction/borrow",
        type: "POST",
        data: { book_id, borrower_id },
        success: function(data, status, jqXHR) {
            // success
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function acceptBorrowRequest(transaction_id) {
    $.ajax({ 
        url: domain+"/transaction/accept",
        type: "POST",
        data: { transaction_id },
        success: function(data, status, jqXHR) {
            // success
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function rejectBorrowRequest(transaction_id) {
    $.ajax({ 
        url: domain+"/transaction/reject",
        type: "POST",
        data: { transaction_id },
        success: function(data, status, jqXHR) {
            // success
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function finishOngoingBorrow(transaction_id){
    $.ajax({ 
        url: domain+"/transaction/finish",
        type: "POST",
        data: { transaction_id },
        success: function(data, status, jqXHR) {
            // success
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}