const Contact = require("./Contact")
const Contactdetails = require("./Contactdetails")
const { ContactdetailID } = require("./Contactdetails")

class User{
    static userAll = []
     
    
    static userID = 0
    constructor(fullname, isAdmin, gender, age, ID){
        this.ID =  User.userID++
        this.fullname = fullname
        this.isAdmin = isAdmin
        this.gender = gender
        this.age = age
        this.ID = ID
        this.contacts = []
    }
    newUser(fullname, gender, age){
        if(typeof fullname != 'string'){
                return "Failure"
        }
        if(!this.isAdmin){
                return "Failure"
        }
        let userObj =  new User(fullname, false, gender, age)
        User.userAll.push(userObj)
        return userObj
    }
    static newAdmin(fullname, gender, age){
        if(typeof fullname != 'string'){
            return "Failure"
        }
       
        return new User(fullname, true, gender, age)
    }
    getAllUsers(){
        if(! this.isAdmin){
            return "Not Authorized"
        }
        return User.userAll
    }
    static findUser(ID){
        for(let index = 0; User.userAll.length; i++){
                if(ID == User.userAll[index].ID){
                    return[index, true]
                }
                else{
                    return[-1, false]
                }
        }
    }
    updateUser(ID, parameter, newValue){
        if(! this.isAdmin){
            return "Not Authorized"
        }
        let [indexOfUser, isUserExist] = User.findUser(ID) 
        if(! isUserExist ){
            return "Failure"
        }
            switch(parameter){
                case "fullname":
                    User.userAll[indexOfUse].fullname = newValue
                    return User.userAll[indexOfUse].fullname 
                case "gender":
                    User.userAll[indexOfUse].gender = newValue
                    return User.userAll[indexOfUse].gender
                case "age":
                    User.userAll[indexOfUse].age = newValue
                    return User.userAll[indexOfUse].age
                default:
                    return "Failure"
            }
        }

        deleteUser(ID, parameter){
            if(! this.isAdmin){
                return "Failure"
            }
            let[indexOfUser, isUserExist] = User.findUser(ID)
            if(! isUserExist){
                return "Failure"
            }
            switch (parameter) {
                case "fullname":
                  User.userAll[indexOfUser].fullname.splice(indexOfUser)
                    return   User.userAll[indexOfUser]
            
                 case "gender":
                   User.userAll[indexOfUser].gender.splice(indexOfUser)
                    return  User.userAll[indexOfUser]

                case "age":
                   User.userAll[indexOfUse].age.splice(indexOfUser)
                    return User.userAll[indexOfUse]
                   
                default:
                    return "Failure"
                    
            }
        }
        createContact(contactName){
            if(this.isAdmin){
                return "Failure"
            }
            let ContactObj = new Contact(contactName)
            this.contacts.push(ContactObj)
            return ContactObj

        }
        
        getAllContact(){
            if(this.isAdmin){
                return "Failure"
            }
            return this.contacts
        }
        findContact(ID){
            for(let index = 0; index < this.contacts.length; index ++){
                if(this.contacts[index].ID == ID){
                    return [index, true]
                }
                return[-1, false]
            }
        }
        updateContact(contactID, parameter, newValue){
            if(isAdmin){
                return "Failure"
            }
            let ([indexOfContact, isContactExist]) = this.findContact(contactID)
            if(isContactExist){
                this.contacts[indexOfContact].updateContact([parameter, newValue])
            }

        }
        deleteContact(contactID, parameter){
            if(this.isAdmin){
                return "Failure"
            }
            let ([indexOfContact, isContactExist]) = this.findContact(contactID)
            if(isContactExist){
                    this.contact[indexOfContact].split(indexOfContact)
                    return this.contacts[indexOfContact]
        }

    }
        createContactDetails(contactID, typeofContactdetails, valueOFContactdetails){
            if(this.isAdmin){
                return "Failure"
            }
            let[indexOfContact, isContactExist] = this.findContact(contactID)
            if(! isContactExist){
                return "Failure"
            }
            return this.contacts[indexOfContact].createContact(typeofContactdetails, valueOFContactdetails)
        }

        updateContactDetails(contactID, typeofContactdetails, valueOFContactdetails){
            if(this.isAdmin){
                return "Failure"
            }
            let[indexOfContact, isContactExist] = this.findContact(contactID)
            if(! isContactExist){
                return "Failure"
            }
            return this.contacts[indexOfContact].updateContactDetails(typeofContactdetails, valueOFContactdetails)

        }

        deleteContactDetails(contactID, typeofContactdetails){
            if(this.isAdmin){
                return "Failure"
            }
            let[indexOfContact, isContactExist] = this.findContact(contactID)
            if(! isContactExist){
                return "Failure"
            }
            return this.contacts[indexOfContact].deleteContactDetails(typeofContactdetails)

        }

        getUserById(ID){
            if(!this.isAdmin){
                return "Failure"
            }
            let[indexOfUser, isUserExist] = User.findUser(ID)
            if(!isUserExist){
                return "Failure"
            }
            else{
            if(User.userAll[indexOfUser].userID == ID){
                return User.userAll[indexOfUser].IuserD

            }
        }

        }

        getContactById(ID){
            if(this.isAdmin){
                return "Failure"
            }
            let[indexOfUser, isUserExist] = Contact.findUser(ID)
            if(!isUserExist){
                return "Failure"
            }
            else{
            if(Contact.contactInfo[indexOfUser].ContactID == ID){
                return Contact.contactInfo[indexOfUser].ContactID

            }
        }
    }

        getContactDetailById(ID){
            if(this.isAdmin){
                return "Failure"
            }
            let[indexOfUser, isUserExist] = Contactdetails.findUser(ID)
            if(!isUserExist){
                return "Failure"
            }
            else{
            if(Contactdetails.contacts[indexOfUser].ContactdetailID == ID){
                return Contactdetails.contacts[indexOfUser].ContactdetailID
            }

            }
        }

        
}
        let adminObj = User.newUser("Sahil")
        let user1 = adminObj.newUser("Sarvesh", "M", 20)
        let user2 = adminObj.newUser("Rohan", "M", 40)

        console.log(adminObj.getAllUsers())

    
module.exports = User