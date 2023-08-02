const Contact = require("./Contact")
const Contactdetails = require("./Contactdetails")
const { ContactdetailID } = require("./Contactdetails")

class User{
    static userAll = []
     
    static userID = 0
    constructor(fullname, isAdmin, gender, age){
        this.ID =  User.userID++
        this.fullname = fullname
        this.isAdmin = isAdmin
        this.gender = gender
        this.age = age
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
        for(let index = 0; index<User.userAll.length; index++){
            if(ID == User.userAll[index].ID){
                 return[index, true]
            }
        }
         return[-1, false]
       
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
                    User.userAll[indexOfUser].fullname = newValue
                    return User.userAll[indexOfUse].fullname 
                case "gender":
                    User.userAll[indexOfUser].gender = newValue
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

    createContact(contactName, country){
        if(this.isAdmin){
            return "Failure"
        }
        let ContactObj = new Contact(contactName, country)
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
        for(let index = 0; index < this.contacts.length; index++){
            // console.log(this.contacts[index].ContactID);
            if(this.contacts[index].ContactID == ID){
              return [index, true]
            }
        }
        return [-1, false]
    }

    updateContact(contactID, parameter, newValue){
        if(this.isAdmin){
            return "Failure"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactID)
        console.log("index",indexOfContact);
        if (!isContactExist){
           return "Failuree"
        }            
       return this.contacts[indexOfContact].updateContact(parameter, newValue)
    }

    deleteContact(contactID){
        if(this.isAdmin){
            return "Failure"
        }
        let [indexOfContact, isContactExist] = this.findContact(contactID)
        if(isContactExist){
            this.contacts.splice(indexOfContact, 1)
            return this.contacts
        }
        return "Failure"

    }

    createContactDetails(contactID, typeofContactdetails, valueOfContactdetails){
        if(this.isAdmin){
            return "Failure"
        }
        let[indexOfContact, isContactExist] = this.findContact(contactID)
        if(! isContactExist){
            return "Failure"
        }
        return this.contacts[indexOfContact].createContactDetails(typeofContactdetails, valueOfContactdetails)
        }

    getAllContactDetails(ContactID){
        if(this.isAdmin){
            return "Failure"
        }
        let[indexOfContact, isContactExist] = this.findContact(ContactID)
        if(! isContactExist){
            return "Failure"
        }
        return this.contacts[indexOfContact].getAllContactDetails()
    }

    updateContactDetails(contactID, ContactdetailID, typeofContactdetails, valueOFContactdetails){
        if(this.isAdmin){
            return "Failure"
        }
        let[indexOfContact, isContactExist] = this.findContact(contactID)
        if(! isContactExist){
            return "Failure"
        }
        // console.log(11);
        return this.contacts[indexOfContact].updateContactDetails(ContactdetailID, typeofContactdetails, valueOFContactdetails)
    }

    deleteContactDetails(contactID, ContactdetailID){
        if(this.isAdmin){
            return "Failure"
        }
        let[indexOfContact, isContactExist] = this.findContact(contactID)
        if(! isContactExist){
            return "Failure"
        }
        return this.contacts[indexOfContact].deleteContactDetails(ContactdetailID)
    }

    getUserById(ID){
        if(!this.isAdmin){
            return "Failure"
        }
        let[indexOfUser, isUserExist] = User.findUser(ID)
        if(!isUserExist){
            return "Failure"
        }
            
        return User.userAll[indexOfUser]
    }

    getContactById(ID){
        if(this.isAdmin){
            return "Failure"
        }
        let[indexOfUser, isUserExist] = this.findContact(ID)
        if(!isUserExist){
            return "Failuree"
        }    
        return this.contacts[indexOfUser]
    }

    getContactDetailById(contactID, ContactdetailID){
        if(this.isAdmin){
            return "Failure"
        }
        let[indexOfUser, isUserExist] = this.findContact(contactID)
        if(!isUserExist){
            return "Failure"
        }
        // else{
        // if(this.contacts[indexOfUser].ContactdetailID == ID){
        //     return this.contacts[indexOfUser].ContactdetailID
        // }
        console.log("11", this.contacts[indexOfUser]);
        return this.contacts[indexOfUser].getContactDetailById(ContactdetailID)

    }
}

        
        let adminObj = User.newAdmin("Sahil", "M", 22)
        let user1 = adminObj.newUser("Sarvesh", "M", 20)
        let user2 = adminObj.newUser("Rohan", "M", 40)
        let user3 = adminObj.newUser("Suswar", "M", 35)
        // console.log(adminObj.getAllUsers())
         console.log(adminObj.getUserById(1));
    
       console.log(user1.createContact("Siddhant", "IND"))
       console.log(user1.createContact("Dhruv", "AUS"))
        console.log(user1.createContact("Aniket", "PAk"))
        // console.log(user1.getAllContact())
       // console.log(user1.updateContact(1, "contactName", "Dipika"))
        console.log(user1.getAllContact())
        //  console.log(user1.deleteContact(1))
        //  console.log(user1.getAllContact())
       
        console.log(user1.createContactDetails(1, "phoneNo", "989898989" )) //0
        console.log(user1.createContactDetails(1, "country", "IND" )) //1
         //console.log(user1.getAllContactDetails(1));
         //console.log(user1.updateContactDetails(1, 1,"valueOfContactdetails", "8287389909"))
       //  console.log(user1.deleteContactDetails(1, 1));
        
         console.log(user1.getContactById(1));
         console.log("------------------------------------------------------");
         console.log(user1.getContactDetailById(1, 1));
        // console.log();

    
module.exports = User