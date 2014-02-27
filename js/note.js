$(function(){

//La note du lieu (moyenne)
		function loadMarkavg() {
		var markavg = $('#note_utilisateur form ul');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/avgnote.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					markavg.append('<li>La note du lieu : '+item.avgnote+'</li>');
				});
				
				
				},
			error: function(data) {
				markavg.append('<li>There was an error loading the bugs');
				alert('Buuuug');
			}
			
			
		});
	}
	loadMarkavg(); //à mettre obligatoirement	

	
	//afficher la note émise par l'utilisateur
	function loadMark() {
		var mark = $('#note_utilisateur form ul');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/marks.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
			
				$.each(data, function(i,item){
					mark.append('<li>'+'Ma note :'+item.note+'</li>');
				});
							
				
				},
			error: function(data) {
				bugs.append('<li>There was an error loading the mark');
				alert('Buuuug');
			}
			
		});
	}
	loadMark();
	
	//Ajouter ma note
	//En POST pour entrer la note dans la base :
	$('#note_utilisateur form').submit(function(){
		        var displaynote = $('#note').val();
				

				if(displaynote == '') {
				displaynote.remove();
				  } else {
				  
				   var postDatamark = $(this).serialize();
                $.ajax({
                        type: 'POST',
                        data: postDatamark,
                        url: 'http://www.argosapps.fr/retro_php_server/addmark.php',
                        success: function(data){
                                //do your thing
                                console.log('Mark added!');
								alert("Vous avez attribué la note de "+displaynote+". Merci d'avoir partagé votre avis !");
								// j'affiche cette réponse
								
								//pour recharger la page avec la note (à changer pour une meilleure méthode)
								document.location.href="lieux.html";

                        },
                        error: function(){
                                //do your thing
                                console.log('There was an error');
                        }
                });

                return false;
				}
        });
	
	
		
	});	