import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Confirmpass = () => {
  const validate = Yup.object({
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
 
  })
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
       
      }}
      validationSchema={validate}
      onSubmit={values => {
        
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-italic .display-4" id='name8'>Reset Password</h1>

        
          <Form>
          <TextField className="form-control" label="New password" name="password" type="password" />

<TextField className="form-control" label="Confirm Password" name="confirmPassword" type="password" />

<button className="btn btn-dark mt-3" type="submit">Submit</button>

<button className="btn btn-danger mt-3 ml-2" type="reset">Reset</button>
          </Form>
        </div> 
      )}
    </Formik>
  )
}