function NewsletterForm(){

    let handleSubmit = (e) => {
        e.preventDefault();

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
        let email = document.getElementById('email_address').value;
        if(email == ''){
            document.getElementById('email_address').classList.add('error');
            console.log('email field is empty');
        } else if(!email.match(validRegex)) {
            console.log('email address not valid');
        } else {
            console.log(email);
        }
    }

    return(

        <>
            <form id="newsletter_form">
                <p className="email_field">
                    <input type="email" name="email_address" id="email_address" placeholder="Email address" />
                </p>
                <p className="submit_btn">
                    <input type="submit" name="newsletter_submit" id="newsletter_submit" onClick={handleSubmit} />
                </p>
            </form>
        </>

    )

}

export default NewsletterForm;