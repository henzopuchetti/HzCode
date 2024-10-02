import React from "react";
import "./ContactForm.css"

const ContactForm = () =>{
    return(
        <div className="contact-form-content">
            <form>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="Primeiro Nome" />
                    <input type="text" name="lastname" placeholder="Sobrenome" />
                </div>
                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Mensagem" rows={3}></textarea>

                <button>Enviar</button>
            </form>
        </div>
    )
}

export default ContactForm;