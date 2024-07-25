// import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { adminLogin } from "./store/action";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    username: Yup.string(),
    password: Yup.string().required("Обязательно").min(4),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(adminLogin({ data: values, navigate }));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        username: "admin11",
        password: "admin11",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <div className="pt-[100px]">
          <h1 className="text-2xl font-semibold text-center mb-[20px] text-white">
            ВОЙТИ
          </h1>
          <Form className="m-auto bg-[#1A1A1A] border flex flex-col gap-7 py-[83px] px-[64px] rounded-md w-[40%]">
            <div className="flex flex-col gap-1">
              <label className="text-gray-500">Электронная почта(логин)</label>
              <Field
                type="username"
                name="username"
                className="bg-white rounded-md pl-[24px] py-[15px]"
                placeholder="Например asanov@gmail.com"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-500">Введите пароль*</label>
              <Field
                type="password"
                name="password"
                className="bg-white rounded-md pl-[24px] py-[15px]"
                placeholder="Пароль"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>
            {errors.general && (
              <div className="text-red-500 text-center mb-4">
                {errors.general}
              </div>
            )}
            <div className="flex items-center gap-2">
              <input className="cursor-pointer" type="checkbox" />
              <span className="flex gap-1 text-white lg:text-[16px] sm:text-[10px]" >
                <p className="text-gray-500">Я согласен с </p>{" "}
                <p>Условиями предоставления услуг</p>
              </span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-red-600 rounded-full hover:bg-red-700 align-center py-[15px] mt-[19px]"
            >
              ОТПРАВИТЬ
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default SignIn;
