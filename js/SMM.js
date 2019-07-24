var SMM_info = [
				{
					number_n: '01',
					name_n: 'Brand Strategy'
				},

				{
					number_n: '02',
					name_n: 'Creative Content'
				},

				{
					number_n: '03',
					name_n: 'Photography and Videography'
				},

				{
					number_n: '04',
					name_n: 'Competitor Analysis'
				},

				{
					number_n: '05',
					name_n: 'Trend Discovery'
				},

				{
					number_n: '06',
					name_n: 'Caption Copyrighting'
				},

				{
					number_n: '07',
					name_n: 'Hashtag Research'
				},

				{
					number_n: '08',
					name_n: 'Influencer Marketing'
				},

				{
					number_n: '09',
					name_n: 'Paid Ad Srategy and Management'
				},

				{
					number_n: '10',
					name_n: 'Community Management'
				},

				{
					number_n: '11',
					name_n: 'Scheduled Posting'
				}
];



var number = document.getElementsByClassName('SMM_number1');
var SMM_name = document.getElementsByClassName('SMM_name1');
var up_arrow = document.getElementsByClassName('fa-chevron-up');
up_arrow[0].addEventListener('click', up_SMM_name);
var down_arrow = document.getElementsByClassName('fa-chevron-down');
down_arrow[0].addEventListener('click', down_SMM_name);
var i = 0;

function up_SMM_name() {
	if(i!= 0) {
		i--;
	}

	else {
		i=10;
	}

	SMM_name[0].classList.add('name_anime');
	SMM_name[0].innerHTML = SMM_info[i].name_n;
	number[0].innerHTML = SMM_info[i].number_n;
	setTimeout(remove_anime, 500);
	function remove_anime() {
		SMM_name[0].classList.remove('name_anime');
	}
};

function down_SMM_name() {
	if(i!= 10) {
		i++;
	}

	else {
		i=0;
	}

	SMM_name[0].classList.add('name_anime');
	number[0].innerHTML = SMM_info[i].number_n;
	SMM_name[0].innerHTML = SMM_info[i].name_n;
	setTimeout(remove_anime, 500);
	function remove_anime() {
		SMM_name[0].classList.remove('name_anime');
	}
};