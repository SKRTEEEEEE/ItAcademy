<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# Blog app
<a href="https://github.com/SKRTEEEEEE">
<div align="center">
  <img  src="https://github.com/SKRTEEEEEE/SKRTEEEEEE/blob/main/resources/img/grid-snake.svg"
       alt="snake" />
</div>
</a>

## Información
Actual ejercicio 5.1, antiguo ejercicio 6 del curso de [NodeJS](https://nodejs.org/en) de [ItAcademy](https://www.barcelonactiva.cat/es/itacademy).
### Tecnologías utilizadas
- [**express**](https://expressjs.com/es/)
- [dotenv](https://www-dotenv-org.webpkgcache.com/doc/-/s/www.dotenv.org/docs/)
- [cors](https://www.npmjs.com/package/cors#usage)
- [**prisma**](https://www.prisma.io/docs)
- [**typescript**](https://www.typescriptlang.org/docs/)

### Requisitos 
#### Requisitos técnicos endpoints
##### Requisitos frontend
- Posibilidad buscar posts -> que contengan ciertas letras como titulo
- Crear usuario
- Read usuario por email
- Read todas las publicaciones
- Read usuario (?por id?)
- Update usuario
##### Requisitos backend
- Crear publicaciones
- Crear like 🖊️
- Read publicaciones por user
- Delete publicaciones por user
- Editar publicaciones por user
- **Solo admin**
  - Read todos los usuarios
  - Banear/Reactivas usuarios
  - Delete publicaciones


## [Recursos](https://github.com/SKRTEEEEEE/markdowns/)
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
### Requerimientos


<details><summary><code><bold>Nivel 3</bold> </code></summary><br/>

- _En este caso se utiliza un script de ts, junto a mongoose, para crear y poblar la base de datos_
##### Proceso elaboración
- _**No necesario una vez clonado!**_
1. Crear tipos bdd. Podemos [ver el archivo de tipos, haciendo click aquí](./src/types.d.ts)
2. Crear esquemas bdd utilizando mongoose. Podemos [ver el archivo de esquemas, haciendo click aquí](./src/schemas.ts)
3. Crear función para obtener conexión a nuestro entorno. Podemos [ver el archivo con la función de conexión, haciendo click aquí](./src/lib.ts)
4. Crear función principal encargada de ejecutar la conexión, crear y poblar la base de datos. Podemos ver [el archivo script de creación y población de la bdd, haciendo click aquí!](./src/initDb-script.ts)
##### Instalación dependencias
- Para instalar las dependencias, usar el siguiente comando:
```bash
npm i
```
##### Ejecutar script
- Ejecutar script para crear y poblar las bases de datos
```
npx ts-node src/initDb-script.ts
```

</details>


<details><summary><code><bold>Extracción bdd y diagramas</bold> </code></summary><br/>

##### Descargar y configurar/instalar [MongoDB Command Line Database Tools](https://www.mongodb.com/try/download/database-tools)
- _Si no tenemos MongoDB Command Line Database Tools_
- Descargar la version actual de MongoDB Command Line Database Tools, encuentra-la en [esta pagina](https://www.mongodb.com/try/download/database-tools).
- Descargar la version para el tipo de arquitectura que utilize nuestro PC(x64/x32). 
- Descomprimir el archivo descargado, en la carpeta deseada, se recomienda en `C:\Program Files\MongoDB`. Se recomienda cambiar el nombre a la carpeta a `Tools`.
##### Exportar colecciones usando `mongoexport`
- Abrir PowerShell con permisos de administrador: Buscar PowerShell, hacer click con el botón derecho y hacer click en la opción `Ejecutar como Administrador`.
- Navegar a la carpeta, utilizando el siguiente comando:
  ```powershell
  cd "C:\Program Files\MongoDB\Tools\bin"
  ```
- Una vez ubicado en la carpeta, proceder a la extracción de nuestro documento de la bdd en formato json, para ello utiliza este comando base:
  ```PowerShell
  .\mongoexport.exe --db <nombre-bdd> --collection <nombre-collection> --out <ruta-carpeta>/<archivo-salida>.json --jsonArray
  ```

  - En este caso, para la colección de usuarios de la base de datos, puedes utilizar este, pero **recuerda** sustituir con el nombre de tu usuario de Pc en el campo `<tu-usuario>`:
    ```PowerShell
    .\mongoexport.exe --db culDAmpolla --collection clientes --out "C:/Users/<tu-usuario>/Documents/culdamp.clientes.json" --jsonArray

    ```

  - Una vez lanzado el comando, debe aparecer este mensaje en la terminal:
    ```PowerShell
    2024-09-21T16:38:13.539+0200    connected to: mongodb://localhost/
    2024-09-21T16:38:13.575+0200    exported 2 records
    ```
- En este punto, en la carpeta de documentos podrás visualizar la colección creada.

</details>

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