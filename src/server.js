/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

import App from './containers/appContainer/app-container';

const express = require('express');
const fs = require('fs');
const mcache = require('memory-cache');
const compression = require('compression');

const ROOT_DIR = 'dist/public';
const port = process.env.PORT || 8080;
const app = express();
const cacheDuration = 1000 * 60 * 60 * 24 * 14; // 14d

const cache = (duration) => {
  return (req, res, next) => {
    const key = `__express__${req.originalUrl}` || req.url;
    const cachedBody = mcache.get(key);

    if (cachedBody) {
      res.send(cachedBody);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration);
        res.sendResponse(body);
      };
      next();
    }
  };
};

app.use(compression());

app.use(express.static(ROOT_DIR, {
  index: false,
  maxAge: '14d',
}));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(req.headers);
    if (req.header('x-forwarded-proto') !== 'https') {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
  }

  return next();
});

app.get('*', cache(cacheDuration), (req, res) => {
  const context = {};
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>,
    ),
  );
  const styles = sheet.getStyleTags();

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
        data
          .replace(
            '<div id="root"/>',
            `<div id="root">${html}</div>`,
          )
          .replace(
            '</head>',
            `${styles}</head>`,
          ),
      );
    });
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
