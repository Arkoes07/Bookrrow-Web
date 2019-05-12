function requestBorrow(book_id) {
    const borrower_id = userInfoObj.id
    // console.log({ book_id, borrower_id })
    $.ajax({ 
        url: domain+"/transaction/borrow",
        type: "POST",
        data: { book_id, borrower_id },
        success: function(data, status, jqXHR) {
            alert("Requested!")
            window.location.href = 'request.html'
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
            alert("Accepted!")
            window.location.href = 'ongoing.html'
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
            alert("Rejected!")
            window.location.href = 'history.html'
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
            alert("Finished!")
            window.location.href = 'history.html'
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}