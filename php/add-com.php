<?php
header("Access-Control-Allow-Origin: *");              // Tous les domaines

$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);

//permet de récupérer le commentaire avec les accents dans la base de données et de les afficher correctement
mysql_query("SET NAMES UTF8"); 


/*mysql_real_escape_string sert à protège une commande SQL de la chaîne unescaped_string, en "échappant" les caractères spéciaux. Le résultat peut être utilisé sans problème avec la fonction mysql_query(). Si des données binaires doivent être insérées, cette fonction doit être utilisée.  */
$pseudo = mysql_real_escape_string($_POST["pseudo"]);
$commentaire = mysql_real_escape_string($_POST["commentaire"]);
$titre_com = mysql_real_escape_string($_POST["titre_com"]);


//Permet de retirer les antislash rajouter pour le code php --> permet de lire le commentaire normalement
$pseudo = stripslashes($pseudo);
$commentaire = stripslashes($commentaire);
$titre_com = stripslashes($titre_com);



$sql = "INSERT INTO retro_commentaire (titre_com, commentaire, pseudo, date) VALUES ('$titre_com','$commentaire','$pseudo',now())";

if (!mysql_query($sql, $con)) {
        die('Error: ' . mysql_error());
} else {
        echo "Commentaire ajoute";
}


mysql_close($con);


?>