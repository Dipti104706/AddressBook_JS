var prompt=require("prompt-sync")();
//UC8 - Search contact based on city or state in the address book  
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
            //checking for duplicate entry in the address book
            let unique=array.filter(x=>x.firstName==firstName);
            if(unique.length==0) //if unique contains any value that maens that first name already exists
            {
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
            else
            {
                console.log("Contact name already exist");
            }    
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

//Uc5 -Delete the contact using name from the address book
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

//Uc 6-Finding number of contact present in the addressbook
function FindNumberofContact(contact) 
{
    return contact + 1;
}

//UC-8- Search the contact details based on city or state
function SearchBasedonStateOrCity(contact)
{
    console.log("\nEnter for :\n1-Search based on city \n2-Search based on state \n3-Exit");
    var opt=prompt("Enter option: ");
    switch(opt)
    {
        case "1":
            var cityName=prompt("Enter a city name: ");
            var City=contact.filter(x=>x.city==cityName);
            if(City.length!=0)
            {
                DisplayArray(City);
            }
            else
            {
                console.log(cityName+" does not exist");
            }
        case "2":
            var stateName=prompt("Enter a state name:");
            var State=contact.filter(x=>x.state==stateName);
            if(State.length!=0)
            {
                DisplayArray(State);
            }
            else 
            {
                console.log(stateName+" does not exist");
            }
        case "3":
            return;
    }
}

//UC9 view contact by city and state
function ViewByCityAndState(contactArray)
{
    //creating a map for city an state
    var city = new Map();
    var state = new Map();
    contactArray.forEach(contact =>
    {
        //For city
        var array1 = new Array();
        if(city.has(contact.city))
        {
            array1 = city.get(contact.city);    
        }
        array1.push(contact);
        city.set(contact.city,array1);
        //For state
        var array2 = new Array();
        if(state.has(contact.state))
        {
            array2 = state.get(contact.state);       
        }
        array2.push(contact);
        state.set(contact.state,array2);
    })
    console.log("\nEnter for :\n1-View contact based on city \n2-View contact based on state \n3-Count contact based on city \n4-Countcontact based on state \n5-Exit");
    var opt=prompt("Enter option: ");
    switch(opt)
    {
        case "1":
            console.log("Iterating Contacts based on city:");
            for(let [key,value] of city)
            {
                console.log("The contacts in city "+key);
                DisplayArray(value);
            }
            break;
        case "2":
            console.log("Iterating Contacts based on state:");
            for(let [key,value] of state)
            {
                console.log("The contacts in state "+key);
                DisplayArray(value);
            }
            break;
        case "3":
            for(let [key,value] of city)
            {
                //Uc10 counting contacts based on city
                console.log("There are " +value.length+ " contacts in city "+key);
            }
            break;
        case "4":
            for(let [key,value] of city)
            {
                //Uc10 counting contacts based on state
                console.log("There are " +value.length+ " contacts in state "+key);
            }
            break;
        case "5":
            return;
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
        console.log("Enter the operation you want to perform: \n1-Add details to addressbook \n2-Display all contacts \n3-Modify existing contact \n4-Delete specific contact \n5-Find number of contacts \n6-Search person by city and state \n7-View and Count contact based on city or state \n8-Exit");
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
            case "5":
                console.log("Total number of contact present in the address book:")
                console.log(contactArray.reduce(FindNumberofContact, 0));
                break;
            case "6":
                SearchBasedonStateOrCity(contactArray);
                break;
            case "7":
                ViewByCityAndState(contactArray);
                break;
            case "8":
                return;
            default:
                console.log("Invalid option!");
                break;
        }
    }
}
operation();



