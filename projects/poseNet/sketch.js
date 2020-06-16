let video;

function setup(){
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    Image(video, 0, 0);
}