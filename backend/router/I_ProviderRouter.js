import express from 'express'
import {addProvider} from  '../controller/I_ProviderController.js'

const I_ProviderRouter=express.Router()
I_ProviderRouter.post("/addProvider", addProvider)


export default I_ProviderRouter