class Cell{
    constructor(){
        this.marks = "Z"
    }
    isEmpty(){
        return this.mark == "Z"
    }
    markCell(symbol){
        this.mark = symbol
    }
}

module.exports = Cell