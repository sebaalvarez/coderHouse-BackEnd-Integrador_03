//import del service repository
import { courseService } from "../services/repository/services.js";

export async function getAllCourses(req, res) {
  try {
    let courses = await courseService.getAll();
    res.send(courses);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: error, message: "No se pudo obtener los cursos." });
  }
}

export async function createCourse(req, res) {
  try {
    let result = await courseService.createCourse(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ error: error, message: "No se pudo guardar el curso." });
  }
}
