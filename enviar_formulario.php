<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["fname"];
    $apellido = $_POST["lname"];
    $correo = $_POST["email"];
    $telefono = $_POST["phone"];
    $mensaje = $_POST["message"];

    // Cambia la dirección de correo a la que quieres que se envíen los datos.
    $destinatario = "damiannl94@gmail.com";

    $asunto = "Nuevo formulario de contacto";

    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Apellido: $apellido\n";
    $cuerpo .= "Correo Electrónico: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Mensaje:\n$mensage";

    // Puedes cambiar o personalizar los encabezados según tus necesidades.
    $encabezados = "From: $correo\r\n";
    $encabezados .= "Reply-To: $correo\r\n";

    // Enviar el correo.
    mail($destinatario, $asunto, $cuerpo, $encabezados);

    // Redirecciona a una página de agradecimiento o donde desees.
    header("Location: contacto.html");
} else {
    // Si alguien intenta acceder directamente a este script, redirige a una página de error o donde desees.
    header("Location: contacto.html");
}
?>
