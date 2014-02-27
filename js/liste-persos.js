		//Pour afficher TOUTES les infos du lieux DYNAMIQUEMENT
	function loadListePersosAZ() {
		var ListePersosAZ = $('#liste_persoAZ ul');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/liste-persosAZ.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					
					//la valeur de l'id du lien (a) correspond à l'id du type dans la table 
					ListePersosAZ.append('<li><a href="personnage.html" rel="external"><img src="'+item.icone_perso+'" alt=""/>'+item.nom+' '+item.prenom+'</a></li>');
					$('#ul_liste_persoAZ').listview('refresh');						
				});
				

					//on va appeler l'url du fichier php (en get) en fonction de la variable idcatperso --> selon la requête
				
				
				},
			error: function(data) {
				ListePersosAZ.append('<li>There was an error loading the list');
				alert('Buuuug');  
			}
			
			
		});
	}
	loadListePersosAZ(); //à mettre obligatoirement
	
	
	
		function loadListePersosType() {
		var ListePersosType = $('#liste_persotype ul');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/liste-persosType.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					
					//la valeur de l'id du lien (a) correspond à l'id du type dans la table 			
					ListePersosType.append('<li><a href="#" rel="external"><img src="'+item.icone_type_personnage+'" alt=""/>'+item.type+'</a></li>');	
					$('#ul_liste_persotype').listview('refresh');
				});
				

					//on va appeler l'url du fichier php (en get) en fonction de la variable idcatperso --> selon la requête
				
				
				},
			error: function(data) {
				ListePersosAZ.append('<li>There was an error loading the list');
				alert('Buuuug');  
			}
			
			
		});
	}
	loadListePersosType(); //à mettre obligatoirement
	
	
	
	