<?php
$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);
mysql_query("SET NAMES UTF8"); //résoud le pb d'encodage: affiche les données avec accents retourner par le serveur 

$requete="SELECT nom_lieu, icone_lieu FROM retro_lieu ORDER BY nom_lieu";
$resultlistelieux = mysql_query($requete) or die ("Query error: " . mysql_error());
$lieuxaz = array();

while($row = mysql_fetch_assoc($resultlistelieux)) {
	$lieuxaz[] = $row;
}

echo $_GET['jsoncallback'] . '(' . json_encode($lieuxaz) . ');';

//////////////////////////////////////////

$requetetype="SELECT type_lieu, icone_type_lieu FROM retro_type_lieu ORDER BY type_lieu";
$resultlistelieuxtype = mysql_query($requetetype) or die ("Query error: " . mysql_error());
$lieuxtype = array();

while($row = mysql_fetch_assoc($resultlistelieuxtype)) {
	$lieuxtype[] = $row;
}

	
echo $_GET['jsoncallback'] . '(' . json_encode($lieuxtype) . ');';

mysql_close($con);
?>

