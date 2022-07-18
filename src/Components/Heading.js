import React from "react";
import "./Style.css"
import { SocialIcon } from 'react-social-icons';

export default function Heading (){
    return (
            <div className="divChild">
                <img src = {require("../images/profile.jpeg")}  alt = "" className="profile"/>
                <h1 className="H1">Swikriti Khadke</h1>
                <p className="fDev">Frontend Developer</p>
                <p className="website">swikriti04.github.io/Mywebsite</p>
                <div>
                    
                    <button className="email"> <SocialIcon url= "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="eIcon" style={{ height: 25, width: 25, marginRight: 5 }}/> Email </button>
                    <button className="linkedin"> <SocialIcon url= "https://www.linkedin.com/in/swikriti-khadke-2a7468193/" bgColor="white" style={{ height: 25, width: 25, marginRight: 5 }}/> Linkedin </button>
                </div>
                <h2 className="hAbout">About</h2>
                <p className="about">I am a frontend developer with a particular interest in making things creative and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="hInterest">Interests</h2>
                <p className="interest">Guitar. Musical instruments. Reader. Internet fanatic. Basketball player. Singing. Travel geek. Technophile. Adventure fanatic.</p>
                <div className="footer">
                    <SocialIcon url= "https://twitter.com/Musiclusive1" style={{ height: 50, width: 50, marginRight: 27, marginTop: 14}}/>
                    <SocialIcon url= "https://www.facebook.com/swikriti.khadke/" style={{ height: 50, width: 50, marginRight: 27, marginTop: 14}}/>
                    <SocialIcon url= "https://www.instagram.com/swikriti_khadke/" style={{ height: 50, width: 50, marginRight: 27, marginTop: 14}}/>
                    <SocialIcon url= "https://github.com/swikriti04" bgColor="white" style={{ height: 50, width: 50, marginTop: 14}}/>
                </div>
            </div>
    )
}