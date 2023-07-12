import StudentsDao from "../db/dao/students.dao.js";
import StudentRepository from "./students.repository.js";

const studentDao = new StudentsDao();
export const studentService = new StudentRepository(studentDao);

//import CourseService from '../services/filesystem/courses.service.js';
import CourseDao from "../db/dao/courses.dao.js";
import CourseRepository from "./courses.repository.js";

const courseDao = new CourseDao();
export const courseService = new CourseRepository(courseDao);
