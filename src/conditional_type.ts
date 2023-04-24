// Define fuel type
type Diesel = {
    type : "petrol" | "bio" | "diesel";
}
type Gasoline = {
    type : "hybrid" | "conventional";
}

// Now we will define vehical type
type Car = {
    engine : Diesel;
}
type Bus = {
    engine : Gasoline;
}

type Bike = {
    moter : Gasoline;
}

// define a parent engine type - generic type
type Engine<T> = T extends {engine : unknown} ? T["engine"] : never;


/// prashant
type BaseResponse<T> = T extends {status : unknown} ? T["status"] : never;


// anjali
type LoginType={
status:boolean,
data:any,
}

let Login = BaseResponse<LoginType>;

const loginResult : Login = {
    status:true,
    data :"Loign was success",
}



// shubham
type ErrorType={
    status:boolean,
    errorCode:number,
    erromSg:any,
    }
    
    let error = BaseReponse<LoginType>;
    
    const errorResult : ErrorType = {
        status:true,
        errorCode :404,
        erromSg :"Loign was success",
    }




// if () -> print , else -> print()
// let py = (1>0) ? "Done" : ""

// if ()->, dfsd else->


type CarEngine = if ( Car["engine"]){
    return Car{engine}
}else {
    nevert
}

type BusEngine = Engine<Bus>;
type BikeMoter = Engine<Bike>;


// make a new 
const carEngine : CarEngine = {
    type : "petrol",
}
const busEngine : BusEngine = {
    type : "hybrid",
}
const busNew : BusEngine = {
    type :"conventional",
}

console.log(carEngine);
console.log(busEngine);


// if else,