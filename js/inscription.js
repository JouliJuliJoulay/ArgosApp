

	$(function(){


// --------------------- INSCRIPTION --------------------------
	
	//
	function loadInscription() {
	
	//En POST pour entrer les donn�es utilisateur dans la table retro_utilisateur
	$('form').submit(function(){
	
	        // je r�cup�re les valeurs
        var inscrip_login = $('#inscrip_login').val();
        var inscrip_mdp = $('#inscrip_mdp').val();
        var confirme_inscrip_mdp = $('#confirme_inscrip_mdp').val();
		var inscrip_mail = $('#inscrip_mail').val();
		var inscrip_photo = $('#inscrip_photo').val();
		alert("Vous allez vous inscrire avec pour login "+inscrip_login+" et avec l'adresse mail "+inscrip_mail);
 
        // je v�rifie une premi�re fois pour ne pas lancer la requ�te HTTP
        // si je sais que mon PHP renverra une erreur
        if(inscrip_login == '' || inscrip_mdp == '' || confirme_inscrip_mdp == '' || inscrip_mail == '' ) {
            alert('Veillez � ce que tous les champs soient remplis !');
			inscrip_login.remove();
			inscrip_mdp.remove();
			confirme_inscrip_mdp.remove();
			inscrip_mail.remove();
			inscrip_photo.remove();
        } else {
	
	
                var postDatauser = $(this).serialize();
	//en GET --> plus d'erreurs
                $.ajax({
                        type: 'GET',
                        data: postDatauser,
                        url: 'http://www.argosapps.fr/retro_php_server/addutilisateur.php',
                        success: function(data){
                                //do your thing
                                console.log('Inscription r�ussie !');
								alert('Vous �tes d�sormais inscris ! Bienvenue dans R�trospective !');
						

                        },
                        error: function(){
                                //do your thing
                                console.log('Il y a eu une erreur durant votre inscription');
                        }
                });

                return false;
			}
        });
		
		
		}
	
		loadInscription();
		
			
	});
