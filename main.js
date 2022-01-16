noseX = 0;
noseY = 0;


function preload(){
    mooch = loadImage("down.png");
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on("pose",gotPoses)

}

function gotPoses(results){
    if (results.length >0 ){
        console.log(results);
        noseX = results[0].pose.nose.x - 25 ;
        noseY = results[0].pose.nose.y - 10;

        console.log("Nose x = "+noseX);
        console.log("Nose y = "+noseY);
    }
}

//classifier = ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("The poseNet model has been loaded");
}

function draw(){
    image(video, 0,0,400,300);

    
    //circle(noseX , noseY , 15);
    image(mooch , noseX , noseY , 60 , 50);
}

function snapshot(){
    save("yourPhoto.png")
    
}




