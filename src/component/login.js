import React from 'react'
import axios from "axios";
import { Form,Formik,Field,ErrorMessage } from 'formik';
import { Container, Row,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

function Login() {
    const initial={
        email:'',
        password:''

    }
 
    const validate=(values)=>{
        const errors={}
       
        if(!values.email)
        errors.email='Required!'
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email='Enter valid email'
        if(!values.password)
        errors.password='Required!'
        else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password))
        errors.password='Enter valid password'
       
       
            return errors
    }
    const submitt=(values)=>{
        // axios.post('https://api09.herokuapp.com/login',values).then((Response)=>{
          
        //     alert('welcome')
            
        // }).catch((Error)=>{console.log(Error)
        //     alert('Invalid email or password')})
                  console.log('form values',values);
                      
                  
    }
    return (
        <Container className='c'>
          <Formik initialValues={initial} validate={validate} onSubmit={submitt}>
              <Form>
              <Row>
                    <label htmlFor='email' className='n1'>Email</label><br/>
                    <Field name='email' id='email' className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='email' component='div' className='x'/><br/>
                         </Row>

                         <Row>
                    <label htmlFor='password'className='n1'>Password</label><br/>
                    <Field type='password' name='password' id='password' className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='password' component='div' className='x'/><br/>
                            </Row><br/>
                            <Button variant="primary" type="submit"> Login </Button>

              </Form>
              </Formik>  
        </Container>
    )
}

export default Login
