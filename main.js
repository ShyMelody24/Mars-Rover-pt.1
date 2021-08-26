canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["https://c.ndtvimg.com/2021-05/93sfse4_nasa-rover-mars-afp-650_625x300_08_May_21.jpg","https://mars.nasa.gov/system/news_items/list_view_images/8930_1-PIA24624-320x240.jpg", "https://ichef.bbci.co.uk/news/976/cpsprodpb/2808/production/_118684201_mars_perseverance_zl0_0036_0670134061_053eby_n0031392zcam03107_1100luj.jpg","https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia24269-3-16.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
    }
}

         function down()
       {
         if(rover_y <=500)
         {
             rover_y += 10;
             console.log("Whem down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
             uploadBackground();
             uploadrover();

         }
        }

         function left()
         {

         if(rover_x <= 0)
         {
             rover_x -= 10;
             console.log("Whem down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
             uploadBackground();
             uploadrover();
         }
         }

         function right()
{
         if(rover_x <=700)
         {
             rover_x += 10;
             console.log("Whem down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
             uploadBackground();
             uploadrover();
         }

         }

