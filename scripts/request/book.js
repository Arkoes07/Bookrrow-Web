function insertFictionBook(title, author, description, language, year, genre, owner_id){
    $.ajax({ 
        url: domain+"/book/insertfiction",
        type: "POST",
        data: { title, author, description, language, year, genre, owner_id },
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

function insertNonFictionBook(title, author, description, language, year, owner_id){
    $.ajax({ 
        url: domain+"/book/insertnonfiction",
        type: "POST",
        data: { title, author, description, language, year, owner_id },
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

function updateBookDescription(book_id, description){
    $.ajax({ 
        url: domain+"/book/updatedescription",
        type: "POST",
        data: { book_id, description},
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

function deleteBook(book_id){
    $.ajax({ 
        url: domain+"/book/delete",
        type: "DELETE",
        data: { book_id },
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

