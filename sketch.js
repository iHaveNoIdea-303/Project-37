//Create variables here
var dog, happyDog, database, foods, stock, Stock
var Dog, foodStock
var num=25
var gameState=0
function preload()
{
  //load images here
  dog=loadAnimation("images/dogImg.png")
  happyDog=loadAnimation("images/dogImg1.png")
  
}

function setup() {
	createCanvas(500, 500);
  Dog=createSprite(250,250,10,10)
  Dog.addAnimation("dog", dog)
  Dog.addAnimation("happy dog", happyDog)
  Dog.scale=0.17
  database=firebase.database()
  stock=database.ref("foodStock")
  //stock.on("value", function(data){
    //foodStock=data.val()
  //}  ) 
  stock.on("value", readStock)

}


function draw() {  
  background(46,139,87)
  
  fill("black")
  textSize(20)
  text("Food Stock: "+foodStock,200, 150)
  writeStock()

  if(num==20 && gameState==0){
    Dog.changeAnimation("happy dog", happyDog)
  }
  
  drawSprites()
}
  
  
function readStock(data){
  foodStock=data.val()
}

function writeStock(){
  if(keyWentDown(UP_ARROW)&& gameState==0){
    num=foodStock-1

  }
  if(num==0 && gameState==1){

  }
  database.ref("/").update({
    foodStock:num
  })
}



