import React from "react";
import "./ContactMe.css"
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () =>{
    return(
        <section className="contact-container">
            <h5>Entre em Contato Comigo</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard iconUrl="./assets/images/GithubLogo.png" text="https://github.com/henzopuchetti"/>
                    <ContactInfoCard iconUrl="./assets/images/EmailLogo.svg" text="Henzoboschiero@gmail.com"/>
                </div>
                <div style={{flex: 1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe