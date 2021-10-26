var prompt=require("prompt-sync")();
//UC3 - Adding contact in a array
class Person
{
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
        let phoneRegex = RegExp("^[1-9]{2}+[ ]+[0-9]{10}$");
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
        return `First name:${firstName} \nLast name:${lastName} \nAddress: ${address} \nCity:${city} \nState:${state} \nPincode:${pin} \nPhone Number:${phone} \nEmail Id: ${emailId}`;
    }
}

//creating a new array
var contactArray=new Array();
//calling createContact
createContact(contactArray);

//function to create contact 
function createContact(contactArray)
{
    try
    {
        var contact=parseInt(prompt("enter the number of contacts to be added: "));
        while(contact--)
        {
            //getting the input from user 
            firstName = prompt('Enter First name : ');
            lastName = prompt('Enter Last name : ');
            address = prompt('Enter Address : ');
            city = prompt('Enter City name : ');
            state = prompt('Enter State name : ');
            pin = prompt('Enter PinCode: ')
            phone = prompt('Enter Phone number :');
            emailId= prompt('Enter EmailId : ');
            //creating a object 
            let contact1=new Person(firstName,lastName,address,city,state,pin,phone,emailId);
            contactArray.push(contact1);
            displayArray(contact1);
        }
    }
    catch(ex)
    {
        console.log(ex);
    }
}

//Displaying all contact stored in array
function displayArray(contact)
{
    for(let i=0;i<contact.length;i++)
    {
        console.log(contact[i].toString()+"\n");
    }
}
