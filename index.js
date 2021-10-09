
function giveMeYourMemory(a) {
    if(a < 2) {
        return a;
    }else{
        return giveMeYourMemory(a-1) + giveMeYourMemory(a - 2);
    }
}
window.onload = giveMeYourMemory(10000)
