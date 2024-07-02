import http from 'http';
import fs from 'fs';
import path from 'path';





const server = http.createServer((req, res) => {
    // Ruta a la carpeta de recursos estáticos (una nivel por encima de dist, que es donde esta server)
    const publicPath = path.resolve(__dirname, '..', 'public');

    // Función para servir archivos estáticos, no es necesario content type ya que son archivos estáticos los cuales el navegador puede entender... ej, linea+19
    const serveStaticFile = (filePath: string) => {
        fs.createReadStream(filePath).pipe(res);
    };

    // Rutas para servir archivos estáticos y manejar las API
    // - Caso en el que el usuario o el servidor va a buscar el archivo index
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(publicPath, 'index.html');
        // serveStaticFile(filePath, 'text/html');
        serveStaticFile(filePath);
    }
    // - Caso en el que el servidor va a buscar los archivos estáticos, restantes.
    else if (req.url?.startsWith('/public/') || req.url?.startsWith('/dist/')) {
        const filePath = path.join(__dirname, '..', req.url);
        serveStaticFile(filePath);
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
