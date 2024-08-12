import { IconSend, IconX } from "@tabler/icons-react";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  request: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function FooterForm() {
  const [showtoast, setShowToast] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [formError, setFormError] = useState(false);

  async function handleSubmit(email: string, request: string) {
    // event.preventDefault();
    const formData = new FormData();

    formData.append("email", email);
    formData.append("request", request);
    // ff342930-950c-4df1-bc93-c0e8e1425836
    formData.append("access_key", "ff342930-950c-4df1-bc93-c0e8e1425836");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result.message);
      setShowToast(true);
      setIsFormSent(false);
    } else {
      console.log(result.message);
      setIsFormSent(false);
      setFormError(true)
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        request: "",
      }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        // same shape as initial values

        if (isFormSent == false) {
          setIsFormSent(true);
          setFormError(false)
          handleSubmit(values.email, values.request);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col space-y-5 mt-10">
          <Field
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full py-3 px-3 rounded-xl font-light text-black/70 bg-white outline-secondary focus:border-secondary text-[16px]"
          />

          {errors.email && touched.email ? (
            <div
              className="flex justify-between w-full bg-red-500/20 text-red-500 py-4 px-5 mt-7 text-sm
                    rounded-lg border border-red-500"
            >
              <p>Email Address is Required</p>
            </div>
          ) : null}

          <Field
            type="text"
            name="request"
            className="w-full py-3 px-3 rounded-xl font-light text-black/70 outline-secondary bg-white focus:border-secondary text-[16px] pr-[9rem]"
            placeholder="Found something interesting?"
          />

          {errors.request && touched.request ? (
            <div
              className="flex justify-between w-full bg-red-500/20 text-red-500 py-4 px-5 mt-7 text-sm
                    rounded-lg border border-red-500"
            >
              <p>{errors.request}</p>
            </div>
          ) : null}

          <button
            type="submit"
            className={`bg-[#313133] w-full font-medium text-white text-[18px] btn btn-active border-0 flex`}
          >
            {isFormSent ? (
              <span className="bg-white loading loading-spinner loading-sm"></span>
            ) : (
              <div className="flex justify-center items-center">
                <IconSend className="mr-3" />
                Send
              </div>
            )}
          </button>

          {showtoast && (
            <div
              className="flex justify-between w-full bg-green-500/20 text-green-500 py-4 px-5 mt-7 text-sm
       rounded-lg border border-green-500"
            >
              <p>Message successfully sent</p>
              <IconX
                className="text-green-500"
                onClick={() => setShowToast(false)}
              />
            </div>
          )}

{formError && (
            <div
              className="flex justify-between w-full bg-red-500/20 text-red-500 py-4 px-5 mt-7 text-sm
       rounded-lg border border-red-500"
            >
              <p>Message not sent </p>
              <IconX
                className="text-red-500"
                onClick={() => setFormError(false)}
              />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
