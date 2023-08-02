const Contactdetails = require("./Contactdetails")

class Contact{
    static ContactID = 0
    constructor(contactName, country){
        this.ContactID = ++Contact.ContactID
        this.contactName = contactName
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
        let contactDetailsObj = new Contactdetails(typeofContactdetails, valueOFContactdetails)
        // console.log(contactDetailsObj);
        this.contactInfo.push(contactDetailsObj)
        return contactDetailsObj
    }

    getAllContactDetails(){
        return this.contactInfo
    }

    findContactDetails(ID){
        for(let index = 0; index < this.contactInfo.length; index++ ){
            console.log("heloooo", this.contactInfo[index].ContactdetailID);
            if(this.contactInfo[index].ContactdetailID == ID){
                return[index, true]
            }
            
        }
        return [-1, false]
    }
    
    updateContactDetails(detailsID, parameter, newValue){    
        let[indexOfContactdetails, isExistdetails] = this.findContactDetails(detailsID)
        if(!isExistdetails){
            return "Failure"
        }
        return this.contactInfo[indexOfContactdetails].updateContactDetails(parameter, newValue)
    }

    deleteContactDetails(ContactdetailID){    
        let[indexOfContactdetails, isExistdetails] = this.findContactDetails(ContactdetailID)
        if(!isExistdetails){
            return "Failure"
        }
        this.contactInfo.splice(indexOfContactdetails, 1)
        return this.contactInfo
    }

    getContactDetailById(ContactdetailID){
        console.log(this);
        let [indexOfUser, isUserExist] = this.findContactDetails(ContactdetailID)
        console.log(indexOfUser);
        if(!isUserExist){
            return "Failure"
        }
        
        return this.contactInfo[indexOfUser]

    }


    
}
module.exports = Contact