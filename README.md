# MyFiles
* A través de este proyecto un usuario puede gestionar archivos. Para hacerlo, debe previamente registrarse y loguerse. Una vez realizados estos pasos, está habilitado para subir archivos desde su local. El servidor alojará el archivo subido por el usuario en Amazon Web Service. A su vez, el usuario dispone de una ruta de acceso a los links de descarga de los archivos previamente subidos. También se implementó la funcionalidad de permitirle al usuario hacer uso de la opción de cambiar su contraseña.

* El código del proyecto está alojado en la rama "develop". El repositorio debe clonarse y situándose sobre esa rama debe correrse el comando npm install. 

* Los endpoints con los que cuenta el proyecto fueron documentados haciendo uso de la herramienta Swwager. La ruta para acceder a la documentación es: localhost:3030/api-doc/. Para poder consumir los endpoints, quien testee la aplicación deberá previamente crear un archivo .env para definir las variables de entorno utilizadas a lo largo del proyectos. Las cuales se vinculas con: (i) el puerto utilizado en el servidor local -no obligatorio-; (ii) las credenciales necesarias para hacer consultas a la DB; (iii) los token generados para la auntentificación de usuario: logueo y restablecimiento de contraseña; (iv) las credenciales necesarias para subir archivos a un bucket alojado en Amazon Web Service -key id && secret key && region-; (v) las credenciales necesarias para poder enviar correos haciendo uso de SendGrid -api key && sender-.

* Por último, antes de probar los endpoints corresponde crear las tablas en la DB corriendo en la consola el comando sequelize db:migrate.

