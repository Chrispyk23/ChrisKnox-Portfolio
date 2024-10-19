import styles from './Contact.module.css';
import email from '../../assets/EMAIL.png';
import phone from '../../assets/icons8-cellphone-50.png';
import linkediniamge from '../../assets/icons8-linkedin-50.png';
        function Contact() {
            return (
                <section id="Contact" className={styles.container}>
                <br></br>
                 <h1> Contact</h1>
                 <p>Any recruiters, potential collaborators, or just general inquriers please contact me at:</p>
                 <img src={email} alt="Email" />
                 <p><a href="mailto: chrisknox01@gmail.com">Chrisknox01@gmail.com</a></p>
                 <br></br>
                 <img src={phone} alt="Phone" />
                 <p><a href="tel: 2054758063">Feel free to call</a></p>
                 <img src={linkediniamge} alt="Linkedin Icon" />
                 <p><a href= "https://www.linkedin.com/in/chris-knox-66270011a/" target="_blank">View profile</a></p>
                <br></br>
                <p>Thank you for visiting my portfolio!</p>
                <p>Images besides the Translyvania project belong to Icons8.com! I take no credit for them!</p>
                
            </section>

            );
        }
        export default Contact;