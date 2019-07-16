// Pre-loader

var loader = document.getElementById('loader');
console.log(loader);

function remove_loader() {
	loader.style.display = 'none';
}



//hamberger menu
var hamberger = document.getElementsByClassName('hamberger');
var nav_links = document.getElementsByClassName('nav_links');
hamberger[0].addEventListener('click', function() {
	nav_links[0].classList.toggle('open');
});


//service menu
var service_menu = document.getElementsByClassName('service_menu');
var service_links = document.getElementsByClassName('service_links');
service_menu[0].addEventListener('click', function() {
	service_links[0].classList.toggle('open');
});


function toggle_service_menu() {
	service_links[0].classList.toggle('open');
}

// Landing page

var i = 0;
var image1 = document.getElementsByClassName('inside_landingimg1');
var image2 = document.getElementsByClassName('inside_landingimg2');
var image3 = document.getElementsByClassName('inside_landingimg3');
var info = [
			{
			banner: "An Eye for Detail",
			service: "Performance<br>Marketing",
			link: "performance_marketing.html",
			image1: "url('images/business1.png')",
			image2: "url('images/business2.png')",
			image3: "url('images/business3.png')",
			alphabet1: 'P',
			alphabet2: 'M'
			},

			{
			banner: "Keeping an Ear to the Ground",
			service: "Influencer<br>Marketing",
			link: "influencer_marketing.html",
			image1: "url('images/pencil1.png')",
			image2: "url('images/pencil2.png')",
			image3: "url('images/pencil3.png')",
			alphabet1: 'I',
			alphabet2: 'M'
			},

			{
			banner: "A Knack for producing Tasteful Videos",
			service: "Video<br>Production",
			link: "video_production.html",
			image1: "url('images/book1.png')",
			image2: "url('images/book2.png')",
			image3: "url('images/book3.png')",
			alphabet1: 'V',
			alphabet2: 'P'
			}
];

image1[0].classList.add('startanimation1');
image2[0].classList.add('startanimation2');
image3[0].classList.add('startanimation3');
setTimeout(removestartanime1,1000);
setTimeout(removestartanime2,1500);
setTimeout(removestartanime3,1400);



//For beginning transition 
function removestartanime1(){
	image1[0].classList.remove('startanimation1');
}
function removestartanime2(){
	image2[0].classList.remove('startanimation2');
}

function removestartanime3(){
	image3[0].classList.remove('startanimation3');
}


// For each transition
function removeanime1(){
	image1[0].classList.remove('animation1');
}

function removeanime2(){
	image2[0].classList.remove('animation2');
}

function removeanime3(){
	image3[0].classList.remove('animation3');
}



//trigger animation button 
var trigger_section_change = document.getElementsByClassName('transition_button');
trigger_section_change[0].addEventListener('click',button_click);

function button_click() {

	i++;
	var indicator = document.getElementsByClassName('trasition_circle');
	var banner = document.getElementsByClassName('banner');
	var service_name = document.getElementsByClassName('service_name');
	var service_link = document.getElementsByClassName('service_link_url');
	var alpha1 = document.getElementsByClassName('alpha1');
	var alpha2 = document.getElementsByClassName('alpha2');
	var text_section = document.getElementsByClassName('service_info');

	image1[0].classList.add('animation1');
	image2[0].classList.add('animation2');
	image3[0].classList.add('animation3');

	text_section[0].classList.add('text_animation');
	setTimeout(removetextanime,1000);

	function removetextanime() {
	text_section[0].classList.remove('text_animation');
	}

	if(i==1) {
		indicator[0].style.backgroundColor = 'transparent';
		indicator[1].style.backgroundColor = '#048ba8';
		indicator[2].style.backgroundColor = 'transparent';
		alpha1[0].innerHTML = info[1].alphabet1;
		alpha2[0].innerHTML = info[1].alphabet2;

		function picchange11() {
			image1[0].style.backgroundImage= info[1].image1;
		}

		function picchange12() {
			image2[0].style.backgroundImage= info[1].image2;
		}

		function picchange13() {
			image3[0].style.backgroundImage= info[1].image3;
		}	

		function text_animate() {
		banner[0].innerHTML = info[1].banner;
		service_name[0].innerHTML = info[1].service;
		service_link[0].href = info[1].link;
		}

		setTimeout(text_animate,200);
		setTimeout(picchange11,500);
		setTimeout(picchange12,600);
		setTimeout(picchange13,800);
	}

	else if(i==2) {
		indicator[0].style.backgroundColor = 'transparent';
		indicator[1].style.backgroundColor = 'transparent';
		indicator[2].style.backgroundColor = '#048ba8';
		alpha1[0].innerHTML = info[2].alphabet1;
		alpha2[0].innerHTML = info[2].alphabet2;

		function picchange21() {
			image1[0].style.backgroundImage= info[2].image1;
		};

		function picchange22() {
			image2[0].style.backgroundImage= info[2].image2;
		};

		function picchange23() {
			image3[0].style.backgroundImage= info[2].image3;
		};		

		function text_animate() {
		banner[0].innerHTML = info[2].banner;
		service_name[0].innerHTML = info[2].service;
		service_link[0].href = info[2].link;
		}

		setTimeout(text_animate,500);
		setTimeout(picchange21,500);
		setTimeout(picchange22,600);
		setTimeout(picchange23,800);
		i= -1;
	}

	else if(i==0) {
		indicator[0].style.backgroundColor = '#048ba8';
		indicator[1].style.backgroundColor = 'transparent';
		indicator[2].style.backgroundColor = 'transparent';

		image1[0].style.backgroundImage = info[0].image1;
		image2[0].style.backgroundImage = info[0].image2;
		image3[0].style.backgroundImage = info[0].image3;
		alpha1[0].innerHTML = info[0].alphabet1;
		alpha2[0].innerHTML = info[0].alphabet2;

		function picchange01() {
			image1[0].style.backgroundImage= info[0].image1;
		};

		function picchange02() {
			image2[0].style.backgroundImage= info[0].image2;
		};

		function picchange03() {
			image3[0].style.backgroundImage= info[0].image3;
		};	

		function text_animate() {
		banner[0].innerHTML = info[0].banner;
		service_name[0].innerHTML = info[0].service;
		service_link[0].href = info[0].link;
		}

		setTimeout(text_animate,500);
		setTimeout(picchange01,500);
		setTimeout(picchange02,700);
		setTimeout(picchange03,800);
	}

	setTimeout(removeanime1,1000);
	setTimeout(removeanime2,1100);
	setTimeout(removeanime3,1300);

}	


// Text Appear Animation
window.addEventListener("scroll", scrollmove);

function scrollmove() {
	scrollmove1();
	scrollmove2();
	scrollmove3();
	scrollmove4();
	imageappear1();
}


function scrollmove1() {
	var text_appear1 = document.getElementsByClassName("content1");
	var introposition1 = text_appear1[0].getBoundingClientRect().top;
	var screenposition1 = window.innerHeight;

	if(introposition1<screenposition1/1.4)
	{		
		text_appear1[0].classList.add('intro-appear');
	}
}


function scrollmove2() {
	var text_appear2 = document.getElementsByClassName("content2");
	var introposition2 = text_appear2[0].getBoundingClientRect().top;
	var screenposition2 = window.innerHeight;

	if(introposition2<screenposition2/1.4)
	{		
		text_appear2[0].classList.add('intro-appear');
	}
}


function scrollmove3() {
	var text_appear3 = document.getElementsByClassName("content3");
	var introposition3 = text_appear3[0].getBoundingClientRect().top;
	var screenposition3 = window.innerHeight;

	if(introposition3<screenposition3/1.4)
	{		
		text_appear3[0].classList.add('intro-appear');
	}
}

function scrollmove4() {
	var text_appear4 = document.getElementsByClassName("content5");
	var introposition3 = text_appear4[0].getBoundingClientRect().top;
	var screenposition3 = window.innerHeight;

	if(introposition3<screenposition3/1.4)
	{		
		text_appear4[0].classList.add('intro-appear');
	}
}

function imageappear1() {
	var image_div1 = document.getElementsByClassName("contentimage31");
	var introposition4 = image_div1[0].getBoundingClientRect().top;
	var screenposition4 = window.innerHeight;

	if(introposition4<screenposition4/1)
	{		
		image_div1[0].classList.add('div-appear');
	}
}

// Objects move parallax 
function parallax1() {
    var s = document.getElementsByClassName("multiuse_circle");
  var yPos = 0-window.pageYOffset/40;  
  s[0].style.top = yPos + "%"; 
}

function parallax_image1() {
    var about2_image1 = document.getElementsByClassName("content_image22");
  var move1 = 0-window.pageYOffset/60;  
  about2_image1[0].style.top = 70+ move1 + "%"; 
}

function parallax_image2() {
    var about2_image2 = document.getElementsByClassName("contentimage21");
  var move2 = 0-window.pageYOffset/50;  
  about2_image2[0].style.top = 10+move2 + "%"; 
}

function parallax_circle2() {
    var about2_image2 = document.getElementsByClassName("multiuse_circle3");
  var move2 = 0-window.pageYOffset/50;  
  about2_image2[0].style.top = 70+move2 + "%"; 
}

window.addEventListener("scroll", function(){
    parallax1();
    parallax_image1(); 
    parallax_image2();
    parallax_circle2();
});



// section hover animation

var section_hide = document.getElementsByClassName("hide_section");

function move_text1() {
	var text_move = document.getElementsByClassName("section_descr1");
	text_move[0].classList.add('text_move_up');
	section_hide[0].style.height = 'auto'; 
}

function move_text2() {
	var text_move = document.getElementsByClassName("section_descr2");
	text_move[0].classList.add('text_move_up');
	section_hide[1].style.height = 'auto'; 
}

function move_text3() {
	var text_move = document.getElementsByClassName("section_descr3");
	text_move[0].classList.add('text_move_up');
	section_hide[2].style.height = 'auto'; 
}

var section = document.getElementsByClassName('section_box');
section[0].addEventListener('mouseover', move_text1);
section[1].addEventListener("mouseover", move_text2);
section[2].addEventListener("mouseover", move_text3);

function movedown_text1() {
	var text_move = document.getElementsByClassName("section_descr1");
	text_move[0].classList.remove('text_move_up');
	section_hide[0].style.height = '200px'; 
}

function movedown_text2() {
	var text_move = document.getElementsByClassName("section_descr2");
	text_move[0].classList.remove('text_move_up');
	section_hide[1].style.height = '200px'; 
}

function movedown_text3() {
	var text_move = document.getElementsByClassName("section_descr3");
	text_move[0].classList.remove('text_move_up');
	section_hide[2].style.height = '200px'; 
}

section[0].addEventListener('mouseleave', movedown_text1);
section[1].addEventListener("mouseleave", movedown_text2);
section[2].addEventListener("mouseleave", movedown_text3);

// section_box p color change on hover
var section_heading = document.getElementsByClassName('section_heading');
var section_descr = document.getElementsByClassName('section_descr');
var section_box = document.getElementsByClassName('section_box');


