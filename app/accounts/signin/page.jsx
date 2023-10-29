'use client';
import Link from 'next/link';
import styles from './SignIn.module.css'
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { HiOutlineMail , HiOutlineLockClosed} from 'react-icons/hi'
import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md'
 
const SignIn = () => {


  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  return (
    <main className={styles.pageContainer}>

        <nav className={styles.navBar}>
         <Link href='/'>
         <MdArrowBackIosNew style={{fontSize: '20px'}} />
         </Link> 
        </nav>
        <div className={styles.formContainer}>


          <img src='/logo.png' style={{width: '70px'}}/>
          
          <div style={{textAlign: 'center',margin: '25px'}}>
            <h1 style={{fontWeight: '600', fontFamily: 'Poppins', fontSize: '1.5rem'}}>Welcome!</h1>
            <p style={{color: '#030303', fontSize: '14px'}}>Please Sign In to your account to Continue</p>
          </div>
          


          <div className={styles.inputHeading}>
            Email Address
          </div>

          <div className={styles.inputContainer}>
          <input
            placeholder='Enter your email'
            className={styles.formInput}
          />
          <div className={styles.iconContainer}>
          <HiOutlineMail/>
          </div>
          
          </div>

          <div className={styles.inputHeading}>
            Password
          </div>


          <div className={styles.inputContainer}>
          <input
            placeholder='Enter your password'
            className={styles.formInput}
            type={passwordShown ? "text" : "password"}
          />
            <span onClick={togglePasswordVisibility} className={styles.passwordButton}>
              {passwordShown ? <FiEye /> : <FiEyeOff />}
            </span>

            <div className={styles.iconContainer}>
            <HiOutlineLockClosed/>
            </div>

            
          </div>
          
          <div className={styles.forgotPassword}>
            Forgot Password?
          </div>
          

          <button className={styles.primaryButton}>Sign In </button>

          <div className={styles.or}>
            <hr className={styles.bar} />
            <span className='mx-3'>OR</span>
            <hr className={styles.bar} />
          </div>

          <button className={styles.googleButton}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo"></img> Continue with Google
          </button>

        </div>
    </main>
  );
};

export default SignIn;
