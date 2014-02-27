		//Pour afficher TOUTES les infos du lieux DYNAMIQUEMENT
	function loadListeLieuxAZ() {
		var ListeLieuxAZ = $('#liste_lieuxAZ ul');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/liste-lieuxAZ.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					
					//la valeur de l'id du lien (a) correspond à l'id du type dans la table 
					ListeLieuxAZ.append('<li><a href="lieux.html" rel="external"><img src="'+item.icone_lieu+'" alt=""/>'+item.nom_lieu+'</a></li>');	
					$('#ul_liste_lieuxAZ').listview('refresh');					
				});
				

					//on va appeler l'url du fichier php (en get) en fonction de la variable idcatperso --> selon la requête
				
				
				},
			error: function(data) {
				ListeLieuxAZ.append('<li>There was an error loading the list');
				alert('Buuuug');
			}
			
			
		});
	}
	
	loadListeLieuxAZ(); //à mettre obligatoirement
	
	
	
	
	
	
	
		function loadListeLieuxType() {
		var ListeLieuxType = $('#liste_lieuxtype ul');
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/liste-lieuxType.php?&jsoncallback=?',
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				$.each(data, function(i,item){
					
					//la valeur de l'id du lien (a) correspond à l'id du type dans la table 				
					ListeLieuxType.append('<li><a href="#" rel="external"><img src="'+item.icone_type_lieu+'" alt=""/>'+item.type_lieu+'</a></li>');	
					$('#ul_liste_lieuxtype').listview('refresh');	
				});
				

					//on va appeler l'url du fichier php (en get) en fonction de la variable idcatperso --> selon la requête
				
				
				},
			error: function(data) {
				ListeLieuxType.append('<li>There was an error loading the list');
				alert('Buuuug');
			}
			
			
		});
	}
	
	loadListeLieuxType(); //à mettre obligatoirement
	
	