const router = require('express').Router();
module.exports = router;
const Student = require('../db').Student;


router.get('/', (req, res, next) =>{
  Student.findAll({}).then((all)=>{
    res.json(all)
  }).catch(next)
})