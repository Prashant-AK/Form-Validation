import React, { useState, useEffect } from "react";
import { Signup } from "./Content";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(5),
  email: yup.string().required().email(),
  fullname: yup.string().required(),
});
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = (data) => {
    console.log(data.email);
  };
  return (
    <div>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        {Signup.inputs.map((doc, index) => (
          <div key={index}>
            {" "}
            <label>{doc.label}</label>
            <br />
            <br />
            <input
              type={doc.type}
              name={doc.name}
              placeholder={doc.label}
              {...register(doc.name)}
            />{" "}
            <br />
            <br />
            <p>{errors[doc.name]?.message}</p>
          </div>
        ))}
        <label>username</label>
        <br />
        <br />

        <button type="Submit">Submit button</button>
      </form>
    </div>
  );
};

export default SignUp;
