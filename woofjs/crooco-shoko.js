// http://woofjs.com/create.html#crooco-shoko

setBackdropURL('./images/outerspace.jpg')
setBackdropURL("./docs/images/beach.jpg")
setBackdropStyle("cover")
var gator = new Image({
  url: "./docs/images/river-gator.png",
  width: 130, 
  height: 80,
  y: -maxY - 100
})

var vel_y = 0;
var speed = 10;

gator.onMouseDown(() => {
  /* do something here */
  
  gator.y = -maxY - 100
  gator.x = randomX()
  
  
})

if (!localStorage.highscore) {
  localStorage.setItem("highscore", 0)
}

var score = 0

var textSprite1 = new Text({
  text: () => score, 
  size: 30,
  y: maxY - 20,
  x: -maxX + 100
})

var textSprite1 = new Text({
  text: () => localStorage.highscore, 
  size: 30,
  y: maxY - 20,
  x: maxX - 100
})

var done = false;

forever(() => {
  gator.y += vel_y;
  
  if (vel_y > 0)
      vel_y--
  else
    vel_y += speed
    
  speed *= 1.001
  
  if (gator.y > maxY - 20) {
    done = true;
    freeze()
  }
  
  score++
  
  if (score > localStorage.highscore && !done)
      localStorage.setItem("highscore", score)
})
