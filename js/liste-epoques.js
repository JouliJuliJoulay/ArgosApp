		//Pour afficher TOUTES les infos du lieux DYNAMIQUEMENT
	function loadListeEpoque() {
		var ListeEpoque = $('.contenu_liste ul');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/liste-epoques.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					
					//la valeur de l'id du lien (a) correspond à l'id du type dans la table 
					ListeEpoque.append('<li><a href="lieux.html" rel="external"><img src="" alt=""/>'+item.epoque+'<p>'+item.debut_epoque+' '+item.fin_epoque+'</p></a></li>');	
					$('#ul_liste_epoque').listview('refresh');
				});
				

					//on va appeler l'url du fichier php (en get) en fonction de la variable idcatperso --> selon la requête
				
				
				},
			error: function(data) {
				ListeEpoque.append('<li>There was an error loading the list');
				alert('Buuuug');
			}
			
			
		});
	}
	
	loadListeEpoque(); //à mettre obligatoirement
	
