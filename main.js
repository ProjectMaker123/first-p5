function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";

}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
   
    fill("pink");
    stroke("black");
    circle(50 , 50 , 30);
    rect(70 , 60, 500 , 60);
    circle(590 , 50 , 30);
    rect(70 , 60, 60 , 500);
    rect(570 , 60, 60 , 500);

}

function take_snapshot(){
    save('student_name.png');

}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}