//récupération d'une proposition de lieu par email 
//apres vérification des champs remplis correctement
	$('form').submit(function(){
		
		//récupération des valeurs
		        var nomLieu = $('#form_name').val();
		        var typeLieu = $('#form_lieu').val();
		        var nrueLieu = $('#form_rue').val();
		        var arrLieu = $('#form_arr').val();
		        var telLieu = $('#form_tel').val();
		        var siteLieu = $('#form_url').val();
		        var descripLieu = $('#form_description').val();
		        var srcLieu = $('#form_source').val();
		        var lieuFreqBy = $('#form_frequente_par').val();
		        var noteLieu = $('#form_note').val();
		        var photoLieu = $('#form_photo').val();
		        var comLieu = $('#form_commentaire').val();

				//vérification des champs requis, pour ne pas lancer la requête HTTP	
				//a ajouter  photoLieu == '' 
				if(nomLieu == '' || typeLieu == '' ||nrueLieu == '' || arrLieu == '' ||descripLieu == '' || srcLieu == '' ||lieuFreqBy == '' || noteLieu == '' || comLieu =='') {
				alert('Veillez remplir tous les champs requis!');
				document.location.href="ajout_lieu.html";
					// nomLieu.remove();
					// typeLieu.remove();
					// nrueLieu.remove();
					// arrLieu.remove();
					// descripLieu.remove();
					// srcLieu.remove();
					// lieuFreqBy.remove();
					// noteLieu.remove();
					// comLieu.remove();
					
				} else {
				  
				   var postDatalieu = $(this).serialize();
                $.ajax({
                        type: 'POST',
                        data: postDatalieu,
                        url: 'http://www.argosapps.fr/retro_php_server/add_lieu.php',
                        success: function(data){
                                //do your thing
                                console.log('Lieu ajouté!');
								alert('Votre lieu a bien été enregistrée ! Nous allons cherché plus d\'information sur '+nomLieu+' Merci d\'avoir partagé'); 
								// j'affiche cette réponse

                        },
                        error: function(){
                                //do your thing
                                console.log('Erreur, il est passé en error');
                        }
                });

                //return false;
				}
        });