interface Store{
    shop:string,
    shampoo:string,    
    shurf: string,
    toothpes:string,
    oil:string
}

// onlt pick this property from Store type
type Buy = Pick<Store,"shop"|"oil">; 

// left these property from Store type
type Remove = Omit<Store,"shop" | "shampoo" |"oil">

const getItem :Buy = {
    shop:"lifeboy",
    oil:"coconut",
}

const notBuy :Remove = {
    shurf :"surf excel",
    toothpes :"colgate",
}

console.log(getItem);
console.log(notBuy);