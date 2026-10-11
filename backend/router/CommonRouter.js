import express from 'express';
import { addContact, addFeedback ,viewAllNotice} from '../controller/CommonController.js';

const commonRouter = express.Router();

commonRouter.post('/addContact', addContact);
commonRouter.post('/addFeedback', addFeedback);
commonRouter.get("/viewAllNotice",viewAllNotice)

export default commonRouter;