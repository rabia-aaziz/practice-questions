function checkPass() {
    let mathsMarks = parseInt(document.querySelector("#maths").value);
    let englishMarks = parseInt(document.querySelector("#english").value);
    let compMarks = parseInt(document.querySelector("#comp").value);

    console.log(mathsMarks > 20)
    console.log(englishMarks > 10)
    console.log(compMarks > 50)
    let result;

    if (mathsMarks > 20 && englishMarks > 10 && compMarks > 50) {
        result = "PASS"; // you can also directly put alert("PASS") here
    } else {
        result = "FAIL";
   }

   alert(result);
}