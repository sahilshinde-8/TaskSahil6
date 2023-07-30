const Cell = require("./Cell")

class Board{
    constructor(){
        this.cells = [
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
        ]//n 9 objects of Cell class
    }
    isCellMarked(cellNumber){
        return this.cells[cellNumber].isEmpty()
    }
    getCellObj(cellNumber){
        return this.cells[cellNumber]
    }
    analyseResult(){
        // check
        if(this.cells[0].mark == this.cells[1].mark && 
            this.cells[2].mark === this.cells[1].mark &&
            !this.cells[0].isEmpty()){
            return [this.cells[0].mark, "Winner"]
        }
        if(this.cells[3].mark == this.cells[4].mark && 
            this.cells[5].mark === this.cells[4].mark &&
            !this.cells[3].isEmpty()){
                return [this.cells[3].mark, "Winner"]
         }

        if(this.cells[6].mark == this.cells[8].mark && 
            this.cells[7].mark === this.cells[8].mark &&
            !this.cells[6].isEmpty()){
                return [this.cells[6].mark, "Winner"]
        }
        if(this.cells[0].mark == this.cells[4].mark && 
            this.cells[4].mark === this.cells[8].mark &&
            !this.cells[0].isEmpty()){
                return [this.cells[6].mark, "Winner"]
        }
        if(this.cells[3].mark == this.cells[4].mark && 
            this.cells[4].mark === this.cells[6].mark &&
            !this.cells[3].isEmpty()){
                return [this.cells[6].mark, "Winner"]
        }
        if(this.boardFull()){
            return ["", "draw"]
        }
        return["", ""]
    }
   /* boardFull(){
        //check board full
    }*/
    printBoard(){
        console.log(this.cells)
    }

}
module.exports = Board