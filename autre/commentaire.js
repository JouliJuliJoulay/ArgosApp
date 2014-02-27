$(function(){
	
	function loadCom() {
		var coms = $('#zone_com_utilisateur');
		
		$.ajax({
			type: 'GET',
			url: 'http://www.argosapps.fr/retro_php_server/coms.php?&jsoncallback=?', //jsoncallback très important sinon requête ne va pas marcher
			dataType: 'JSONp',
			timeout: 8000,
			success: function(data) {
				moment.lang('fr'); //format de langue, ici français
    
				$.each(data, function(i,item){
					//durée entre la date de publication et l'instant présent
					var datemoment = moment(item.datefr,"DD-MM-YYYY HH:mm").fromNow();
					coms.append('<ul class="com_utilisateur"><li class="rose bold nom_user">'+item.pseudo+'</li>');
					coms.append('<li class="bold rose titre">'+item.titre_com+'</li>');
					coms.append('<li class="rose date">'+datemoment);
					coms.append('<li>'+item.commentaire+'</ul>');
				});
			},
			error: function(data) {
				coms.append('<li>There was an error loading the coms');
				alert('Buuuug');
			}
		});
	}
	
	
/*ajout commentaire*/
$('#add-com').submit(function(){
                var postData = $(this).serialize();

                $.ajax({
                        type: 'POST',
                        data: postData,
                        url: 'http://www.argosapps.fr/retro_php_server/add-com.php',
                        success: function(data){
                                //do your thing
                                console.log('Com added!');
                        },
                        error: function(){
                                //do your thing
                                console.log('There was an error');
                        }
                });

                return false;
        });
		


	
	loadCom();
	
	});
	
