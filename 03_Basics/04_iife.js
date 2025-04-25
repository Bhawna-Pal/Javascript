//  Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named iife
    console.log(`DB connected`); 
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}  )('Bhawna')