import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const emp = await req.context.models.Employee.find();
  return res.send(emp);
});

router.get('/:employeeNo', async (req, res) => {
  const emp = await req.context.models.Employee.findByEmployeeNo(
    req.params.employeeNo,
  );
  return res.send(emp);
});

router.post('/', async (req, res) => {
  const emp = await req.context.models.Employee.create({
    text: req.body.text
  });

  return res.send(emp);
});

router.delete('/:employeeNo', async (req, res) => {
  const emp = await req.context.models.Employee.findById(
    req.params.employeeNo,
  );

  let result = null;
  if (emp) {
    result = await emp.remove();
  }

  return res.send(result);
});

export default router;
