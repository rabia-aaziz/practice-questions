function print(){

    let startNumber =  parseInt(document.querySelector("#startNumb").value);
    let stopNumber  =  parseInt(document.querySelector("#stopNumb").value);

    for(let i = startNumber ;  i <= stopNumber ; i++){

        console.log(i);
    }
    
}