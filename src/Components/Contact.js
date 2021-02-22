import React, {useState} from "react";
import emailjs from "emailjs-com"; // importing email js for recieving emails 
import {useForm} from "react-hook-form";


//I will be allowing for emails to be sent  
const Contact = () => {
    const [successMessage, setSuccessMessage] = useState ("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID ="service_xtwnwpt"; //using service ID from emailjs to be able to recieve emails
    const templatID = "template"; //using templete ID from emailjs to be able to recieve emails
    const userID = "user_brtLWd72PaEy4GQ7VrHFu";//using user ID from emailjs to be able to recieve emails

    //form validation
    const onSubmit = (data, r) =>{
        sendEmail(
            serviceID,
            templatID,
            {       //onSubmit, these 4 areas will have to be field out that are being used/grabbed in eht function 
                    //
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject 
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templatID, variables, userID) => {


        //calling the variables for sending the form instead if using strings
        emailjs.send(serviceID, templatID, variables, userID)
          .then(() => {
              setSuccessMessage("Form sent succesfuly");
          }).catch(err => console.error(`Something went wrong" ${err}`)); 
      }



    return (
        <div id="Contact me" className="contacts">
            <div className = "text-center">

                <h1>contact me</h1>
                <p>Please fill out the form</p>

            </div>

            <div className ="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className ="row">
                    <div className = "col-md-6 col-xs-12">

                    {/* NAME INPUT */}
                        <input 
                        type="name"
                        className = "form-control"
                        placeholder= "name"
                        name= "name"
                        ref={
                            register({
                                required: "Please enter your name",
                                maxLength:{
                                    value: 20,
                                    message: "Please enter a name fewer than 20 characters"
                                }
                            })
                        }
                        />

                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>


                        {/* PHONE INPUT */}
                        <input 
                        type="phone"
                        className = "form-control"
                        placeholder= "Phone Number"
                        name= "phone number"
                        ref={
                            register({
                                required: "Please enter your phone number",
                            })
                        }
                        />

                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>


                        {/* EMAIL INPUT */}
                        <input 
                        type="email"
                        className = "form-control"
                        placeholder= "Email"
                        name= "email"
                        ref={
                            register({
                                required: "Please enter your email",
                            })
                        }
                        />

                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>



                        {/* SUBJECT INPUT */}
                        <input 
                        type="subject"
                        className = "form-control"
                        placeholder= "Subject"
                        name= "subject"
                        />

                        
                    </div>

                        {/* DESCRIPTION */}
                    <div className ="col-md-6 col-xs-12">
                        {/* <textarea
                        type="text"
                        className="Email"
                        email="email">

                        </textarea> */}
                        <button className = "btn-main-offer contact-btn" type = "submit">contact me</button>
                    </div>
                </div>

                </form>

            </div>

        </div>
    )
}

export default Contact;
