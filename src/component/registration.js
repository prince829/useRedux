import React from 'react'
import { Form, Formik,Field, ErrorMessage } from "formik";
import { Container, Row,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "./registration.css";
import { useDispatch } from "react-redux";
import { signup } from "../action/authAction";

function Registration() {
    const dispatchMethod=useDispatch()
    const initial={
        firstname:'',
        lastname:'',
        email:'',
        // phone:['',''],
        password:''
        // cnfpass:'',
    
    }
    
    const validate=(values)=>{
        const errors={}
        if(!values.firstname)
        errors.firstname='Required!'
        if(!values.lastname)
        errors.lastname='Required!'
        if(!values.email)
        errors.email='Required!'
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email='Enter valid email'
        if(!values.password)
        errors.password='Required!'
        else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password))
        errors.password='Enter valid password'
        // if(!values.cnfpass)
        // errors.cnfpass='Required'
        // else if(values.password!==values.cnfpass)
        // errors.cnfpass='please enter same password!'
       
            return errors
    }
    
    
    const submitt=(values)=>{
        
                  console.log('form values',values);
                
                  
                  dispatchMethod(signup(initial))
                  
                      
                  
    }
    
        return (
        <Container className='c1'>
            <h1 className='head'>Register yourself</h1>
                <div className=''>
         <Formik initialValues={initial} validate={validate} onSubmit={submitt}>
             <Form>
                 <Row>
                 <label htmlFor='firstname' className='n1'>First Nmae</label><br/>
                    <Field name='firstname' id='firstname'className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='firstname' component='div' className='x'/><br/>
                     </Row>
                     <Row>
                    <label htmlFor='lastname' className='n1'>Last Name</label><br/>
                    <Field name='lastname' id='lastname'className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='lastname' component='div' className='x'/><br/>
                        </Row>
                        <Row>
                    <label htmlFor='email' className='n1'>Email</label><br/>
                    <Field name='email' id='email' className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='email' component='div' className='x'/><br/>
                         </Row>
                         {/* <Row>
                    <label htmlFor='primaryphone'className='n1'>phone1</label><br/>
                    <Field name='phone[0]' id='Phone' className='col-lg-12 col-md-12 col-sm-12 '/>
                    <ErrorMessage name='phone[0]'component='div' className='x' /><br/>
                          </Row>
                          <Row>
                    <label htmlFor='secondryphone'className='n1'>Phone2</label><br/>
                    <Field name='phone[1]' id='secondryphone' className='col-lg-12 col-md-12 col-sm-12 '/>
                    <ErrorMessage name='phone[1]' component='div' className='x'/><br/>
                        </Row> */}
                        <Row>
                    <label htmlFor='password'className='n1'>Password</label><br/>
                    <Field type='password' name='password' id='password' className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='password' component='div' className='x'/><br/>
                            </Row><br/>
                            {/* <Row>
                    <label htmlFor='cnfpass'className='n1'>Confirm Password</label><br/>
                    <Field type='password' name='cnfpass' id='cnfpass'className='col-lg-12 col-md-12 col-sm-12 ' />
                    <ErrorMessage name='cnfpass' component='div' className='x'/><br/>
                    </Row><br/> */}
                    <Button variant="primary" type="submit"> Register </Button>
                    
                 </Form>
             </Formik>
             </div>
                
        </Container>
    )
}

export default Registration
