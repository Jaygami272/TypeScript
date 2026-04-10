import path from "path";
import { fileURLToPath } from "url";
import FileHandle from "../service/fileservice.js";
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class Filecontrol {
    fileservise = new FileHandle();
    gethome = (req, res) => {
        res.render('first');
    };
    getedit = (req, res) => {
        res.render('edit', { id: req.query.id, filename: req.query.filename });
    };
    insertdata = async (req, res) => {
        const filepath = path.join(__dirname, `../../uploads/myfile.csv`);
        console.log(req.file?.path);
        return;
        let content = `\n${req.body.firstname},${req.body.lastname},${new Date().toISOString()}`;
        await this.fileservise.writing(filepath, content, { flag: 'a' });
        const data = await this.fileservise.reading(filepath);
        res.render('display', { dataarray: data, filename: req.file?.filename });
    };
    updatedata = async (req, res) => {
        const filepath = path.join(__dirname, `../../uploads/${req.query.filename}`);
        const data = await this.fileservise.reading(filepath);
        let content = "";
        data.forEach(element => {
            if (element[0] == req.query.id) {
                content += `${req.body.firstname},${req.body.lastname},${new Date().toISOString()}\n`;
            }
            else {
                if (element[2]) {
                    content += `${element[0]},${element[1]},${new Date(element[2]).toISOString()}\n`;
                }
            }
        });
        await this.fileservise.writing(filepath, content, { flag: 'w' });
        const data2 = await this.fileservise.reading(filepath);
        res.render('display', { dataarray: data2, filename: req.query.filename });
    };
    deletedata = async (req, res) => {
        const filepath = path.join(__dirname, `../../uploads/myfile.csv`);
        const data = await this.fileservise.reading(filepath);
        let content = "";
        data.forEach(element => {
            if (element[0] != req.query.id) {
                const date = new Date((element[2]) ? element[2] : 'undefined');
                content += `${element[0]},${element[1]},${element[2]},${date.toISOString()}\n`;
            }
            else {
                const userfile = path.join(__dirname, `../../uploads/${element[2]}`);
                fs.unlink(userfile, (err) => {
                    if (err)
                        throw err;
                    console.log("file delete successfully..");
                });
            }
        });
        await this.fileservise.writing(filepath, content, { flag: 'w' });
        //data2 is retrive data from csv after delete
        const data2 = await this.fileservise.reading(filepath);
        res.render('display', { dataarray: data2, filename: req.query.filename });
    };
    fileread = async (req, res) => {
        const filepath = path.join(__dirname, `../../uploads/myfile.csv`);
        const data = await this.fileservise.reading(filepath);
        console.log(data);
    };
}
//# sourceMappingURL=filehandilng.js.map