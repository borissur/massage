$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,
		sectionScolor: ['#0000A0','#0000A0','#0000A0','#0000A0'],
		anchors:['firstPage','secondPage','3rdPage','4Page'],
		//navigationTooltips: ['Главная','Виды массажа','Прайс','Сертификаты'],
		menu:'nav',
		loopTop: true,
		loopBottom:true,
		css3:false,
		slidesNavigation: true,
		// scrollOverflow: true,
		afterLoad: function(anchorLink, index){

			if (index == 1) {
				$('#section0 h1').animate({'margin-left':'0%',},1000);
			}

			if (anchorLink == 'firstPage') {
				$('#section0 p').animate({'margin-top':'0%',},2000);
			}


			if (index == 2) {
				$('#section1 h1').animate({'margin-left':'0%',},1000);
			}

			if (anchorLink == 'secondPage') {
				$('#section1 p').animate({'margin-left':'0%',},2000);
			}

			if (index == 3) {
				$('table').animate({'margin-top':'0%',},1000);
			}

			if (anchorLink == '3rdPage') {
				$('#section2 h1').fadeIn(1000);
			}

			if (anchorLink == '4Page') {
				$('#section3 .fotorama').fadeIn(1000);
			}
		}
	});
});