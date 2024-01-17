//Immediately invoked function expression (IIFE)

( function person(){
    console.log("Angshu");
})(); //named IIFE



(() => {
    console.log("Angshu Das")
})(); //unnamed arrow function IIFE



((no1) => {
    console.log(`${no1} you choosed!`) //4 you choosed!
})(4); //Parameterized IIFE