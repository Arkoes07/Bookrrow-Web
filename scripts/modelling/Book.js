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
}