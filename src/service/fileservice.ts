import fs from 'fs';

export default class Filehandle{

      reading=async (filename:string):Promise<any[0]>=>{
            const data=await fs.promises.readFile(filename,'utf-8');
            
            const rowarray:string[]=data.split("\n").filter(row=>row.trim()!="");

            const dataarray:string[][]=rowarray.map(d=>{
                //try to get local timezone
               const change:string[] = d.split(",");
               if(change.length>=3 && change[3]){
               const date=new Date(change[3]);
               change[3]=date.toLocaleString();
               }

               return change;
            });

            return dataarray;
    }

    writing=async(filename:string,content:string,flag:object)=>{
            await fs.promises.writeFile(filename,content,flag);
    }
}