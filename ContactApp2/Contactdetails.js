class Contactdetails{
    static ContactdetailID = 0

    constructor(typeOfContactdetails, valueOfContactdetails){
        this.ContactdetailID = ++Contactdetails.ContactdetailID
        this.typeOfContactdetails = typeOfContactdetails
        this.valueOfContactdetails = valueOfContactdetails

    }
    updateContactDetails(parameter, newValue){
       
        if(typeof newValue != 'string'){
                    return "Failure"
                }
        switch(parameter){
            case "typeofContactdetails":
                this.valueOfContactdetails =  newValue
                return this

            case "valueOfContactdetails":
                this.valueOfContactdetails = newValue
                return this
              
            default:
                return "Failure"
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