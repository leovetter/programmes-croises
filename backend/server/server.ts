import * as express from 'express';
import { Application } from "express";
import { partis } from './partis';
import { programmes } from './programmes';
import { themes } from './themes';

const app: Application = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route('/programmes')
    .get(programmes);

app.route('/themes')
    .get(themes);

app.route('/partis')
    .get(partis);

const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at https://localhost:" + (httpServer.address() as any).port);
});
