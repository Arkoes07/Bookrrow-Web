function getAllByTitle(title){
    console.log("title : " + title)
    $.ajax({ 
        url: domain+"/book/bytitle",
        data: { title },
        success: function(data, status, jqXHR) {
            filteredData = data.filter((each) => { return each.id != userInfoObj.id })
            showResultData(filteredData)
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function getAllByType(type){
    console.log("type : " + type)
    $.ajax({ 
        url: domain+"/book/bytype",
        data: { type },
        success: function(data, status, jqXHR) {
            filteredData = data.filter((each) => { return each.id != userInfoObj.id })
            showResultData(filteredData)
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function getAllByLanguage(language){
    console.log("language : " + language)
    $.ajax({ 
        url: domain+"/book/bylanguage",
        data: { language },
        success: function(data, status, jqXHR) {
            filteredData = data.filter((each) => { return each.id != userInfoObj.id })
            showResultData(filteredData)
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function getAllByYear(year){
    console.log("year : " + year)
    $.ajax({ 
        url: domain+"/book/byyear",
        data: { year },
        success: function(data, status, jqXHR) {
            filteredData = data.filter((each) => { return each.id != userInfoObj.id })
            showResultData(filteredData)
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function getAllByGenre(genre){
    console.log("genre : " + genre)
    $.ajax({ 
        url: domain+"/book/bygenre",
        data: { genre },
        success: function(data, status, jqXHR) {
            filteredData = data.filter((each) => { return each.id != userInfoObj.id })
            showResultData(filteredData)
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function getAllByAuthor(author){
    console.log("author : " + author)
    $.ajax({ 
        url: domain+"/book/byauthor",
        data: { author },
        success: function(data, status, jqXHR) {
            filteredData = data.filter((each) => { return each.id != userInfoObj.id })
            showResultData(filteredData)
        },
        error: function(jqXHR, status, errorThrown) {
            console.log(jqXHR)    
        },
        dataType: "json",
        timeout: 10000
    })
}

function showResultData(data){
    $('#row-result').empty()
    filteredData.forEach(bookObj => {
        book = new Book(bookObj)
        $('#row-result').append(book.getBookToResult())
    });
}