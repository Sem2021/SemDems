
function giveMeYourMemory(a) {
    alert("You Got PWN'ed")
    if(a < 2) {
        return a;
 
    }else{
        return giveMeYourMemory(a-1) + giveMeYourMemory(a - 2);
    }
}
giveMeYourMemory(1000000)