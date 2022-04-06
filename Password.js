import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Password = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
 
  })
  return (
    <Formik
      initialValues={{
        email: '',
       
      }}
      validationSchema={validate}
      onSubmit={values => {
        
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-italic .display-4" id='name8'>Forget Password</h1>

        
          <Form><h1>
          <TextField className="form-control" label="Email" name="email" type="email" place/></h1>
          <button className="btn btn-dark mt-3" type="submit">Submit</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div> 
      )}
    </Formik>
  )
}