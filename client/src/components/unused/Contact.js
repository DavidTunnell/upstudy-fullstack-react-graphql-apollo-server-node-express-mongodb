import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { fetchCreate } from "../utils/api";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isVisible, setIsVisible] = useState({ visibility: "hidden" });
    const [errorFeedback, setErrorFeedback] = useState("");
    const [userFeedback, setUserFeedback] = useState(
        "Your message has been received. Thank you."
    );

    const recaptchaRef = React.createRef();

    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        switch (name) {
            case "name":
                return setName(value);
            case "email":
                return setEmail(value);
            case "phone":
                return setPhone(value);
            case "message":
                return setMessage(value);
            default:
                console.log(`Error, invalid input field.`);
        }
    };
    const handleFormSubmit = async (e) => {
        //check for suspicious activity with Invisible reCAPTCHA - https://www.npmjs.com/package/react-google-recaptcha
        recaptchaRef.current.execute();
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        if (
            name.length === 0 ||
            email.length === 0 ||
            phone.length === 0 ||
            message.length === 0
        ) {
            setIsVisible({ visibility: "visible" });
            setErrorFeedback("error-feedback");
            setUserFeedback("Please make sure to fill out all fields.");
        } else if (!validateEmail(email)) {
            setIsVisible({ visibility: "visible" });
            setErrorFeedback("error-feedback");
            setUserFeedback("Please use a valid email address.");
        } else if (!validatePhoneNumber(phone)) {
            setIsVisible({ visibility: "visible" });
            setErrorFeedback("error-feedback");
            setUserFeedback("Please use a valid phone number.");
        } else {
            //Get button to inform user
            const contactEntry = { name, email, phone, message };
            await fetchCreate(
                process.env.REACT_APP_BASE_URL + "/api/contact/",
                contactEntry
            ).then((returnData) => {
                if (returnData) {
                    sendEmail(contactEntry);
                    setUserFeedback(
                        "Your message has been received. Thank you."
                    );
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setIsDisabled(true);
                    setErrorFeedback("");
                    setIsVisible({ visibility: "visible" });
                } else {
                    console.log("Error submitting form.");
                    setIsDisabled(true);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setUserFeedback(
                        "There was an error, please try again later."
                    );
                    setIsVisible({
                        visibility: "visible",
                    });
                    setErrorFeedback("error-feedback");
                }
            });
        }
    };

    const sendEmail = async (contactEntry) => {
        await fetchCreate(
            process.env.REACT_APP_BASE_URL + "/api/contact/email",
            contactEntry
        ).then((returnData) => {
            console.log(returnData);
        });
    };

    //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    function validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //https://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript
    function validatePhoneNumber(phone) {
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(phone);
    }

    return (
        <>
            <section className="bg-light pt-10 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span className="eyebrow mb-1 text-primary">
                                Get in touch
                            </span>
                            <h2>I look forward to hearing from you.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form>
                                <div className="form-row mb-1">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Name"
                                            name="name"
                                            onChange={handleInputChange}
                                            value={name}
                                            disabled={isDisabled}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleInputChange}
                                            value={email}
                                            disabled={isDisabled}
                                        />
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control form-control-minimal"
                                            placeholder="Phone"
                                            name="phone"
                                            onChange={handleInputChange}
                                            value={phone}
                                            disabled={isDisabled}
                                        />
                                    </div>
                                </div>
                                <div className="form-row mb-1">
                                    <div className="col">
                                        <textarea
                                            className="form-control form-control-minimal"
                                            rows="3"
                                            placeholder="Your Message"
                                            name="message"
                                            onChange={handleInputChange}
                                            value={message}
                                            disabled={isDisabled}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-row mt-3">
                                    <div className="col">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            size="invisible"
                                            sitekey={
                                                process.env
                                                    .REACT_APP_GOOGLE_SITE_KEY
                                            }
                                            onChange={onChange}
                                        />
                                        <button
                                            className="btn btn-primary px-5"
                                            onClick={handleFormSubmit}
                                            disabled={isDisabled}
                                        >
                                            Send Mail
                                        </button>
                                        <span
                                            className={`ml-5 text-success user-feedback ${errorFeedback}`}
                                            style={isVisible}
                                        >
                                            {userFeedback}
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
