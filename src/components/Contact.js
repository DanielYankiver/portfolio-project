import React, { useState } from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const { register, handleSubmit, errors } = useForm()

    const serviceID = "service_cgbaj5a"
    const templateID = "template_yvesyfu"
    const userID = "user_NiR06iHilhuwjmomgY6AS"

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset()
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
    return (
        <div className="contact">
           <div className="text-center">
               <div className="contact-head">
                    <h1>contact me</h1>
                    {/* <p>
                        Please fill out the form and I'll contact you as soon as possible.
                        Thank you for reaching out!
                    </p> */}
                    <span className="success-message">{successMessage}</span>
               </div>
           </div>
           <div className="container">
               <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text" 
                                    className="form-control"
                                    placeholder="Name"
                                    name= "name"
                                />
                                <div className="line"></div>
                            </div>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"  
                                    className="form-control"
                                    placeholder="Phone"
                                    name= "phone"
                                />
                                <div className="line"></div>
                            </div>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"  
                                    className="form-control"
                                    placeholder="Email"
                                    name= "email"
                                />
                                <div className="line"></div>
                            </div>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Subject"
                                    name= "subject"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Please describe your inquiry..."
                                    name= "description"
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <button className="btn-main-offer contact-btn" type="submit">SEND</button>
                        </div>
                    </div>
               </form>
           </div>
        </div>
    )
}

export default Contact
