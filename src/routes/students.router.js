import { Router } from "express";
import {
  getAllStudents,
  createStudent,
} from "../controllers/students.controller.js";

const router = Router();

router.get("/", getAllStudents);

router.post("/", createStudent);

export default router;
