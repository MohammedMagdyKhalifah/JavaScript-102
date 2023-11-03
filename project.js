class Vehicle {
    name;
    manufactureCompany;
    ID;
    constructor(name,manufactureCompany,ID){
        this.name=name;
        this.manufactureCompany=manufactureCompany;
        this.ID=ID;
    }
}
class Car extends Vehicle{
    type;
    constructor(name,manufactureCompany,ID,type){
        super(name,manufactureCompany,ID);
        this.type=type;
    };
}
class Plane extends Vehicle{
    type;
    constructor(name,manufactureCompany,ID,type){
        super(name,manufactureCompany,ID)
        this.type=type;
    }
}
class Employee {
    name;
    dateOfBirth;
    ID;
    constructor(name,dateOfBirth,ID){
        this.name=name;
        this.dateOfBirth=dateOfBirth;
        this.ID=ID;
    }
}
class Driver extends Employee{
    licenseID;
    constructor(name,dateOfBirth,ID,licenseID){
        super(name,dateOfBirth,ID)
        this.licenseID=licenseID;
    }
}
class Pilot extends Employee{
    licenseID;
    constructor(name,dateOfBirth,ID,licenseID){
        super(name,dateOfBirth,ID)
        this.licenseID=licenseID;
    }
}
class Reserved{
    reservationID;
    vehiclesId;
    employeeId;
    reservationDate;
    constructor(reservationID,vehiclesId,employeeId,reservationDate){
        this.reservationID=reservationID;
        this.vehiclesId=vehiclesId;
        this.employeeId=employeeId;
        this.reservationDate=reservationDate;
    }
}
let cars = [
    new Car("Civic","Honda",100010,"Gas"),
    new Car("Civic","Honda",100010,"Gas"),
    new Car("Model-X","Tesla",100013,"electric")
];

let planes = [
    new Plane("350","Airbus",2232,"Passengers"),
    new Plane("767","Boing",3434,"Passengers")
];
let drivers=[
    new Driver("John Doe","1980-01-01",100010,1),
    new Driver("Mohammed",new Date(2002,0,3),1000,22112)
];
let pilots=[
    new Pilot("Tom Smith","1980-01-01",20010,1),
    new Pilot("Khalifah",new Date(2002,0,3),23232,1999000)
];
let reserved = [];
function checkCompatibility(employeeID,vehicleID){
    let isDriver = false;
    for(let i = 0 ;i<drivers.length;i++){
        if (drivers[i].ID==employeeID ){
            isDriver=true;
        }
    }
    let isCar = false;
    for(let i = 0 ;i<cars.length;i++){
        if (cars[i].ID==vehicleID ){
            isCar=true;
        }
    }
    let isPilot = false;
    for(let i = 0 ;i<pilots.length;i++){
        if (pilots[i].ID==employeeID ){
            isPilot = true;
        }
    }
    let isPlane = false;
    for(let i = 0 ;i<planes.length;i++){
        if (planes[i].ID==vehicleID ){
            isPlane=true;
        }
    }
    if(isDriver==true && isCar==true){
        reserved.push(new Reserved(Math.round(Math.random()*1000),vehicleID,employeeID,new Date()));
        console.log(`Driver ${employeeID} and Car ${vehicleID} are compatible`);
    }else if(isPilot==true && isPlane==true){
        reserved.push(new Reserved(Math.round(Math.random()*1000),vehicleID,employeeID,new Date()));
        console.log(`Pilot ${employeeID} and plane ${vehicleID} are compatible`);
    } else {
        console.log("Inconsistency in the entered data")
    }
}
checkCompatibility(drivers[0].ID , cars[0].ID)
checkCompatibility(drivers[1].ID , cars[1].ID)
checkCompatibility(pilots[0].ID , planes[0].ID)
checkCompatibility(pilots[1].ID , planes[1].ID)

// غير متوافق
checkCompatibility(pilots[1].ID , cars[1].ID)

console.log(reserved.map(function(e,i,array){
    return e;
}));

