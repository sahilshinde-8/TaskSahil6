class Contactdetails{
    static ContactdetailID = 0

    constructor(typeofContactdetails, valueOFContactdetails){
        this.ContactdetailID = Contactdetails.ContactdetailsID++
        this.typeOfContactdetails = typeOfContactdetails
        this.valueOfContactdetails = valueOfContactdetails

    }
    updateContactDetails(parameter, newValue){
       
        if(typeof newValue != 'string'){
                    return "Failure"
                }
         switch(parameter){
             case "typeofContactdetails":
                   this.valueOFContactdetails =  valueOfContactdetails
                   return this
             case "valueOfContactdetails":
                   this.valueOFContactdetails =  valueOfContactdetails
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