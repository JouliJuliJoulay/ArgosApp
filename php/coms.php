<?php
$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);
//attention la page doit etre encodee en UTF8 WITHOUT BOM : tres important pour que moment.js comprenne et puisse afficher 'il y a 2 jours...' sinon il affichera tout le temps 'il y a quelques secondes" !!


//résoud le pb d'encodage: affiche les données avec accents retourner par le serveur
mysql_query("SET NAMES UTF8"); 

$sql = "SELECT pseudo, titre_com, commentaire, DATE_FORMAT(date, '%d/%m/%Y à %H:%i:%S') AS datefr FROM retro_commentaire order by id";

// $sql = "SELECT pseudo, titre_com, commentaire, DATE_FORMAT( DATE,  '%d/%m/%Y à %H:%i:%S' ) AS datefr FROM retro_commentaire ORDER BY id LIMIT 10";
$result = mysql_query($sql) or die ("Query error: " . mysql_error());

$coms = array();

while($row = mysql_fetch_assoc($result)) {
	$coms[] = $row;
}

echo $_GET['jsoncallback'] . '(' . json_encode($coms) . ');';






mysql_close($con);
?>