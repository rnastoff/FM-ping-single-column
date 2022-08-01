import { useState } from 'react';

import useForm from '../hooks/useForm';
import validate from '../hooks/validateInfo';

import styles from './Ping.module.css';

import Card from './Card';

import logo from '../images/logo.svg';
import illustration from '../images/illustration-dashboard.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const Ping = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    console.log(errors.email)
    setIsSubmitted(true);
  }

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  const errorBorder = errors.email ? styles.errorBorder : "";

  return (
    <Card>
      <div className={styles.top}>
        <div className={styles.logo}><img src={logo} alt="Ping" /></div>
        <h1>We are launching <span>soon!</span></h1>
        <h2>Subscribe and get notified</h2>

        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Your email address..."
            value={values.email}
            onChange={handleChange}
            className={errorBorder}
          />
          {errors.email && <div className={styles.errorMobile}>{errors.email}</div>}
          <button>Notify Me</button>
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </form>
      </div>

      <div className={styles.bottom}>
        <img className={styles.illustration} src={illustration} alt="illustration" />

        <div className={styles.socialMediaIcons}>
          <a href="#" className={styles.smIcon}>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" className={styles.icon} />
          </a>
          <a href="#" className={styles.smIcon}>
            <FontAwesomeIcon icon="fa-brands fa-twitter" className={styles.icon} />
          </a>
          <a href="#" className={styles.smIcon}>
            <FontAwesomeIcon icon="fa-brands fa-instagram" className={styles.icon} />
          </a>
        </div>

        <div className={styles.copyright}>© Copyright Ping. All rights reserved.</div>
      </div>

    </Card>
  )
}

export default Ping;