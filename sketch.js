const data= [
  [1,1,1,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,1,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,1], 
  [1,0,1,0,0,0,0,0,1,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,1,0,1,0,0,0,1,1,1], 
  [1,0,1,0,0,0,0,0,0,0,1], 
  [1,0,1,0,1,1,0,1,1,0,1], 
  [1,0,0,0,1,0,0,0,0,0,1], 
  [1,1,1,0,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,0,0,1,0,1,0,0,1], 
  [1,0,1,0,0,0,0,1,0,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,1,1,1,0,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,1,1],
 ] 
 var activeBlock=10
 // var spawnPoints=[[1,18],[6,]]
  var gb=100,database
var level,parr,e1,example_img;
function preload(){
 //example_img=loadImage("Images\Top_Down_Survivor\trail.png")
}
function setup(){
  
  database =firebase.database();
  createCanvas(displayWidth,displayHeight)
  // gb=displayWidth*pixelDensity /10
  //createEditor()
  var arr=data;
  for(var i=0; i<arr.length;i++){
    for(var j=0; j<arr[i].length;j++){
       switch (arr[i][j]) {
           case 0:
               arr[i][j]=int(random(10,25)/10)
               break;
           case 1: 
                arr[i][j]=int(random(10,14))
           default:
               break;
       }
    }
}
parr = new Array(14)

  level = new Level(data)
  player =new Player(1,16,level.data)
  for (let i = 0; i < parr.length; i++) {
      parr[i]=new Enemy(int(random(1,level.data[0].length-1)),1,level.data)
    
  }
  //e1= new Enemy(1,17,level.data)
}
var click={i:0,j:0}
function draw(){
  camera.position.y =player.sprite.y
  camera.position.x =map(player.sprite.x,gb,gb*level.data[0].length,gb*level.data[0].length*0.3,gb*level.data[0].length*0.6 )
  //showButtons();
  //console.log(frameRate())
    background(230,250,250)
      level.display()
   
    level.drawground()
    //e1.display();
    for (let i = 0; i < parr.length; i++) {
      parr[i].display()
     // parr[i].moveToPos()
  }
  
    level.drawWalls()
    player.display()
   // level.update()
  //e1.display();

//console.log(i)
   // levelEditorRun();
   noStroke();
   fill(255,250,0,200)
   ellipse((click.j+1)*gb,(click.i+1)*gb,gb*0.5,gb*0.5);

}
function mouseClicked(){ 
   if(edit){ var i=gi(mouseX, mouseY)
    level.data[i.y][i.x]=activeBlock
  }

  for (let i = 0; i < parr.length; i++) {
  
   // parr[i].moveToPos()
  }
  
player.moveToPos()
  console.log("mouseCliked")
  }
