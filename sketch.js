var bg = "snow2.jpg";
var backgroundImg;
var sound;

function preload()
{
  boy1Img = loadImage("boy1.png");
  boy2Img = loadImage("boy2.png");
  sound = loadSound("sound.wav");

  getBackgroundImg();
}

function setup() {  
  createCanvas(800,400);

  boy1 = createSprite(80,320,50,50);
  boy1.addImage("boy1",boy1Img);
  boy1.scale =0.655;

  boy2 = createSprite(730,320,50,50);
  boy2.addImage("boy2",boy2Img);
  boy2.scale =0.455;



}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  drawSprites();

  fill("white");
  textSize(25);
  text("Time(in hours only):"+hour,40,60);
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    boy1.x = boy1.x+20;
    sound.play();
  }
  if(keyCode === LEFT_ARROW)
  {
    boy1.x = boy1.x-20;
    sound.play();
  }
  if(keyCode === UP_ARROW)
  {
    boy1.y = boy1.y-20;
  }
  if(keyCode === DOWN_ARROW)
  {
    boy1.y = boy1.y+20;
  }
  if(keyCode === RIGHT_ARROW)
  {
    boy2.x = boy2.x-20;
  }
  if(keyCode === LEFT_ARROW)
  {
    boy2.x = boy2.x+20;
  }
  if(keyCode === UP_ARROW)
  {
    boy2.y = boy2.y-20;
  }
  if(keyCode === DOWN_ARROW)
  {
    boy2.y = boy2.y+20;
  }
}

async function getBackgroundImg(){

  // write code to fetch time from API
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

  //change the data in JSON format
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;

  // write code slice the datetime
  hour = datetime.slice(11,13);

  // add conditions to change the background images from sunrise to sunset
  if(hour>=18 && hour<=0700)
  {
      bg = "snow2.jpg";
  }

  if(hour>=0700 && hour<=18)
  {
      bg = "snow1.jpg";
  }

  backgroundImg = loadImage(bg);
}