const router = require('express').Router();
module.exports = router
const Teacher = require('../db').Teacher;
const Student = require('../db').Student;


router.get('/', (req, res, next) => {
    Student.findAll({ where: { teacherID: req.query.teacherID }})
    .then((student) => {
    res.json(student)
  }).catch(next)
});

router.get('/', (req, res, next) =>{
  Teacher.findAll({}).then((all)=>{
    res.json(all)
  }).catch(next)
})

router.post('/', (req, res, next) =>{
  return Teacher.create({
    name: req.body.name,
    subject: req.body.subject
  }).then((teacher)=>{
    teacher.save()
  }).then(()=>{
    res.redirect('/teacher')
  }).catch(next)
})
