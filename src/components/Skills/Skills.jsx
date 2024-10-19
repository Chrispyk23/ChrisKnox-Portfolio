import styles from './Skills.module.css';
import Python from '../../assets/icons8-python-48.png';
import HTML   from '../../assets/icons8-html-48.png';
import react  from '../../assets/icons8-react-40.png';

    function Skills () {
      return ( 
        <section id="Skills" className={styles.container}>
        <br></br>
         <h1> Skills</h1>
         
         <br></br>
            
            
            <div classname="Skills">
                
            <p>HTML,CSS,Javascript,VMWare,Wireshark,Java,Python</p>
              
              <p> React,C++,Gamemaker,Unity,MySQL,Microsoft Office Suite,</p>
            

            <p>Blender,Vite,Agile Development,SDLC,AJAX,REST API's,JSON,and CI/CD </p>
                

            </div>

            </section>
    );   
}
    export default Skills;