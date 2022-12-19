function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 450);
    canvas.position(600, 80);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotposes);
}

function modelloaded(){
    console.log(' poseNet is intialised');
}

function gotposes(){
    if (results.length > 0)
    {
        console.log(results);
    }

}


function draw(){
    background('#4287f5');
}