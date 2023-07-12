export default class CourseRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = () => {
    return this.dao.getAll();
  };
  getBy = (params) => {
    return this.dao.getBy(params);
  };
  createCourse = (course) => {
    return this.dao.save(course);
  };
  update = (id, course) => {
    return this.dao.updateCourse(id, course);
  };
  findByUsername = async (username) => {
    return this.dao.findByUsername(username);
  };
}
