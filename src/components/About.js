import React, {Component} from 'react';
import Section from './Section'
import PageControls from './PageControls'

const About = (props)=>{
    return (
        <Section {...props}>
            <div className="page">
                <header>
                    <h1>about</h1>
                </header>
                <div className="section-content">
                    <div className="about-message">
                        <strong>Hello, my name is Russell Hoskings.</strong>
                        <p>I am full stack developer and software architect living just outside Bath, UK.</p>
                        <p>Currently I am Technical Director of <a href="http://wearediscover.com">Discover Corporation</a> where I lead the development of all our products and software solutions.</p>
                       {/* <p>Product ands projects I have worked on can be viewed on the <a href="/portfolio">portfolio</a> page.</p>
                        <p>Personal work and experiments can be found on the  <a href="/labs">labs</a> page.</p>*/}
                        <p>If you wish to contact me, please email <a href="mailto:russ@hoskings.me">russ@hoskings.me</a></p>
                        <p>And finally, <a href="http://witterpedia.net/wiki/index.php?title=Jason_Isaacs">Hello to Jason Isaacs</a></p>
                    </div>
                    <div className="about-me">
                        <img src="/images/russ.jpg" />
                    </div>
                </div>
                <footer>
                    <PageControls previous={{ path: "/labs", title: "labs"}} next={{ path: "/portfolio", title: "portfolio"}} />
                </footer>
            </div>
        </Section>
    );
}

export default About