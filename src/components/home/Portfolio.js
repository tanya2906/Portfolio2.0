import React from "react";
import './Portfolio.css';
export default function Portfolio() {
    return(
        <div className="portfolio">
            <div className="aboutMe">
                <h2>About Me</h2>
                <p>Hello, I'm Tanya Saini, a passionate computer science engineering student hailing from the picturesque town of Una in Himachal Pradesh. I am on a thrilling journey to become a proficient front-end developer and am excited to share my digital adventures with you. As an aspiring CSE student, I'm dedicated to mastering the art of crafting immersive web experiences through code, design, and creativity. Join me on this exciting path as I transform ideas into captivating digital realities. Welcome to my world of web development!</p>
            </div>
            <div className="moreAbout">
                
                <p>I am an aspiring front-end developer, eager to embark on a journey of learning and growth in the world of web development. Currently pursuing my computer science engineering degree, I have a strong foundation in the basics of programming and am enthusiastic about expanding my skills.

                <br/><br/>I have started my journey by learning HTML, CSS, and JavaScript, the fundamental building blocks of web development. While I'm new to the field, I am passionate about creating visually appealing and interactive web experiences. I may be a beginner, but I'm dedicated to honing my skills and embracing the challenges that come with it. 
                <br/> <br/>My goal is to become a proficient front-end developer, and I'm excited to take my first steps in this exciting field. I'm open to new learning opportunities, collaboration, and mentorship as I work towards becoming a valuable contributor in the world of web development. Let's explore the possibilities together!</p>
            </div>
            <div className="certi">
                <h2>Certifications</h2>
                <div><a href="/image/TanyaSaini.INT.jpg" target="__blank"><img src="/image/TanyaSaini.INT.jpg" alt="" className="crt" /></a>
                <a href="/image/TanyaSaini.CC.jpg" target="__blank"><img src="/image/TanyaSaini.CC.jpg" alt="" className="crt"/></a>
                </div>
            </div>
            <div className="res">
                <h2>Resume</h2>
                <p><a href="/image/Tanya_Saini.pdf" target="__blank">LINK</a></p>
            </div>
            <div className="cont">
                <h2>Contact Information</h2>
                <div>
                    <p>E-mail: tanyasaini2906@gmail.com</p>
                    <p><a href="https://www.linkedin.com/in/tanya-saini-39797524b" target="__blank">LinkedIN</a></p>
                    <p><a href="https://github.com/tanya2906" target="__blank">GitHub</a></p>
                </div>
            </div>
        </div>
    );
}
