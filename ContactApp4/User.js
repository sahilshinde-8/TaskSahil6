const Contact = require("./Contact")
const Contactdetails = require("./Contactdetails")
const { ContactdetailID } = require("./Contactdetails")
const NotFoundError = require("./error/NotFoundError")
const UnauthorizedError = require("./error/UnauthorizedError")
const ValidationError = require("./error/ValidationError")

class User {
    static userAll = []

    static userID = 0
    constructor(fullname, isAdmin, gender, age) {
        this.ID = User.userID++
        this.fullname = fullname
        this.isAdmin = isAdmin
        this.gender = gender
        this.age = age
        this.contacts = []
    }

    newUser(fullname, gender, age) {
        try {
            if (!this.isAdmin) {
                throw new UnauthorizedError("Shud not be Admin")
            }
            if (typeof fullname != 'string') {
                throw new ValidationError("fullname shud be string")
            }
            if (typeof gender != 'string') {
                throw new ValidationError("gender shud be string")
            }
            if (typeof age != 'number') {
                throw new ValidationError("age shud be number")
            }
            let userObj = new User(fullname, false, gender, age)
            User.userAll.push(userObj)
            return userObj
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    static newAdmin(fullname, gender, age) {
        try {
            if (typeof fullname != 'string') {
                throw new ValidationError("fullname  shud not be string")
            }
            if (typeof gender != 'string') {
                throw new ValidationError("Gender shud be string")
            }
            if (typeof age != 'number') {
                throw new ValidationError("age shud be number")
            }

            return new User(fullname, true, gender, age)

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }
    }

    getAllUsers() {
        try {
            if (!this.isAdmin) {
                throw new UnauthorizedError("Shud be Admin")
            }
            return User.userAll
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }
    }

    static findUser(ID) {
        try {
            for (let index = 0; index < User.userAll.length; index++) {
                if (ID == User.userAll[index].ID) {
                    return [index]
                }
            }
            throw new NotFoundError("User didnt find")
        }
        catch (error) {
            throw error
        }

    }

    updateUser(ID, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new UnauthorizedError("shud be Admin")
            }
            if (typeof ID != 'number') {
                throw new ValidationError("ID shud be number")
            }
            if (typeof parameter != 'string') {
                throw new ValidationError("parameter shud be string")
            }
            if (typeof newValue != 'string' ||  typeof newValue != 'number') {
                throw new ValidationError("fullname shud be string")
            }
            let [indexOfUser] = User.findUser(ID)
            /* if (!isUserExist) {
                 return "Failure"
             }*/
            switch (parameter) {
                case "fullname":
                    User.userAll[indexOfUser].fullname = newValue
                    return User.userAll[indexOfUser]//.fullname
                case "gender":
                    User.userAll[indexOfUser].gender = newValue
                    return User.userAll[indexOfUser]//.gender
                case "age":
                    User.userAll[indexOfUser].age = newValue
                    return User.userAll[indexOfUser]//.age
                default:
                    throw new ValidationError("This is default case")
            }
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    deleteUser(ID) {//, parameter) {
        try {
            if (!this.isAdmin) {
                throw new UnauthorizedError("Shud be Admin")
            }
            if (typeof ID != 'number') {
                throw new ValidationError("ID shud be number")
            }
            let [indexOfUser] = User.findUser(ID)
            /*if (!isUserExist) {
                return "Failure"
            }*/
           
            /*switch (parameter) {
                case "fullname":
                    User.userAll[indexOfUser].fullname.splice(indexOfUser, 1)
                     return User.userAll[indexOfUser]

                case "gender":
                    User.userAll[indexOfUser].gender.splice(indexOfUser, 1)
                    return User.userAll[indexOfUser]

                case "age":
                    User.userAll[indexOfUser].age.splice(indexOfUser, 1)
                    return User.userAll[indexOfUse]
                    //this.contacts.splice(indexOfContact, 1)
                default:
                    throw new ValidationError("This is default case")

            }*/
            User.userAll.splice(indexOfUser, 1)
            return User.userAll
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }

    }

    createContact(contactName, country) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("shud not be admin")
            }
            if (typeof contactName != 'string') {
                throw new ValidationError("contactName shud be string")
            }
            if (typeof country != 'string') {
                throw new ValidationError("country shud be string")
            }
            let ContactObj = new Contact(contactName, country)
            this.contacts.push(ContactObj)
            return ContactObj
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }
    }

    getAllContact() {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("Shud not be a Admin")
            }
            return this.contacts
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    findContact(ID) {
        try {
            for (let index = 0; index < this.contacts.length; index++) {
                // console.log(this.contacts[index].ContactID);
                if (this.contacts[index].ContactID == ID) {
                    return [index]
                }
            }
            throw new NotFoundError("Contact Not Found")
        }
        catch (error) {
            throw error
            //console.log(shinde);

        }
    }

    updateContact(ContactID, parameter, newValue) {
        try {
            if (this.isAdmin) {
                return new UnauthorizedError("This shud not be Adim")
            }
            if (typeof ContactID != 'number') {
                throw new ValidationError("contactID shud be number")
            }
            if (typeof parameter != 'string') {
                throw new ValidationError("parameter shud be string")
            }
            if (typeof newValue != 'string') {
                throw new ValidationError("newValue shud be string")
            }
            let [indexOfContact] = this.findContact(ContactID)
            // console.log("index",indexOfContact);
            /* if (!isContactExist){
                return "Failuree"
             }  */
            return this.contacts[indexOfContact].updateContact(parameter, newValue)

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    deleteContact(ContactID) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("shud not be Admin")
            }
            if (typeof ContactID != 'number') {
                throw new ValidationError("contactID shud be number")
            }
            let [indexOfContact] = this.findContact(ContactID)
            /*if (isContactExist) {
                return "Failure"
            }*/
            this.contacts.splice(indexOfContact, 1)
            return this.contacts


        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }

    }

    createContactDetails(ContactID, typeofContactdetails, valueOfContactdetails) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("Error in Admin")
            }
            if (typeof ContactID != 'number') {
                throw new ValidationError("Error in ContactID must be number")
            }
            if (typeof typeofContactdetails != 'string') {
                throw new ValidationError("typeofContactdetails shud be string")
            }
            if (typeof valueOfContactdetails != 'string') {
                throw new ValidationError("valueOfContactdetails shud be string")
            }
            let [indexOfContact] = this.findContact(ContactID)
            /*if(! isContactExist){
                return "Failure"
            }*/
            return this.contacts[indexOfContact].createContactDetails(typeofContactdetails, valueOfContactdetails)

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }
    }

    getAllContactDetails(ContactID) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("shud not be Admin")
            }
            if (typeof ContactID != 'number') {
                throw new ValidationError("Error in ContactID must be number")
            }
            let [indexOfContact] = this.findContact(ContactID)
            /*if (!isContactExist) {
                return "Failure"
            }*/
            return this.contacts[indexOfContact].getAllContactDetails()

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    updateContactDetails(ContactID, ContactdetailID, typeofContactdetails, valueOfContactdetails) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("Admin does not exists")
            }
            if (typeof ContactID != 'number' || typeof ContactdetailID != 'number') {
                throw new ValidationError("this is a number")
            }
            if (typeof typeofContactdetails != 'string') {
                throw new ValidationError("Error typeofContactdetails must be string")
            }
            if (typeof valueOfContactdetails != 'string') {
                throw new ValidationError("Error valueOfContactdetails must be string")
            }
            let [indexOfContact] = this.findContact(ContactID)
            /*
            if(! isContactExist){
                throw new Error("Contact does not exists")
            }
            */
            // console.log(11);
            return this.contacts[indexOfContact].updateContactDetails(ContactdetailID, typeofContactdetails, valueOfContactdetails)
        }
        catch (error) {
            //console.log("Sahil Catch");
            console.log(error.message);
            console.log(error.specificMessage);
            // console.log(error);
            // console.log(error.stack);
            // console.log(error.name);
            // console.log(error.stack);
        }
    }

    deleteContactDetails(ContactID, ContactdetailID) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("is not Admin")
            }
            if (typeof ContactID != 'number' || typeof ContactdetailID != 'number') {
                throw new ValidationError("this is a number")
            }
            let [indexOfContact] = this.findContact(ContactID)
            /*if (!isContactExist) {
                return "Failure"
            }*/
            return this.contacts[indexOfContact].deleteContactDetails(ContactdetailID)
        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }
    }

    getUserById(ID) {
        try {
            if (!this.isAdmin) {
                throw new UnauthorizedError("shud be Admin")
            }
            if (typeof ID != 'number') {
                throw new ValidationError("ID is a number")
            }
            let [indexOfUser] = User.findUser(ID)
            /*if (!isUserExist) {
                return "Failure"
            }*/

            return User.userAll[indexOfUser]

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }

    getContactById(ID) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("shud no be admin")
            }
            if (typeof ID != 'number') {
                throw new ValidationError("ID is a number")
            }
            let [indexOfUser] = this.findContact(ID)
            /* if (!isUserExist) {
                 return "Failuree"
             }*/
            return this.contacts[indexOfUser]

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);

        }
    }

    getContactDetailById(ContactID, ContactdetailID) {
        try {
            if (this.isAdmin) {
                throw new UnauthorizedError("shud not be Admin")
            }
            if (typeof ContactID != 'number' || typeof ContactdetailID != 'number') {
                throw new ValidationError("ID's is a number")
            }
            let [indexOfUser] = this.findContact(ContactID)
            /*if (!isUserExist) {
                return "Failure"
            }*/
            // else{
            // if(this.contacts[indexOfUser].ContactdetailID == ID){
            //     return this.contacts[indexOfUser].ContactdetailID
            // }
            //console.log("11", this.contacts[indexOfUser]);
            return this.contacts[indexOfUser].getContactDetailById(ContactdetailID)

        }
        catch (error) {
            console.log(error.message);
            console.log(error.specificMessage);
        }
    }
}


let adminObj = User.newAdmin("Sahil", "M", 22)
//adminObj.updateContactDetails()
let user1 = adminObj.newUser("Sarvesh", "M", 20)
//user1.createContact("Siddhant", "IND")

let user2 = adminObj.newUser("Rohan", "M", 40)
let user3 = adminObj.newUser("Suswar", "M", 35)
// console.log(adminObj.getAllUsers())
console.log(adminObj.getUserById(1));
console.log(adminObj.updateUser(1, "gender", "F"))
console.log(adminObj.updateUser(1, "age", 23))
console.log(adminObj.deleteUser(3));
console.log(adminObj.getAllUsers());


 console.log(user1.createContact("Siddhant", "IND"))
 console.log(user1.createContact("Dhruv", "AUS"))
 console.log(user1.createContact("Aniket", "PAk"))
 // console.log(user1.getAllContact())
 // console.log(user1.updateContact(1, "contactName", "Dipika"))
 console.log(user1.getAllContact())
 //  console.log(user1.deleteContact(1))
 //  console.log(user1.getAllContact())

 console.log(user1.createContactDetails(1, "phoneNo", "989898989")) //0
 console.log(user1.createContactDetails(1, "country", "IND")) //1
 //console.log(user1.getAllContactDetails(1));
 //console.log(user1.updateContactDetails(1, 1,"valueOfContactdetails", "8287389909"))
 //  console.log(user1.deleteContactDetails(1, 1));

 console.log(user1.getContactById(1));
 console.log("------------------------------------------------------");
 console.log(user1.getContactDetailById(1, 1));
 // console.log();


module.exports = User