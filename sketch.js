function setup() {
    createCanvas(400, 400);
      background("white");
  }
  
  function draw() {
  
  stroke("red");
  fill("purple");
  
  //console.log(mouseIsPressed)
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 25);
  }
  
  }
  