import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAuth } from './AuthContext';

function SignIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string(), // Поле email не требуется для проверки
    password: Yup.string().required('Обязательно'),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    const validEmail = 'admin@gmail.com';
    const validPassword = 'adminn';

    // Проверяем, если оба email и пароль верны
    if (values.email === validEmail && values.password === validPassword) {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        login();
        navigate('/admin');
        setSubmitting(false);
      }, 400);
    } else {
      // Устанавливаем общую ошибку
      setErrors({ general: 'Неверный email или пароль' });
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <div className="pt-[100px]">
          <h1 className="text-2xl font-semibold text-center mb-[20px] text-white">ВОЙТИ</h1>
          <Form className="m-auto bg-[#1A1A1A] border flex flex-col gap-7 py-[83px] px-[64px] rounded-md w-[40%]">
            <div className="flex flex-col gap-1">
              <label className="text-gray-500">Электронная почта(логин)</label>
              <Field type="email" name="email" className="bg-white rounded-md pl-[24px] py-[15px]" placeholder="Например asanov@gmail.com" />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-500">Введите пароль*</label>
              <Field type="password" name="password" className="bg-white rounded-md pl-[24px] py-[15px]" placeholder="Пароль" />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            {errors.general && (
              <div className="text-red-500 text-center mb-4">{errors.general}</div>
            )}
            <div className="flex items-center gap-2">
              <input className="cursor-pointer" type="checkbox" />
              <span className="flex gap-1 text-white">
                <p className="text-gray-500">Я согласен с </p> <p>Условиями предоставления услуг</p>
              </span>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full text-white bg-red-600 rounded-full hover:bg-red-700 align-center py-[15px] mt-[19px]">
              ОТПРАВИТЬ
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignIn;
