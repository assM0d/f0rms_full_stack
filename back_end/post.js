const express = require('express'),
  app = express(),
  request = require('request')


request.post(
    {
      url: "http://localhost:3000",
      form: {
        secondName: "sladlkja",
      },
    },
    (err, response, body) => {
      if (err) return res.status(500).send({ message: err })
      return res.send(body);
    }
  );
  