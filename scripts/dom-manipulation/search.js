hideAddDrop()

$("select#category").change(function(){
    const selected = $(this).children("option:selected").val();
    showAdditional(selected)
});

$("#searchBtn").click(e => {
    e.preventDefault();
    const searchInput = $("input#search").val();
    const primarySelector = $('#category').children("option:selected").val();
    let secondarySelector = null
    if(primarySelector == 'type' || primarySelector == 'language' || primarySelector == 'genre'){
        secondarySelector = $('#additional-dropdown').children("option:selected").val();
    }
    const searchParam = {searchInput, primarySelector, secondarySelector}
    window.localStorage.setItem("bookrrowSearchParam",JSON.stringify(searchParam))
    if(window.location.href == frontDomain+'/index.html'){
        window.location.href = 'result.html'
    }else{
        loadResultData()
    }
})
    
function showAdditional(selected){
    if(selected == 'type'){
        getOptionsData('/enum/booktype')
        showAddDrop()
    }else if(selected == 'language'){
        getOptionsData('/enum/language')
        showAddDrop()
    }else if(selected == 'genre'){
        getOptionsData('/enum/genre')
        showAddDrop()
    }else{
        hideAddDrop()
    }
}

function showAddDrop(){
    $("input#search").val("");
    $("input#search").prop('disabled', true);
    $('#additional-dropdown').show();
}

function hideAddDrop(){
    $("input#search").val("");
    $("input#search").prop('disabled', false);
    $('#additional-dropdown').hide();
}

function convertToOptions(data){
    $('#additional-dropdown').empty()
    data.forEach(each => {
        const resources = Object.values(each)
        const option = `<option value="${resources[1]}">${resources[0]}</option>`
        $('#additional-dropdown').append(option)
    });
}

function getOptionsData(url){
    $.ajax({ 
        url: domain+url,
        success: function(data, status, jqXHR) {
            convertToOptions(data)
        },
        error: function(jqXHR, status, errorThrown) {
             
        },
        dataType: "json",
        timeout: 10000
    })
}

function loadResultData(){
    const searchParam = JSON.parse(localStorage.getItem('bookrrowSearchParam'))
    if(searchParam.primarySelector == 'title'){
        getAllByTitle(searchParam.searchInput)
    }else if(searchParam.primarySelector == 'type'){
        getAllByType(searchParam.secondarySelector)
    }else if(searchParam.primarySelector == 'language'){
        getAllByLanguage(searchParam.secondarySelector)
    }else if(searchParam.primarySelector == 'year'){
        getAllByYear(searchParam.searchInput)
    }else if(searchParam.primarySelector == 'genre'){
        getAllByGenre(searchParam.secondarySelector)
    }else if(searchParam.primarySelector == 'author'){
        getAllByAuthor(searchParam.searchInput)
    }
}

// function fillSearchFormWithCurrentState(){
//     const searchParam = JSON.parse(localStorage.getItem("bookrrowSearchParam"))
//     $("input#search").val(searchParam.searchInput);
//     $("div.id_100 select").val(searchParam.primarySelector);
// }



