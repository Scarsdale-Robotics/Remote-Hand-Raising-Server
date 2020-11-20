function setup() {
  canvas = createCanvas(screen.width, screen.height);
  // size(displayWidth, displayHeight/2);
}
let color;
let buttonW = 500;
let buttonH = 500;
let buttonX = 100;
let buttonY = 400;
let isPressed = false;

function draw() {
  if(isPressed){
    color = [200, 0, 0]
  }else{
    color = [120, 0, 0]
  }
  buttonX = windowWidth / 2;
  background(255);
  fill(color)
  rect(buttonX, buttonY, buttonW, buttonH)
  rectMode(CENTER)
}

function mousePressed() {
  isPressed = false;
  if (mouseX > buttonX - buttonW / 2 && mouseX < buttonX + buttonW / 2 && mouseY > buttonY - buttonH / 2 && mouseY < buttonY + buttonH / 2) {
    color = 0;
    isPressed = true;
  }

}

function mouseReleased() {
  color = 255;
  if (isPressed == true) {
    isPressed = false;
    var url = '';
    var postData = {
      action: "pressed button"
    };
    httpPost(url, 'json',
      postData, (res) => {
        console.log(res);
      });
  }
}
