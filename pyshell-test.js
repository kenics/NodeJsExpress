const { PythonShell } = require('python-shell');

PythonShell.runString('x=1+1; print(x)', null)
  .then((messages)=>{
    console.log('end');
  })
  .catch((error) =>{
    console.log(error);
  });
