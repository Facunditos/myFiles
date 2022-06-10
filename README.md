# MyFiles
* A través de este proyecto un usuario puede gestionar archivos. Para hacerlo, debe previamente registrarse y loguerse. Una vez realizados estos pasos, está habilitado para subir archivos desde su local. El servidor alojará el archivo subido por el usuario en Amazon Web Service. A su vez, el usuario dispone de una ruta de acceso a los links de descarga de los archivos previamente subidos. También se implementó la funcionalidad de permitirle al usuario hacer uso de la opción de cambiar su contraseña. 

* Los endpoints con los que cuenta el proyecto fueron documentados haciendo uso de la herramienta Swwager. Para poder consumir estos endpoints, quien testee la aplicación deberá previamente crear un archivo .env para definir las variables de entornos utilizados a lo largo del proyectos. Las cuales se vinculas con: (i) el puerto utilizado en el servidor local -no obligatorio-; (ii) las credenciales necesarias para hacer consultas a la DB; (iii) los token generados para la auntentificación de ususario: logueo y restablecimiento de contraseña; (iv) las credenciales necesarias para poder subir archivos a un bucket alojado en Amazon Web Service -key id && secret key && region-; las credenciales necesarias para poder enviar correos haciendo uso de SendGrid -api key && sender-.

## Muchas gracias por considerme en el proceso de selección de personal!