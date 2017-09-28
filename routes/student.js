const router = require('express').Router();
module.exports = router;
const Student = require('../db').Student;


router.get('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.id
    }
  }).then((student) => {
    res.json(student)
  }).catch(next)
});

router.get('/', (req, res, next) =>{
  Student.findAll({}).then((all)=>{
    res.json(all)
  }).catch(next)
})

router.post('/', (req, res, next) =>{
  return Student.create({
    name: req.body.name,
    GPA: req.body.GPA,
    teacherID: req.body.teacherID
  }).then((student)=>{
    student.save()
  }).then(()=>{
    res.redirect('/student')
  }).catch(next)
})

router.delete('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.id
    }
  }).then((student) => {
    student.destroy()
  }).catch(() => {
    res.redirect('/student')
  }).then(()=>{
    res.redirect('/student')
  })
});

router.put('/:id/:teacherID', (req, res, next) =>{
  Student.findOne({
    where: {
      id: req.params.id
    }
  }).then((student)=>{
    student.update({
      teacherID: req.params.teacherID
    })
  }).catch(() => {
    res.redirect('/student')
  }).then(()=>{
    res.redirect('/student')
  })
});
