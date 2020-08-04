/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './containers/appContainer/app-container';

const express = require('express');
const fs = require('fs');

const ROOT_DIR = 'dist/public';
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(ROOT_DIR, {
  index: false,
  maxAge: '14d',
}));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
  }

  return next();
});

app.get('*', (req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    fs.readFile(`${ROOT_DIR}/index.html`, 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('An error occurred');
      }
      return res.send(
        data.replace(
          '<div id="root"/>',
          `<div id="root">${html}</div>`,
        ),
      );
    });
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
