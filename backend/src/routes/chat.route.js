import express from "express"
import { getStreamToken } from "../controllers/chat.controllers.js"
import { productRoute } from "../middleware/auth.middleware.js"

const router =express.Router()

router.get("/token",productRoute,getStreamToken)

export default router