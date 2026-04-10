import type { Request, Response } from "express";
import FileHandle from "../service/fileservice.js";
export declare class Filecontrol {
    fileservise: FileHandle;
    gethome: (req: Request, res: Response) => void;
    getedit: (req: Request, res: Response) => void;
    insertdata: (req: Request, res: Response) => Promise<void>;
    updatedata: (req: Request, res: Response) => Promise<void>;
    deletedata: (req: Request, res: Response) => Promise<void>;
    fileread: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=filehandilng.d.ts.map