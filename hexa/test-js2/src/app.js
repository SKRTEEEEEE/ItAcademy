


const express = require('express');

const createApp = () => {
  const app = express();

  app.get("/", (req, res) => {
    res.json("Hello World");
  });

  return app;
}

module.exports = createApp;