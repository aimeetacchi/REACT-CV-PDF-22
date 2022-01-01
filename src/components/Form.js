import React from 'react'
import { useDispatch } from 'react-redux'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addFormData } from '../actions/AddFormData'
import { useNavigate } from "react-router-dom";


 const FormikForm = () => {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();
    return (
        <div>
            <Formik
            initialValues={{ 
                name: '',
                mobile: '',
                address: '',
                email: 'youremail@email.co.uk',
                website: '',

                aboutme: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis leo at erat semper posuere. Cras vitae congue libero. Donec a justo non sem eleifend rutrum.',

                skills: 'HTML, CSS, WORDPRESS, JAVASCRIPT, GIT, REACT, SKETC',
                latestjob: '',
                latestjobyear: '',
                latestjobcompany: '',

                latestjobdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis leo at erat semper posuere. Cras vitae congue libero. Donec a justo non sem eleifend rutrum. Etiam bibendum sit amet felis id tempus. Sed maximus tortor quis lectus sollicitudin fringilla. Curabitur scelerisque auctor mauris non porttitor. Morbi rhoncus condimentum urna id pretium. Aenean ultrices odio in tortor pharetra luctus. Fusce pulvinar justo massa, non lobortis arcu luctus vitae. Donec velit augue, sollicitudin ac malesuada a, vulputate non sem. Donec sit amet mi et ex maximus mollis. Maecenas mollis orci sit amet vestibulum imperdiet. Etiam pharetra ut ex vitae blandit. Vivamus sed libero nec diam aliquam mollis.',

                education: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis leo at erat semper posuere. Cras vitae congue libero. Donec a justo non sem eleifend rutrum. Etiam bibendum sit amet felis id tempus. Sed maximus tortor quis lectus sollicitudin fringilla.',

                hobbiesinterests: 'Coding, Art & crafts, Travelling, Video games, Drawing, Digital photography, Driving my car about the countryside, Japan',
            }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                errors.name = 'Name Required';
                }
                if (!values.latestjob) {
                    errors.lastestjob = 'Job Required'
                }
                if (!values.latestjobcompany) {
                    errors.latestjobcompany = 'Company name Required'
                }
                if (!values.latestjobyear) {
                    errors.latestjobyear = 'Job Year Required'
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                    const data = {
                        name: values.name,
                        mobile: values.mobile,
                        address: values.address,
                        email: values.email,
                        website: values.website,
                        aboutme: values.aboutme,
                        skills: values.skills,
                        latestjob: values.latestjob,
                        latestjobyear: values.latestjobyear,
                        latestjobcompany: values.latestjobcompany,
                        latestjobdescription: values.latestjobdescription,
                        education: values.education,
                        hobbiesinterests: values.hobbiesinterests,
                    }
                    dispatch(addFormData(data));
                    navigate({ pathname: './pdf'})

            }}
            >
            {({ isSubmitting }) => (
                <Form className="form">
                    <p>Fill out the form below to generate a PDF.</p>

                    <div className="form-group">
                        <label>Full Name:</label>
                        <Field placeholder="John Doe" type="text" name="name" />
                        <ErrorMessage name="name" render={msg => <div className="error">{msg}</div>} />
                    </div>

                    <div className="form-group">
                        <label>Town, County:</label>
                        <Field placeholder="Town, Country" type="text" name="address" />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number:</label>
                        <Field placeholder="07123454543" type="text" name="mobilenum" />
                    </div>

                    <div className="form-group">
                        <label>Website:</label>
                        <Field placeholder="www.website.co.uk" type="text" name="website" />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <Field placeholder="abc@gmail.com" type="email" name="email" />
                    </div>

                    <div className="form-group">
                        <label>About me:</label>
                        <Field
                            name="aboutme"
                            component="textarea"
                            rows="2"
                        />
                    </div>

                    <div className="form-group">
                        <label>Skills:</label>
                        <Field
                            name="skills"
                            component="textarea"
                            rows="2"
                        />
                    </div>

                    <div className="form-group">
                        <label>Latest Job Title:</label>
                        <Field placeholder="latest job title" type="text" name="latestjob" />
                    </div>

                    <div className="form-group">
                        <label>Company:</label>
                        <Field placeholder="latest job company" type="text" name="latestjobcompany" />
                        <ErrorMessage name="latestjobcompany" render={msg => <div className="error">{msg}</div>}  />
                    </div>

                    <div className="form-group">
                        <label>Year to and from:</label>
                        <Field placeholder="(Sept 19 - Aug 20)" type="text" name="latestjobyear" />
                        <ErrorMessage name="latestjobyear" render={msg => <div className="error">{msg}</div>}  />
                    </div>

                    <div className="form-group">
                        <label>Job Description:</label>
                        <Field
                            name="latestjobdescription"
                            component="textarea"
                            rows="2"
                        />
                    </div>


                    <div className="form-group">
                        <label>Education:</label>
                        <Field
                            name="education"
                            component="textarea"
                            rows="2"
                        />
                    </div>

                    <div className="form-group">
                        <label>Hobbies &amp; Interests</label>
                        <Field placeholder="Reading, Swimming, Photography" type="text" name="hobbiesinterests" />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Create PDF
                    </button>
                </Form>
            )}
            </Formik>
        </div>
 )
};
 
 export default FormikForm;