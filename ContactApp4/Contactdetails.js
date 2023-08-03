const ValidationError = require("./error/ValidationError")

class Contactdetails {
    static ContactdetailID = 0

    constructor(typeOfContactdetails, valueOfContactdetails) {
        this.ContactdetailID = ++Contactdetails.ContactdetailID
        this.typeOfContactdetails = typeOfContactdetails
        this.valueOfContactdetails = valueOfContactdetails

    }
    updateContactDetails(parameter, newValue) {
        try {
            if (typeof newValue != 'string') {
                return new ValidationError("newValue shud be string")
            }
            switch (parameter) {
                case "typeofContactdetails":
                    this.valueOfContactdetails = newValue
                    return this

                case "valueOfContactdetails":
                    this.valueOfContactdetails = newValue
                    return this

                default:
                    return new ValidationError("this is default")
            }
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }
    /* deleteContactDetails(parameter){
         
         if(typeof newValue != 'string'){
             return "Failure"
         }
     switch(parameter){
      case "typeofContactdetails":
       
            return typeofContactdetails
      case "valueOfContactdetails":
         
             return valueOfContactdetails
       
      default:
          return "Failure"
  }        
 
     }*/
}
module.exports = Contactdetails