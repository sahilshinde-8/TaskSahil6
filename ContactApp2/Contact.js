const Contactdetails = require("./Contactdetails")

class Contact{
    static ContactID = 0
    constructor(contactNumber, country){
        this.ContactID = Contact.ID++
        this.contactNumber = contactNumber
        this.country = country
        this.contactInfo = []
    }
    updateContact(parameter, newValue){
      
        if(typeof newValue != 'string'){
                return "Failure"
            }
        switch(parameter){
            case "contactName":
               this.contactName = newValue
               return this
            case "country":
                this.country = newValue
                return this
          
            default:
                return "Failure"
        }

    }
    /*
    deleteContact(parameter){
        switch (parameter) {
            case "contactName":
                return "contactName"
            case "country":
                return "country"
        
            default:
                return "failure"
        }
    }*/
    createContactDetails(typeofContactdetails, valueOFContactdetails){
        let contactDetailsObj = new Contactdetails()
        this.contatactInfo.push(contactDetailsObj)
        return contactDetailsObj
    }
    findContactDetails(){
        for(let index = 0; index < this.contactInfo.length; index++ ){
            if(this.contactInfo[index].contactID == ID){
                return[index, true]
            }
            return [-1, false]
        }
    }
    updateContactDetails(detailsID, parameter, newValue){    
        let[indexOfContactdetails, isExistdetails] = this.findContactDetails(detailsID)
        if(!isExistdetails){
            return "Failure"
        }
       this.contactInfo.updateContactDetails(parameter, newValue)
    }

    deleteContactDetails(detailsID){    
        let[indexOfContactdetails, isExistdetails] = this.findContactDetails(detailsID)
        if(!isExistdetails){
            return "Failure"
        }
        this.contactInfo[indexOfContactdetails].split(indexOfContactdetails)
        return this.contactsInfo[indexOfContactdetails]
    }


    
}
module.exports = Contact