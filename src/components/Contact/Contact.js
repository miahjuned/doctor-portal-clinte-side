import React, { useState } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [contactMsg, setContactMsg] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setContactMsg(data);

  return (
    <section className="contact my-5 py-5">
      <Container>

        <div className="section-title text-center text-white">
          <h5 className='textPrimary'>CONTACT US</h5>
          <h3 className='pb-3'>Always Connect with us </h3>
        </div>

        <div className="contact-form col-md-9 mx-auto">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input className="form-control" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email Address*" />
              {errors.email && <span className="error">Email is required</span>}
            </div>

            <div className="mb-4">
              <input className="form-control" {...register("subject", { required: true })} placeholder="Subject*" />
              {errors.subject && <span className="error">Subject is required</span>}
            </div>

            <div className="mb-4">
              <textarea className="form-control" cols="30" rows="10" {...register("message", { required: true })} placeholder="Your Messages *" />
              {errors.message && <span className="error">Please write something</span>}
            </div>

            <div className="text-center pb-5">
              <button style={{ width: "200px" }} className="btn btn-primary">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;