import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const UserDetail = () => {
    const {id} = useParams()
    const [form, setForm] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${id}`)
            .then(res => {
                setForm(res.data)
            })
            .catch(err => {
                console.log(err)
            }) 
    }, [id])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const ValidateChema = Yup.object().shape({
        name: Yup.string().max(100).required(),
        birthday: Yup.string().min(8).max(10).required()
    })

    return (
        <div className='wrapper-form'>
            <h1>User Detail</h1>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={ValidateChema}
                onSubmit={values => {
                    axios.put(`http://localhost:3001/users/${id}`, values)
                        .then(res => {
                            console.log(res)
                            navigate('/')
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }}
            >
                <Form>
                    <div htmlFor="">Name:</div>
                    <Field name='name' value={form.name || ''} placeholder='Enter your name' onChange={handleChange}/>
                    <ErrorMessage component='div' name='name' className='error'/>
                    <br />
                    <div>Birthday:</div>
                    <Field name='birthday' value={form.birthday || ''} type='date' onChange={handleChange}/>
                    <ErrorMessage component='div' name='birthday' className='error'/>
                    <br />
                    <br />

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default UserDetail