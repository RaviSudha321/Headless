import { createElement, useState } from "react";


function ContactForm({formTitle}){

    const [formData, setFormData] = useState({});
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        let firstName = document.getElementById('fist_name').value;
        let lastName = document.getElementById('last_name').value;
        let emailAddress = document.getElementById('email_address').value;
        let phoneNumber = document.getElementById('phone_number').value;

        if(firstName == '' || lastName == '' || emailAddress == '' || phoneNumber == ''){
            console.log('field are empty');
        } else if(!emailAddress.match(validRegex)) {
            console.log('enter valid email address');
        } else {
            console.log(formData);
        }
        
        

    }

    return(

        <>  
            {formTitle && <h2 className="sec_title">{formTitle}</h2>}
            <form id="contact_form" method="post">
                <p>
                    {/* <label htmlFor="f_name">First Name</label> */}
                    <input type="text" name="fist_name" id="fist_name" placeholder="First Name" onChange={handleChange} value={formData.fist_name} />
                    <span className="error"></span>
                </p>
                <p>
                    {/* <label htmlFor="l_name">Last Name</label> */}
                    <input type="text" name="last_name" id="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} />
                    <span className="error"></span>
                </p>
                <p>
                    {/* <label htmlFor="email">Email Address</label> */}
                    <input type="text" name="email_address" id="email_address" placeholder="Email Address" onChange={handleChange} value={formData.email_address} />
                    <span className="error"></span>
                </p>
                <p>
                    {/* <label htmlFor="phone">Phone Number</label> */}
                    <input type="text" name="phone_number" id="phone_number" placeholder="Phone Number" onChange={handleChange} value={formData.phone_number} />
                    <span className="error"></span>
                </p>
                <p>
                    {/* <label htmlFor="message">Message</label> */}
                    <textarea id="message" name="message" rows="10" placeholder="Type your message" onChange={handleChange} value={formData.message}></textarea>
                </p>
                <p>
                    <input type="submit" name="submit" id="submit" onClick={handleSubmit} />
                </p>
            </form>
        </>

    )

}

export default ContactForm;