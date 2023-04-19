import React, {useState} from "react";
import { Form, Section, Button, } from "./ContactFormStyles";
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        // const {name, email, message} = e.target.elements;
        // let details = {
        //     name: name.value,
        //     email: email.value,
        //     message: message.value
        // };
        // let response = await fetch("http://localhost:3002", {
        //     method : "POST",
        //     headers: {
        //         "Content-Type": 'application/json',
        //     },
        //     body: JSON.stringify(details),
        // })
        setStatus("Submit");
        // let result = await response.json();
        // alert(result.status);
    };

    return (
      <Section nopadding id="contact">
        <SectionTitle main>Reach Out</SectionTitle>
        <Form action="https://formspree.io/f/xknakgjp" method="POST">
        
          <label for="name">Name:</label>
          <input type="text" name="name" required />
        
        
          <label for="email">Email:</label>
          <input type="email" name="email" required />
        
        
          <label for="message">Message:</label>
          <textarea name="message" required />

          <Button type="submit">{status}</Button>
        </Form>
        
      </Section>
    );
};

export default ContactForm;