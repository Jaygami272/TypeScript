import fs from 'fs';
export default class Filehandle {
    reading = async (filename) => {
        const data = await fs.promises.readFile(filename, 'utf-8');
        const rowarray = data.split("\n").filter(row => row.trim() != "");
        const dataarray = rowarray.map(d => {
            //try to get local timezone
            const change = d.split(",");
            if (change.length >= 3 && change[3]) {
                const date = new Date(change[3]);
                change[3] = date.toLocaleString();
            }
            return change;
        });
        return dataarray;
    };
    writing = async (filename, content, flag) => {
        await fs.promises.writeFile(filename, content, flag);
    };
}
//# sourceMappingURL=fileservice.js.map