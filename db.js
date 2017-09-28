const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/juniorenrichment', { logging: false });


var Student = db.define("student" , {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  GPA: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  teacherID: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
});



var Teacher = db.define('teacher', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  subject: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Student.prototype.letterGrade = function() {
  if(this.GPA > 3.5) return 'A';
  else if(this.GPA > 3.0) return 'B';
  else if(this.GPA > 2.5) return 'C';
  else if(this.GPA > 2.0) return 'D';
  else return 'F';
}

Student.perfect = function() {
  Student.findAll({
    where: {
      GPA: 4.0
    }
  })
}

// Student.belongsTo(Teacher, {as: "Teacher" })

module.exports = {db, Student, Teacher}