import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    emailjs
      .sendForm(
        "service_c8q35db",
        "template_26p8bk8",
        form,
        {
          publicKey: "sUHrNvnTCp5X-5Cog",
        }
      )
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Message failed to send. Please try again.");
      });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      <form id="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          required
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
