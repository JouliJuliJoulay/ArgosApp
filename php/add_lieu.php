<?php
header("Access-Control-Allow-Origin: *");              // Tous les domaines
$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);


$ajout_nomLieu = mysql_real_escape_string($_POST["form_name"]);
$ajout_typeLieu = mysql_real_escape_string($_POST["form_lieu"]);
$ajout_nrueLieu = mysql_real_escape_string($_POST["form_rue"]);
$ajout_arrLieu = mysql_real_escape_string($_POST["form_arr"]);
$ajout_telLieu = mysql_real_escape_string($_POST["form_tel"]);
$ajout_siteLieu = mysql_real_escape_string($_POST["form_url"]);
$ajout_descripLieu = mysql_real_escape_string($_POST["form_description"]);
$ajout_srcLieu = mysql_real_escape_string($_POST["form_source"]);
$ajout_lieuFreqBy = mysql_real_escape_string($_POST["form_frequente_par"]);
$ajout_noteLieu = mysql_real_escape_string($_POST["form_note"]);
$ajout_photoLieu = mysql_real_escape_string($_POST["form_photo"]);
$ajout_comLieu = mysql_real_escape_string($_POST["form_commentaire"]);

mysql_query("SET NAMES UTF8"); //résoud le pb d'encodage: affiche les données avec accents retourner par le serveur 
$sqlajoutlieu = "INSERT INTO retro_ajout_lieu (form_name, form_typelieu, form_rue, form_arr, form_tel, form_url, form_description, form_source, form_frequente_par, form_note, form_photo, form_commentaire) VALUES ('$ajout_nomLieu', '$ajout_typeLieu', '$ajout_nrueLieu','$ajout_arrLieu','$ajout_telLieu','$ajout_siteLieu','$ajout_descripLieu','$ajout_srcLieu','$ajout_lieuFreqBy','$ajout_noteLieu', '$ajout_photoLieu', '$ajout_comLieu')";



if (!mysql_query($sqlajoutlieu, $con)) {
        // die('Error: ' . mysql_error());
} else {
        // echo "Lieu ajoutée";
}

mysql_close($con);
?>


<?php 
//la personne qui va reçevoir le mail du formulaire de contact
	$destinataire = 'julie.lam.cxl@gmail.com' ;

//objet du mail que l'on va reçevoir
	$sujet = 'Proposition de lieu Rétrospective';

//le corps du message du mail que l'on va reçevoir
	$msg =" 
	Nom du lieu: $ajout_nomLieu \r\n 
	Type de lieu : $ajout_typeLieu \r\n 
	Adresse : $ajout_nrueLieu \r\n 
	Arrondissement : $ajout_arrLieu \r\n
	Téléphone : $ajout_telLieu \r\n
	URL : $ajout_siteLieu \r\n
	Description : $ajout_descripLieu \r\n
	Source de l'information : $ajout_srcLieu \r\n
	Lieu fréquenté par : $ajout_lieuFreqBy \r\n
	Note attribué par l'utilisateur : $ajout_noteLieu \r\n
	Photo : $ajout_photoLieu \r\n
	Commentaire : $ajout_comLieu \r\n";

	//Reply-To permet de répondre à la personne qui a envoyé le msg directement en cliquant sur 'Répondre'
		//$entete = 'From:'.$nom.' <'.$email.'>' . "\r\n" . 
		//$entete.= 'Reply-To:'.$email. "\r\n" ;
		
		//Sa serait bien de mettre le nom de l'utilisateur dans FROM
		//Sa serait bien de mettre l'email de l'utilisateur dans EMAIL
		//Sa serait bien de pouvoir envoyer un mail à l'utilisateur pour le remercier ?
		$entete = 'From: Retrospective'.' <"Retrospective">' . "\r\n" . 
		//$entete.= 'Reply-To:'.$email. "\r\n" ;

	//Permet de rectifier les problèmes des accents dans les mails
		$entete.= "MIME-version: 1.0\n"; 
		$entete.= 'Content-type: text/plain; charset= UTF-8\n'; 
		$entete .= '\tformat=flowed;\r\n'; 
		$entete .= '\tcharset="utf-8";\r\n'; 
		$entete .= '\treply-type=original\r\n'; 
		$entete .= 'Content-Transfer-Encoding: 8bit\r\n';

	//Permet de retirer les antislash rajouter pour le code php --> permet de lire le mail normalement
		$msg = stripslashes($msg);

//test de l'envoi du mail
if(mail($destinataire, $sujet, $msg, $entete)){
	$msg_envoye = "Votre message a bien été envoyé ;) !";
}else{
	$msg_non_envoye = "Votre message n'a pas été envoyé :( !";
}

					?>