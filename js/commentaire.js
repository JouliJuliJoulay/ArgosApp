$(function(){
	
	function loadComs() {
		var coms = $('#zone_com_utilisateur');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/coms.php?&jsoncallback=?', //jsoncallback très important sinon requête ne va pas marcher
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				//moment.lang('fr'); //format de langue, ici français
    
				$.each(data, function(i,item){
					//durée entre la date de publication et l'instant présent
					//var datemoment = moment(item.datefr,"DD-MM-YYYY HH:mm").fromNow();
					coms.append('<ul class="com_utilisateur"><li class="rose bold nom_user">'+item.pseudo+'</li>');
					coms.append('<li class="bold rose titre">'+item.titre_com+'</li>');
					//coms.append('<li class="rose date">'+datemoment+'</li>');
					coms.append('<li class="rose date">'+item.datefr+'</li>');
					coms.append('<li>'+item.commentaire+'</li></ul>')
				});
			},
			error: function(data) {
				coms.append('<li>There was an error loading the coms');
				alert('Buuuug');
			}
		});
	}
	
	loadComs();
	
	
	
	
	
	$('#zone_commentaire form').submit(function(){
	
		// je récupère les valeurs
        var pseudo = $('#pseudo').val();
        var titre_com = $('#titre_com').val();
        var comment_lieu = $('#commentaire').val();
		//alert(pseudo+", vous allez poster : "+"Titre : "+titre_com+", Commentaire : "+comment_lieu);
 
        //vérification des champs requis, pour ne pas lancer la requête HTTP	
        if(pseudo == '' || titre_com == '' || comment_lieu == '' ) {
            alert('Veillez à ce que tous les champs soient remplis!');
			//permet de rafraichir la page
			document.location.href="lieux.html";
			// pseudo.remove();
			// titre_com.remove();
			// comment_lieu.remove();
        } else {
	
                var postDatacom = $(this).serialize();

                $.ajax({
                        type: 'POST',
                        data: postDatacom,
                        url: 'http://www.argosapps.fr/retro_php_server/add-com.php',
                        success: function(data){
                                //do your thing
                                console.log('Commentaire ajoute!');
								alert(pseudo+", vous allez poster : "+"Titre : "+titre_com+", Commentaire : "+comment_lieu);
								alert('Votre commentaire a bien été enregistré !'); // j'affiche cette réponse
								//pour recharger la page avec la note (à changer pour une meilleure méthode)
								document.location.href="lieux.html";

                        },
                        error: function(){
                                //do your thing
                                console.log('Erreur dans lenvoie du commentaire');
								

                        }
                });

                return false;
			}
        });
	
});	