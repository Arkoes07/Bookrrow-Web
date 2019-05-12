function registerConsumer( username, password, name, email, phonenum ){
    $.ajax({ 
        url: domain+"/consumer/register",
        type: "POST",
        data: { username, password, name, email, phonenum },
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

function loginConsumer ( username, password ){
    $.ajax({ 
        url: domain+"/consumer/login",
        type: "POST",
        data: { username, password },
        success: function(data, status, jqXHR) {
            localStorage.setItem("bookrrowConsumerInfo",JSON.stringify(data))
            window.location.href = 'index.html'
        },
        error: function(jqXHR, status, errorThrown) {
            alert("Login Failed!")   
        },
        dataType: "json",
        timeout: 10000
    })
}

function updateConsumerInfo (id, password, name, phonenum){
    $.ajax({ 
        url: domain+"/consumer/update",
        type: "POST",
        data: { id, password, name, phonenum },
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