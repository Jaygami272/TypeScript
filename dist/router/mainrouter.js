import { Router } from "express";
import { Filecontrol } from "../controller/filehandilng.js";
import { upload } from "../middleware/multermiddleware.js";
const router = Router();
const filecontrol = new Filecontrol();
router.get('/', filecontrol.gethome);
router.post('/upload', upload.single('myfile'), filecontrol.insertdata);
router.get('/delete', filecontrol.deletedata);
router.get('/edit', filecontrol.getedit);
router.post('/update', filecontrol.updatedata);
export default router;
//# sourceMappingURL=mainrouter.js.map