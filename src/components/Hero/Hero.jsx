import styles from './HeroStyles.module.css';
import selfimg from '../../assets/IMG_9612.png';
import linkediniamge from '../../assets/icons8-linkedin-50.png';
import githubiamge from '../../assets/icons8-github-50.png';

function hero() {

    return(
    <section id="self" className={styles.container}>
        <div>
        <img 
         classname={styles.self} 
         src={selfimg}
         alt= "Me Christopher Knox" 
         />
        </div>
        
        <div classnmae = {styles.Text}>

        <h1> Christopher Knox </h1>
        <h2> Tech Talent </h2>
        <span>

            <a href= "https://www.linkedin.com/in/chris-knox-66270011a/" target="_blank">
                <img src={linkediniamge} alt="Linkedin Icon" />
            </a>
            <a href= "https://github.com/Chrispyk23?tab=repositories" target="_blank">
                <img src={githubiamge} alt="Github Icon" />
            </a>
        </span>
        <p>I graduated with my Bachelor's of science in Computer science from Jacksonville State 
            University in 2022. My time in University has given me versatility in multiple aspects of 
            Computer science including software development, game design, computer networking, 
            web design and technical writing. So i will list off most of these projects with either pictures or github links I have done as proof of my experience and knowledge.
        </p>
        </div>
        </section>

    );
}

export default hero;