class Book {
    constructor (bookJsonObj) {
        this.id = bookJsonObj.id
        this.title = bookJsonObj.title
        this.author = bookJsonObj.author

        this.description = bookJsonObj.description
        if(this.description === null){
            this.description = "";
        }

        this.languageObj = bookJsonObj.language
        this.year = bookJsonObj.year
        this.typeObj = bookJsonObj.type
        this.statusObj = bookJsonObj.status
        this.ownerObj = bookJsonObj.owner

        let genre = {keyName : "", genre : ""}
        if(typeof bookJsonObj.genre !== 'undefined'){
            genre = bookJsonObj.genre
        }
        this.genreObj = genre
    }

    consoleData(){
        console.log("====== id : " + this.id)
        console.log("title : " + this.title)
        console.log("author : " + this.author)
        console.log("description : " + this.description)
        console.log("language : " + this.languageObj.language)
        console.log("year : " + this.year)
        console.log("type : " + this.typeObj.bookType)
        console.log("status : " + this.statusObj.bookStatus)
        console.log("ownerId : " + this.ownerObj.id)
        console.log("genre : " + this.genreObj.genre)
    }

    getBookToResult(){
        return `
            <div class="col-3 mt-5">
                <div class="card card-hover">
                    <div class="card-body">
                        <h3 class="card-title text-truncate">${this.title}</h3>
                        <h6 class="card-subtitle mb-2 text-muted">By: ${this.author}</h6>
                        <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.languageObj.language} | ${this.typeObj.bookType} | ${this.genreObj.genre}</p><br>
                        <p class="card-text">${this.description}</p>
                        <br>
                        <div class="text-right">
                            <a href="#" onclick="requestBorrow(${this.id})" class="card-link">Request Book</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    getUserCollections(){
        return `
            <div class="card card-hover" >
            <div class="card-body">
                <h3 class="card-title text-truncate">${this.title}</h3>
                <h6 class="card-subtitle mb-2 text-muted">By: ${this.author}</h6>
                <p class="card-subtitle mb-2 text-muted font-weight-light text-small">${this.languageObj.language}  |   ${this.typeObj.bookType}  |   ${this.genreObj.genre}
                <p class="card-text">${this.description}</p>
                <br>
                <div class="text-right">
                    <a href="#" class="card-link">Update Book</a>
                    <a href="#" class="card-link text-danger">Remove</a>
                </div>
            </div>          
            </div>

        `
    }
}