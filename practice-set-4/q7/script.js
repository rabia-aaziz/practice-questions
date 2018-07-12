function checkOverspeeding() {
    let speed = parseInt(document.querySelector("input").value);    
    const maxSpeed = 60;

    if (speed > maxSpeed) {
       alert("OVERSPEEDING!");
  } else {
        alert("NOT");
    }
}


