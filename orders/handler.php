<?php

$msg = "";

//wordwrap() if lines are longer than x characters
$msg = wordwrap($msg,70);

// send email
mail("vel.boutique.clothing@gmail.com","New Order",$msg);
?>