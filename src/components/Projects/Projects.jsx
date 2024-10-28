import styles from './Projectstyle.module.css';
import check from '../../assets/icons8-authentication-message-64.png';
import bot from '../../assets/icons8-bot-50.png';
import program from '../../assets/Gameimage.png';
import graph from '../../assets/icons8-graph-40.png';

function Projects() {
    return ( <section id="Projects" className={styles.container}>
        <h3> Projects</h3>
           

            <div classname="Projects">
                <img src={check} alt="Passcheck Icon" />
                <h4> Password Check </h4>
                <p> This is a simple password checker that checks if a password is strong or weak. It checks for the length of the password, if it contains a number, a special character, and if it contains a capital letter or digit. </p>
                
                <a href="https://github.com/Chrispyk23/PassCheck" target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                </div>

                <div classname="Projects">
                <h5> Discord Bots</h5>
                <img src={bot} alt="Bot Icon" />
                <p> 2 discords bots 1 to say hello to a user that joins and the other that says a joke when the user joins.</p>
                <a href="https://github.com/Chrispyk23/BOTS" target="_blank" rel="noopener noreferrer"> VIEW CODE</a>
                </div>

                <div classname="Projects">
                <h6> Translyvania Remake</h6>
                <img src={program} alt="Video game" />
                <p> Remake of the classic Transylvania game.I created the player movement implementing friction and I created the enemy behaviors.</p>
                <p>I set the alarm on the bone throw and incoprated the sin and cosine waves for the bat. </p>
                <a href="https://github.com/Chrispyk23/Transylvania-remake" target="_blank" rel="noopener noreferrer"> VIEW CODE</a>
                </div>
                

                <div classname="Projects">
                <h7> Pandas and Plotly graph</h7>
                <img src={graph} alt="graph" />
                <p>Implements pandas and plotly express to read a csv file and create a line graph from the information.Creates a x and y axis plus a title for the graph. </p>
                <a href="https://github.com/Chrispyk23/Transylvania-remake" target="_blank" rel="noopener noreferrer"> VIEW CODE</a>
                </div>

                <div classname="Projects">
                <h7>Networking Lab</h7>
                <p>Through the usage of VMWare and Wireshark.</p>
                <p>I conducted Packet Analysis, observed port behaviors, delt with client and server, and conduct captures.</p>
                <p>Observed MAC, source and destination ip addresses and lastly configured dhcp server.</p>
                </div>



            </section>
    )
};
export default Projects;



        

            
    