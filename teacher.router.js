const express = require("express");
const router = express.Router();
const teacherController = require('../controllers/teacher.Controller');
const { getTeachersById } = require("./src/controllers/teacher.controller");

router.get('/', teacherController.getAllTeachers);
router.get('/:id', teacherController.getTeachersById)
router.post('/', teacherController.createTeacher);
router.put('/:id', teacherController.updateTeacher);
router.delete('/:id', teacherController.deleteTeacher);

module.exports=router;