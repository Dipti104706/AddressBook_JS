var prompt=require("prompt-sync")();
//UC5 - Delete existing contact based on name 
class Person
{
    //Parameterized constructor
    constructor(...params)
    {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.pin=params[5];
        this.phone=params[6];
        this.emailID=params[7];
    }
    
    //Getter setter method
    get firstName()
    {
        return this._firstName;
    }
    set firstName(value)
    {
        //Creating Regex expression 
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        //test() is to match pattern 
        if(firstNameRegex.test(value))
        {
            this._firstName = value;
        }
        else
        {
            throw "Given First name is invalid";
        }
    }
    get lastName()
    {
        return this._lastName;
    }
    set lastName(value)
    {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastNameRegex.test(value))
        this._lastName = value;
        else
        throw "Given Last name is invalid";
    }
    get address()
    {
        return this._address;
    }
    set address(value)
    {
        let addressRegex = RegExp("^[A-Z a-z]{4,}$");
        if(addressRegex.test(value))
        this._address = value;
        else
        throw "Address is invalid";
    }
    get city()
    {
        return this._city;
    }
    set city(value)
    {
        let cityRegex = RegExp("^[A-Z a-z]{4,}$");
        if(cityRegex.test(value))
        this._city = value;
        else
        throw "City is invalid";
    }
    get state()
    {
        return this._state;
    }
    set state(value)
    {
        let stateRegex = RegExp("^[A-Z a-z]{4,}$");
        if(stateRegex.test(value))
        this._state = value;
        else
        throw "State is invalid";
    }
    get pin()
    {
        return this._pin;
    }
    set pin(value)
    {
        let pinRegex = RegExp("^[1-9][0-9]{2}[ ]{0,1}[0-9]{3}$");
        if(pinRegex.test(value))
        this._pin = value;
        else
        throw "Pincode is invalid";
    }
    get phone()
    {
        return this._phone;
    }
    set phone(value)
    {
        let phoneRegex = RegExp("^[0-9]+\\s[0-9]{10}$");
        if(phoneRegex.test(value))
        this._phone = value;
        else
        throw "Invalid Phone Number";
    }
    get emailID()
    {
        return this._emailID;
    }
    set emailID(value)
    {
        let emailRegex = RegExp("^[a-zA-Z0-9]+[._+-]{0,1}[a-zA-Z0-9]*@[a-zA-Z0-9]{1,10}.[a-zA-Z]{2,10}[.]*[a-zA-Z]*$");
        if(emailRegex.test(value))
        this._emailID = value;
        else
        throw "Invalid Email";
    }

    //tostring method for displaying method
    toString()
    {
        return `First name:${this.firstName} \nLast name:${this.lastName} \nAddress: ${this.address} \nCity:${this.city} \nState:${this.state} \nPincode:${this.pin} \nPhone Number:${this.phone} \nEmail Id: ${this.emailID}`;
    }
}

//function to create contact 
function AddContact(array)
{
    try
    {
        var contact=parseInt(prompt("Enter the number of contacts to be added: "));
        while(contact>0)
        {
            console.log("Add details for contact-"+contact);
            //getting the input from user 
            firstName = prompt('Enter First name : ');
            lastName = prompt('Enter Last name : ');
            address = prompt('Enter Address : ');
            city = prompt('Enter City name : ');
            state = prompt('Enter State name : ');
            pin = prompt('Enter PinCode: ')
            phone = prompt('Enter Phone number :');
            emailID= prompt('Enter EmailId : ');
            //creating a object 
            let contact1=new Person(firstName,lastName,address,city,state,pin,phone,emailID)
            array.push(contact1);    
            contact--; 
        }
    }
    catch(ex)
    {
        console.log(ex);
    }
}


//Displaying all contact stored in array
function DisplayArray(contact)
{
    for(let i=0;i<contact.length;i++)
    {
        console.log(contact[i].toString()+"\n");
    }
}

//Uc4-Modify cintact details based on firstname
function EditContact(contact)
 {
    try 
    {
        if (contact.length > 0) 
        {
            var name = prompt("Enter the first name whose details want to edit:");
            var result = contact.find(x => x.firstName == name);
            if (result != null) 
            {
                while (true) 
                {
                    console.log("Enter the option to modify the details: \n 1-Change First name \n 2-Change Last name \n 3-Change Address \n 4-Change City \n 5-Change State \n 6-Change Pincode \n 7-Change Phone Number\n 8-Change emailID \n 9-Exit");
                    let option = prompt("Enter the option:")
                    switch (option) 
                    {
                        case "1":
                            result.firstName = prompt("Enter the new First Name: ");
                            break;
                        case "2":
                            result.lastName = prompt("Enter new last Name: ");
                            break;
                        case "3":
                            result.address = prompt("Enter new address: ");
                            break;
                        case "4":
                            result.city = prompt("Enter new City Name: ");
                            break;
                        case "5":
                            result.state = prompt("Enter new State Name: ");
                            break;
                        case "6":
                            result.pin = prompt("Enter new pincode: ");
                            break;
                        case "7":
                            result.phone = prompt("Enter new Phone Number: ");
                            break;
                        case "8":
                            result.emailID = prompt("Enter new Email ID: ");
                            break;
                        case "9":
                            return;
                        default:
                            console.log("Invalid input")
                            break;                        
                    }
                }
            }
            else 
            {
                console.log("Contact doesnot Exist");
            }
        }
        else
        {
            console.log("AddressBook is null");
        }
    }

    catch (ex) 
    {
        console.error(ex);
    }
}

//Delete the contact using name from the address book
function DeleteContact(contact)
{
    var name = prompt('Enter first name :');
    for(let i=0;i<contact.length;i++)
    {
        if(contact[i].firstName == name)
        {
            contact.splice(i,1); //remove object from the specific index
            console.log("Successfully Deleted Contact");
            break;
        }
        else
        {
            console.log("Contact doesn't Exist");
        }
    }
}

//Function for all opeartions like add,edit contact to the adddressbook 
function operation()
{
    console.log("Welcome to Addressbook")
    //creating a array
    var contactArray=new Array();
    while(true)
    {
        console.log("Enter the operation you want to perform: \n1-Add details to addressbook \n2-Display all contacts \n3-Modify existing contact \n4-Delete specific contact \n5-Exit");
        var op=prompt("Enter the option:")
        switch(op)
        {
            case "1":
                AddContact(contactArray);
                break;
            case "2":
                DisplayArray(contactArray);
                break;
            case "3":
                EditContact(contactArray);
                break;
            case "4":
                DeleteContact(contactArray);
                break;
            case"5":
                return;
            default:
                console.log("Invalid option!");
                break;
        }
    }
}
operation();



