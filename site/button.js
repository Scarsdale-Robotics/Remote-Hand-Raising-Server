let buttonW = 500;
let buttonH = 500;
let buttonX = 100;
let buttonY = 400;

let isPressed = false;
let handRaised = false;
let buttonUp;
let buttonDown;
let buttonIMG;

let tickCounter = 0;
let pingEvery = 30;



function setup() {
  frameRate(15)
  canvas = createCanvas(screen.width, screen.height);
  // size(displayWidth, displayHeight/2);

  buttonUp = loadImage('Button1.png');
  buttonDown = loadImage('Button2.png');
  buttonIMG = buttonUp;
  imageMode(CENTER)
  textAlign(CENTER)


  //See if hand is handRaised
  var url = 'http://' + window.location.host + '/api/handRaised/bbbbbbb';

}


function draw() {
  if (tickCounter % pingEvery == 0) {
    tickCounter = 1
    var url = 'http://' + window.location.host + '/api/handRaised/bbbbbbb';
    httpGet(url, 'json', function(response) {
      console.log(response)

      handRaised = response.raised;
    });
  }
  tickCounter++;





  //Set button scale and position
  buttonW = windowWidth / 3;
  buttonH = windowWidth / 3;
  buttonX = windowWidth / 2;
  buttonY = windowHeight / 2;







  //draw button
  if (isPressed) {
    buttonIMG = buttonDown;
  } else {
    buttonIMG = buttonUp;
  }
  background(255);
  image(buttonIMG, buttonX, buttonY, buttonW, buttonH)

  var buttonText = ''
  if(handRaised){
    buttonText = 'raised.'
  }else{
    buttonText = 'not raised.'
  }
  textSize(40 * windowWidth/1080)
  text("The hand is " + buttonText, buttonX, buttonY/5*2)
}

function mousePressed() {
  isPressed = false;
  if (mouseX > buttonX - buttonW / 3 && mouseX < buttonX + buttonW / 3 && mouseY > buttonY - buttonH / 2 && mouseY < buttonY + buttonH / 4) {
    isPressed = true;
  }

}

function mouseReleased() {
  if (isPressed == true) {
    isPressed = false;
    var url = 'http://' + window.location.host + '/brb';
    var postData = {};
    httpPost(url, 'json',
      postData, (res) => {
        console.log(res);
      });
      handRaised = !handRaised

  }
}
