
function print(){

    let start = parseInt(document.querySelector("#startNumb").value);
    let stop = parseInt(document.querySelector("#stopNumb").value);
    let jump = parseInt(document.querySelector("#jumpNumb").value);

    for(let i = start ; i <= stop ; i += jump){

        console.log(i);
    }
    
}