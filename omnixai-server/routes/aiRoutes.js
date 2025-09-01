import express from "express";
import { auth } from "../middleware/auth.js";
import { writeArticle, generateBlogTitles, generateImage, removeBackground, removeObject, reviewResume } from "../controllers/aiController.js";
import { upload } from "../config/multer.js";

const aiRouter = express.Router();

aiRouter.post('/generate-article', auth, writeArticle)
aiRouter.post('/generate-blog-title', auth, generateBlogTitles)
aiRouter.post('/generate-image', auth, generateImage)

aiRouter.post('/remove-image-background',upload.single('image'), auth, removeBackground)

aiRouter.post('/remove-image-object',upload.single('image'), auth, removeObject)

aiRouter.post('/resume-review',upload.single('resume'), auth, reviewResume)


export default aiRouter