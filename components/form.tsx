// components/ContactForm.js
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");




  const handleSubmit = (e: any) => {
    
    e.preventDefault();

    // Configura los datos para enviar a Email.js
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Envía el correo utilizando Email.js
    emailjs
      .send(
        "service_0557bm3",
        "template_6j5dgue",
        templateParams,
        "KfJFmEJDocXZn-PuZ"
      )
      .then(
        (response) => {
          Swal.fire({
            icon: "success",
            title: "Correo enviado correctamente!",
            showConfirmButton: false,
            timer:1500,
            backdrop:true
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "No se pudo enviar el correo",
            showConfirmButton: false,
            timer: 1500,
            backdrop:true
          });
        }
      );

    // Limpiar el formulario después de enviar
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full grid   grid-cols-2 lg:p-10  "
      >
        <div className=" col-span-2 w-full   sm:w-full  md:w-full lg:w-6/12 xl:w-4/12  mr-auto ml-auto">
          <label
            className="block  text-white text-xl font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full h-auto p-2 my-input border rounded-lg bg-[#FFFFFF0D]   border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-white"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-span-2  w-full   sm:w-full  md:w-full lg:w-6/12 xl:w-4/12 mt-10 mr-auto ml-auto">
          <label
            className="block text-white text-xl font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full h-16 p-2 my-input border  rounded-lg bg-[#FFFFFF0D]   border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-white"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className=" col-span-2 w-full   sm:w-full  md:w-full lg:w-6/12 xl:w-4/12 mr-auto ml-auto mt-10">
          <label
            className="block text-white text-xl font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full my-input border p-2 rounded-lg bg-[#FFFFFF0D]   border-[#FFFFFF33] text-white focus:outline-none focus:ring-2 focus:ring-white"
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className=" col-span-2">
          <div className="flex justify-center mt-5">
            <button
              className=" w-full   sm:w-full  md:w-full lg:w-6/12 xl:w-4/12 p-2 mt-4 border bg-[#FFFFFF0D]   border-[#FFFFFF33] rounded-lg text-white hover:bg-[#ffffff41] transition-colors duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
