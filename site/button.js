let buttonW = 500;
let buttonH = 500;
let buttonX = 100;
let buttonY = 400;

let isPressed = false;
let selfHandRaised = false;
let serverHandRaised = false;
let buttonUp;
let buttonDown;
let buttonIMG;

let tickCounter = 0;
let pingEvery = 30;
const input = document.getElementById("classcode")


//P5 drawing
function setup() {
    frameRate(15);
    canvas = createCanvas(screen.width, screen.height);

    buttonUp = loadImage('Button1.png');
    buttonDown = loadImage('Button2.png');
    buttonIMG = buttonUp;
    imageMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    if (tickCounter % pingEvery == 0) {
        tickCounter = 1;
        if (input.value === "") {
             serverHandRaised = false 
             //Set to false if no input so we don't end up in a situation 
             //where the user deletes the code and hand is still raised
        } else {
            var url = window.location.protocol + "/api/handRaised/" + input.value;
            httpGet(url, 'json', (res) => {
                serverHandRaised = res.raised;
            });      
        }
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
    image(buttonIMG, buttonX, buttonY, buttonW, buttonH);

    let serverText = '';
    let selfText = '';
    if (serverHandRaised) {
        serverText = 'raised.';
    } else {
        serverText = 'not raised.';
    }

    if (selfHandRaised) {
        selfText = 'raised.';
    } else {
        selfText = 'not raised.';
    }
    textSize(40 * windowWidth / 1080);
    text("The hand is " + serverText, buttonX, buttonY / 5 * 2);
    text("Your hand is " + selfText, buttonX, buttonY / 5 * 0.9);
}
//End P5 drawing

function mousePressed() {
    pressed();
}

function mouseReleased() {
    if (isPressed === true) {
        isPressed = false;
        var url = window.location;
        var postData = {
            action: selfHandRaised ? "lower" : "raise",
            classcode: input.value
        };
        console.log(selfHandRaised)
        console.log(postData)
        httpPost(url, 'text', postData, (res) => {}, (err) => {console.log(err)});

        if(input.value !== "") {
            selfHandRaised = !selfHandRaised
        }
    }
}

function touchEnded() {
    pressed();
}

function pressed() {
    isPressed = false;
    if (mouseX > buttonX - buttonW / 3 && mouseX < buttonX + buttonW / 3 && mouseY > buttonY - buttonH / 2 && mouseY < buttonY + buttonH / 4) {
        isPressed = true;

    }
}
