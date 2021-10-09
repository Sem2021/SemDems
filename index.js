
function giveMeYourMemory(a) {
    if(a < 2) {
        return a;
 
    }else{
        return giveMeYourMemory(a-1) + giveMeYourMemory(a - 2);
    }
}

setTimeout(() => {
    giveMeYourMemory(10000)
}, 3000);
