const express = require('express');
const router = express.Router();
const teacherController =require('../controllers/teacher.controller');




// Mock de usuario

router.post ('/', teacherController.getTeachersByPassword)
  


module.exports = router;
