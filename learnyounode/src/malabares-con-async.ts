import http from "http";

const url1: string = process.argv[2];
const url2: string = process.argv[3];
const url3: string = process.argv[4];

// Realiza la primera solicitud HTTP
http.get(url1, res => {
    res.setEncoding("utf8");
    let data1: string = "";

    res.on("data", chunk => {
        data1 += chunk;
    });

    res.on("end", () => {
        console.log(data1);

        // Realiza la segunda solicitud HTTP
        http.get(url2, res => {
            res.setEncoding("utf8");
            let data2: string = "";

            res.on("data", chunk => {
                data2 += chunk;
            });

            res.on("end", () => {
                console.log(data2);

                // Realiza la tercera solicitud HTTP
                http.get(url3, res => {
                    res.setEncoding("utf8");
                    let data3: string = "";

                    res.on("data", chunk => {
                        data3 += chunk;
                    });

                    res.on("end", () => {
                        console.log(data3);
                    });

                    res.on("error", (err) => {
                        console.error(`Error fetching URL 3: ${err.message}`);
                    });
                }).on("error", (err) => {
                    console.error(`Error fetching URL 3: ${err.message}`);
                });
            });

            res.on("error", (err) => {
                console.error(`Error fetching URL 2: ${err.message}`);
            });
        }).on("error", (err) => {
            console.error(`Error fetching URL 2: ${err.message}`);
        });
    });

    res.on("error", (err) => {
        console.error(`Error fetching URL 1: ${err.message}`);
    });
}).on("error", (err) => {
    console.error(`Error fetching URL 1: ${err.message}`);
});
