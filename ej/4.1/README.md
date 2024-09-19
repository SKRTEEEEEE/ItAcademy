<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif">

# To do Arquitectura hexagonal
<a href="https://github.com/SKRTEEEEEE">
<div align="center">
  <img  src="https://github.com/SKRTEEEEEE/SKRTEEEEEE/blob/main/resources/img/grid-snake.svg"
       alt="snake" />
</div>
</a>

Ejercicio 4.1 del curso de [NodeJS](https://nodejs.org/en) de [ItAcademy](https://www.barcelonactiva.cat/es/itacademy).

## [Recursos](https://github.com/SKRTEEEEEE/markdowns/)

### Empezando
#### Instalar dependencias
Para instalar las dependencias necesarias, ejecuta:

```bash
npm i
```

#### Test de las funcionalidades
Para ejecutar el test de las funcionalidades principales (application/usecases), ejecuta:

```bash
npm test
```

#### Compilación

Para compilar los archivos, ejecuta:

```bash
npx tsc
```

#### Iniciar el Servidor de Desarrollo de la Aplicación Node.js

Para iniciar el servidor de desarrollo de la aplicación Node.js y utilizarla, ejecuta el siguiente comando en la terminal:

```bash
node dist/insfrastructure/server/index
##or
npm run start
```

##### Test peticiones http
Para hacer test de las peticiones http, una vez ejecutado el servidor de desarrollo, podrás utilizar el archivo [`requests.rest`](./requests.rest) para ejecutar las peticiones a las urls, se recomienda utilizar en orden descendente.

Para cambiar las credenciales, y comprobar la funcionalidad de la contraseña. Se debe cambiar el valor de `@base64Auth` de `requests.rest`. 

- Para generar un auth basado en base64, puedes utilizar el script [`generate-base64-credentials`](./src/scripts/generate-base64-credentials.js). 
    - En este script, deberás cambiar las valores de las constantes `nombre` y `contraseña`.
    - Luego podrás obtener el valor en base64 de estas constantes ejecutando `node src/scripts/generate-base64-credentials`.
- Para cambiar las contraseñas de la app, deberás cambiar los valores de la comprobación de la contraseña utilizados en el archivo de la [`app`](./src/app.ts).
    ```javascript
      app.use((req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Basic ')) {
            res.setHeader('WWW-Authenticate', 'Basic');
            return res.status(401).json({ message: "Unauthorized" });
        }

        const base64Credentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        //⬇️Cambiar por el username o password deseados⬇️
        if (username !== 'LoveNode' || password !== 'Forever') {
            return res.status(401).json({ message: "Unauthorized" });
        }
        next();
      })
    ```



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