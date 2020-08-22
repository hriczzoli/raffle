import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { loginUser, login } from '../../actions/auth';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = ({ history, login }) => {
    const { addToast } = useToasts()

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <div className="w-2/5 rounded shadow-xl p-4">
        <p className="text-xl font-semibold mt-8 mb-6">Login</p>
        <Formik
            initialValues={{
            username: '',
            password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                loginUser(values)
                .then(() => { addToast('Logged In Successfully', { appearance: 'success' }); history.push('/todo'); login(values.username)})
                .catch((error) => addToast(error, { appearance: 'error' }))
            }}
        >
            {({ errors, touched }) => (
            <Form className="flex flex-col">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                    </label>
                    <Field 
                        name="username"
                        placeholder="Username"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    {errors.username && touched.username ? (
                    <div className="text-red-600">{errors.username}</div>
                    ) : null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <Field 
                        name="password"
                        placeholder="******************"
                        type="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.password && touched.password ? (
                    <div className="text-red-600">{errors.password}</div>
                    ) : null}
                    <div className="flex items-center justify-end mt-4">
                        <button 
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                        </button>
                    </div>
                </div>
            </Form>
            )}
        </Formik>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    login: (username) => dispatch(login(username))
})

export default connect(null, mapDispatchToProps)(Login);
