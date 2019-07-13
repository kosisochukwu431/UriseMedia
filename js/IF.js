window.addEventListener("scroll", IF_name_appear);

function IF_name_appear() {
	var IF_name = document.getElementsByClassName('name_div');

	for(var i=0;i<11;i++) {
		var introposition = IF_name[i].getBoundingClientRect().top;
		var screenposition = window.innerHeight;

		if(introposition<screenposition/1.2)
		{		
			IF_name[i].classList.add('move_up_appear');
		}			
	}
}

window.addEventListener("scroll", IF_alpha_parallax);

function IF_alpha_parallax() {
	var s = document.getElementsByClassName('name_first_alpha');
  	var yPos = 0-window.pageYOffset/400;  

  	for(var i=0;i<11;i++) {
  	s[i].style.top = 3+ yPos + "%";
  	} 
}