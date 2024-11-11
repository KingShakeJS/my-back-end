import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const authorize = ((req, res, next) => {

    const auth = {login: process.env.USERNAME, password: process.env.PASSWORD}


    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')


    if (login && password && login === auth.login && password === auth.password) {

        return next()
    }

    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Authentication required.')
});

app.use('/', authorize);
app.use('/', express.static('build'));

app.listen(80);
console.log(`🚀 Server ready at http://localhost:3000`);