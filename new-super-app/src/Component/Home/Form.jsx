import { useState } from "react";
import { useNavigate } from "react-router-dom"
import styles from './Form.module.css'


const Form = () => {

    const [userForm, setUserForm] = useState({
        useName: "",
        Username: "",
        useEmail: "",
        useMobile: "",
        Check: false,
    });
    const [nameError, setNameError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [signUpError, setSignUpError] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        valiDation()
    }
    const valiDation = () => {

        let valid = true;


        if (!(userForm.useName.trim().length > 0)) {
            setNameError(true);
            valid = false;
        } else {
            setNameError(false);
        }

        if (!(userForm.Username.trim().length > 0)) {
            setUserNameError(true);
            valid = false;
        }
        else {
            setUserNameError(false);
        }
        if (!(userForm.useEmail.trim().length > 0)) {
            setMailError(true);
            valid = false;
        } else {
            setMailError(false);
        }

        if (!(userForm.useMobile.trim().length > 0)) {
            setMobileError(true);
            valid = false;
        } else {
            setMailError(false);
        }
        // if (!userForm.Check) {
        //     setSignUpError(true);
        //     valid = false;
        // }else{
        //     setSignUpError(false)
        // }

        if (valid) {
            window.localStorage.setItem('formData', JSON.stringify(userForm))
            navigate("/Header")
        }

    }


    return (
        <div className={styles.input}>
            <h1>Super app</h1>

            <h3>Create your new account</h3>

            <form className={styles.from}>
                <input
                    type="text"
                    className={styles.name}
                    placeholder=" Name"
                    name="useName"
                    onChange={(e) => handleInputChange(e)}
                /><br />
                {nameError ? (<p className={styles.error}>Please fill correctly</p>
                ) : (
                    <></>
                )}
                <input
                    type="text"
                    className={styles.username}
                    placeholder="Username"
                    name="Username"
                    onChange={(e) => handleInputChange(e)}
                />
                <br />
                {userNameError ? (<p className={styles.error}>Please fill correctly</p>
                ) : (
                    <></>
                )}
                <input
                    type="email"
                    className={styles.email}
                    placeholder="Email"
                    name="useEmail"
                    onChange={(e) => handleInputChange(e)}
                /><br />
                {mailError ? (<p className={styles.error}>Please fill correctly</p>
                ) : (
                    <></>
                )}
                <input
                    type="text"
                    className={styles.number}
                    placeholder="Mobile"
                    name="useMobile"
                    onChange={(e) => handleInputChange(e)}
                />
                <br />
                {mobileError ? (<p className={styles.error}>Please fill correctly</p>
                ) : (
                    <></>
                )}
                <input
                    onChange={(e) =>
                        setUserForm({
                            ...userForm,
                            [e.target.name]: e.target.checked,
                        })
                        
                    }
                    type="checkbox"
                    name="check" 
                    />
                <label className="tick">Share my registration data with Superapp</label><br />
                {signUpError ? <p className={styles.error}>Please tick this</p> : <></>}
                <button className={styles.btn} onClick={(e) => handleSubmit(e)}>SIGN UP</button>
            </form>
            <br />
            <label className={styles.singinline}>By clicking on Sign up. you agree to Superapp Terms and <br />
            <label className={styles.special}>Conditions of Use</label><br /> <br /></label>
            <label className={styles.singinline}>To learn more about how Superapp collects, uses,shares and</label><br />
            <label className={styles.singinline}> protects your personal data please head Superapp<span className={styles.Privacy}> Privacy</span> </label><br/> 
            <label className={styles.special}> Policy</label>
        </div>
    )
}

export default Form;