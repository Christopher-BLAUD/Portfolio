<?php
if(isset($_POST["message"])){
    
    $message = "
    Nom : " . $_POST["name"] . "
    Téléphone : " . $_POST["phone"] . "
    Email : " . $_POST["email"] . "
    Message : 
    " . $_POST["message"];

        $retour = mail("christopher.blaud.esi@gmail.com", "Prise de contact", $message, "From:contact@christopher-blaud.com\r\nReply-to:" . $_POST["email"]);

    
    if($retour){
        header("location:http://christopher-blaud.com/");
    }
}