var database, firebase;

var drawing = [];
var currentPath = [];

function setup(){
    canvas = createCanvas(200,200);
    canvas.mosuePressed(startPath);
    canvas.mosueReleased(endPath0);
    var firebaseConfig = {
        apiKey: "AIzaSyBX7FQzj_Ud6lHR978mVWoj06ti8otwZyY",
        authDomain: "canvas-4665d.firebaseapp.com",
        databaseURL: "https://canvas-4665d.firebaseio.com",
        projectId: "canvas-4665d",
        storageBucket: "canvas-4665d.appspot.com",
        messagingSenderId: "648435040689",
        appId: "1:648435040689:web:acecced95a2da7f9567d90",
        measurementId: "G-00NJR55VR0"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}

function startPath(){
    currentPath = [];
    currentPath.push(point);
    drawing.push(currentPath);
}

function endPath(){
    drawing.push(currentPath);
}

function draw(){
    backgrond(0);
    if(mouseIsPressed){
        var point = {
            x:mouseX,
            y:mouseY
        }

    }

   
    stroke(255);
    strokeweight(4);
    noFill();
    for (var i = 0; i< drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for (var i = 0; i< path.length; i++){
     vertex(path[i].x,drawing[i].y )
        }
        endShape();
    }
  
}