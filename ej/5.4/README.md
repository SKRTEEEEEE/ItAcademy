<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# MongoDb query's
<a href="https://github.com/SKRTEEEEEE">
<div align="center">
  <img  src="https://github.com/SKRTEEEEEE/SKRTEEEEEE/blob/main/resources/img/grid-snake.svg"
       alt="snake" />
</div>
</a>

Actual ejercicio 2.4, antiguo ejercicio 5.4 del curso de [NodeJS](https://nodejs.org/en) de [ItAcademy](https://www.barcelonactiva.cat/es/itacademy).

## [Recursos](https://github.com/SKRTEEEEEE/markdowns/)

### Empezando
**_Para windows_**
#### Instalar mongodb en la maquina
##### Descargar [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- Descargamos la version actual de la comunidad de MongoDb Server, podemos encontrar-la en [esta pagina](https://www.mongodb.com/try/download/community).
- Configuramos la version para el tipo de arquitectura que utilize nuestro PC(x64/x32) y hacemos click a descargar. 
##### Instalar MongoDB Community Server
- Una vez descargada, instalaremos con la configuración por defecto(todo aceptar/continuar)
##### Conectar red local
- Una vez instalado, podemos abrir MongoDBCompass
- Una vez abierto, podemos hacer click en la opción de nuevo conexión. En las opciones, dejaremos el URI por defecto, `mongodb://localhost:27017`. En nombre podremos `rest-test1` y en color pondremos el que deseemos, se recomienda verde.
#### Volcar base de datos desde un json
##### Descargar [MongoDB Command Line Database Tools](https://www.mongodb.com/try/download/database-tools)
- Descargamos la version actual de MongoDB Command Line Database Tools, podemos encontrar-la en [esta pagina](https://www.mongodb.com/try/download/database-tools).
- Descargaremos la version para el tipo de arquitectura que utilize nuestro PC(x64/x32). 
##### Configurar/instalar MongoDB Command Line Database Tools
- Descomprimiremos el archivo descargado, en la carpeta deseada, se recomienda en `C:\Program Files\MongoDB`. Se recomienda cambiar el nombre a la carpeta a `Tools`.
##### Volcado de datos usando `mongoimport`
- Copiamos [el archivo de la collección](./restaurants.json) en la carpeta de Documents de nuestro usuario.
- Abrimos PowerShell con permisos de administrador, para ello en Inicio, buscamos PowerShell, hacemos click con el botón derecho y hacemos click en la opción `Ejecutar como Administrador`.
- Navegamos a la carpeta, utilizando el siguiente comando:
  ```powershell
  cd "C:\Program Files\MongoDB\Tools\bin"
  ```
- Una vez ubicados en la carpeta, procederemos al volcado de la base de datos, utilizando el siguiente comando base:
  ```PowerShell
  .\mongoimport.exe -d <nombre-bdd> --collection <nombre-collection> --file "<ubicación-archivo>" --jsonArray
  ```
  - En nuestro caso utilizaremos este, pero **recuerda** sustituir con el nombre de tu usuario de Pc en el campo `<tu-usuario>`:
  ```PowerShell
  .\mongoimport.exe -d rest-test1 --collection rest-test1 --file "C:\Users\<tu-usuario>\Documentos\restaurants.json" --jsonArray
  ```
  - Una vez lanzado el comando, nos debería aparecer este mensaje en la terminal:
  ```PowerShell
  2024-09-19T22:11:21.588+0200    connected to: mongodb://localhost/
  2024-09-19T22:11:21.783+0200    3772 document(s) imported successfully. 0 document(s) failed to import.
  ```
- En este punto, en tu MongoDBCompass podrás visualizar la base de datos con su colección creada.
#### Consultar db con query's

## Contacto

### Agradecimientos
#### [🏫 Institución: ItAcademy](https://www.barcelonactiva.cat/es/itacademy)
#### [🧑‍🏫 Docente: Francisco](https://frivero.com.ar/)

### Información de Contacto
#### [Web del desarrollador](profile-skrt.vercel.app)
#### [Envíame un mensaje](mailto:adanreh.m@gmail.com)

### Contribuciones y Problemas

Si encuentras problemas o deseas contribuir al proyecto, por favor, crea un issue en el repositorio.

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">