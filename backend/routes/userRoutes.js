import express from "express";

//Controllers
//Middlewares

const router = express.Router();

router.route("/").post(createUser);

export default router;
