function calculatePercentage() {
   let marks = parseInt(document.querySelector("input").value);
   const totalMarks = 1050;
    let percentage = (marks/totalMarks) * 100;
   percentage = Math.round(percentage * 100) / 100
   alert(percentage + " %");
}