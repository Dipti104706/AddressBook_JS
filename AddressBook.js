var prompt=require("prompt-sync")();
//UC1 - Create a addressbook with person details
class Person
{
    //Declaring variables
    firstName;
    lastName;
    address;
    city;
    state;
    pin;
    phone;  
    emailId;
   // declaring parameterized constructor
    constructor(...params)
    {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.pin=params[5];
        this.phone=params[6];
        this.emailId=params[7];
    }
    //tostring method
    toString()
    {
        return ("First name: " + this.firstName +"\n Last name "+ this.lastName + 
                " \n Address: " +this.address+" \n City: " +this.city+" \n State: "
                +this.state+" \n Pincode: " +this.pin+" \n Phone Number: "+this.phone+
                " \n Email Id: "+this.emailId);
    }
}
//Getting the input from user 
firstName = prompt('Enter First name : ');
lastName = prompt('Enter Last name : ');
address = prompt('Enter Address : ');
city = prompt('Enter City name : ');
state = prompt('Enter State name : ');
pin = prompt('Enter PinCode: ')
phone = prompt('Enter Phone number :');
emailId= prompt('Enter EmailId : ');
//Creating a object of ContactClass
let contact1=new Person(firstName,lastName,address,city,state,pin,phone,emailId);
console.log(contact1.toString());