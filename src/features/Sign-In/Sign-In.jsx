import React from "react";
import {Link} from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignIn() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "temenovbekzan@gmail.com",
        password: "bekjan007",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmiting }) => {
        setTimeout(() => {
          console.log(JSON.stringfy(values, null, 2));
          setSubmiting(false);
        }, 400);
      }}
    >
      {({ isSubmiting }) => (
        <div className=" pt-[100px]">
          <h1 className="text-2xl font-semibold text-center mb-[20px] text-white">
            ВОЙТИ
          </h1>
          <Form className=" m-auto  bg-[#1A1A1A] border flex flex-col gap-7 py-[83px] px-[64px] rounded-md w-[40%]">
            <div className="flex flex-col gap-1">
              <label className="text-gray-500">Электронная почта(логин)*</label>
              <Field
                type="email"
                name="email"
                className="bg-white rounded-md pl-[24px] py-[15px]"
                placeholder="Например asanov@gmail.com"
              />
              <ErrorMessage
                name="email"
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
            <div className="flex items-center gap-2">
              <input className="cursor-pointer" type="checkbox" />
              <span className="flex gap-1 text-white">
                <p className="text-gray-500">Я согласен с </p>{" "}
                <p> Условиями предоставления услуг</p>
              </span>
            </div>
            <Link to="/admin/sign-in/verification">
              <button
                type="submit "
                disabled={isSubmiting}
                className="w-full text-white bg-red-600 rounded-full hover:bg-red-700 align-center py-[15px] mt-[19px]"
              >
                ОТПРАВИТЬ
              </button>
            </Link>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default SignIn;
