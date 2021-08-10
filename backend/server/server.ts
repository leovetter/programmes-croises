import * as express from 'express';
import { Application } from "express";
import { programmes } from './programmes';

const app: Application = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route('/programmes')
    .get(programmes);

const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at https://localhost:" + (httpServer.address() as any).port);
});
