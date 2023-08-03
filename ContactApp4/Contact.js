const Contactdetails = require("./Contactdetails")
const ValidationError = require("./error/ValidationError")
const NotFoundError = require("./error/NotFoundError")

class Contact {
    static ContactID = 0
    constructor(contactName, country) {
        this.ContactID = ++Contact.ContactID
        this.contactName = contactName
        this.country = country
        this.contactInfo = []
    }
    updateContact(parameter, newValue) {

        try {
            if (typeof newValue != 'string') {
                return new ValidationError("new value must be string")
            }
            switch (parameter) {
                case "contactName":
                    this.contactName = newValue
                    return this
                case "country":
                    this.country = newValue
                    return this

                default:
                    return new ValidationError("Error in UpdateContact Default")
            }
        }
        catch (error) {
            console.log(error.message)
            console.log(error.specificMessage)
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
    createContactDetails(typeofContactdetails, valueOfContactdetails) {
        let contactDetailsObj = new Contactdetails(typeofContactdetails, valueOfContactdetails)
        // console.log(contactDetailsObj);
        this.contactInfo.push(contactDetailsObj)
        return contactDetailsObj
    }

    getAllContactDetails() {
        return this.contactInfo
    }

    findContactDetails(ID) {
        try {
            for (let index = 0; index < this.contactInfo.length; index++) {
                //console.log("heloooo", this.contactInfo[index].ContactdetailID);
                if (this.contactInfo[index].ContactdetailID == ID) {
                    return [index]
                }

            }
            throw new NotFoundError("Error in Contact Details")

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    updateContactDetails(detailsID, parameter, newValue) {
        try {
            let [indexOfContactdetails] = this.findContactDetails(detailsID)
            /*if(!isExistdetails){
                return "Failure"
            }*/
            return this.contactInfo[indexOfContactdetails].updateContactDetails(parameter, newValue)
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    deleteContactDetails(ContactdetailID) {
        try {
            let [indexOfContactdetails] = this.findContactDetails(ContactdetailID)
            /*if(!isExistdetails){
                return "Failure"
            }*/
            this.contactInfo.splice(indexOfContactdetails, 1)
            return this.contactInfo
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    getContactDetailById(ContactdetailID) {
        try {
            //console.log(this);
            let [indexOfUser] = this.findContactDetails(ContactdetailID)
            //console.log(indexOfUser);
            /* if(!isUserExist){
                 return "Failure"
             }*/

            return this.contactInfo[indexOfUser]
        }
        catch(error){
            console.log(error.message);
            console.log(error.specificMessage);
        }

    }



}
module.exports = Contact