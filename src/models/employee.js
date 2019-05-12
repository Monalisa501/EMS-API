import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeNo: {
    type: String,
    unique: true
  },
  employeeName: {
    type: String,
    unique: false
  },
  email: {
    type: String,
    unique: false
  },
  dob: {
    type: String,
    unique: false
  },
  gender: {
    type: String,
    unique: false
  },
  dept: {
    type: String,
    unique: false
  },
});

const emp = mongoose.model('Employee', employeeSchema);

export default emp;