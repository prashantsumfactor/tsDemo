type Trip  = { 
    origin: 
    { 
        uuid:string;
        city:string;
    };
    }|
    {
        originuuid: string;
    };


type OriginRef = Extract<Trip,{originuuid:string}>;
type OriginWhole = Extract<Trip,{origin:{uuid:string}}>;


const newtrip : OriginRef = {
    originuuid:"123",
}

const newtrip2 : OriginWhole = {
    origin : {
        uuid :"dsfds",
        city:"nas",
    },
}

console.log(newtrip);
console.log(newtrip2);