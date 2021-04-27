var dog, happyDog;

var database;

var foodS, foodStock;

var dogImg, dogImg1;

function preload()
{
	dogImg = loadImage('images/dogImg.png');
  dogImg1 = loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);

  image(dogImg,10,10);

   database=firebase.database();
   foodStock=database.ref("Food");
   foodStock.on("value",readStock);
  
}


function draw() {  

  background(46, 139, 87);

  stroke("white");
  text("Food remaining : " + foodS, 170, 200);
  textSize(13);
  text("Note: Press UP_ARROW Key to feed Drago some Milk!" ,130,10,300,20)
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x) {
  database.ref('/').update({
    Food:x
  })
  
}






