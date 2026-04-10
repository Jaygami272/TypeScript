import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
import mainrouter from './router/mainrouter.js';
app.use('/', mainrouter);
app.set('view engine', 'ejs');
app.listen(process.env.PORT, (err) => {
    if (err)
        throw err;
    console.log("Server is running..");
});
//# sourceMappingURL=app.js.map