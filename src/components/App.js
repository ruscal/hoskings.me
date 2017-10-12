import React, {Component} from 'react';
import Title from './Title'
import Nav from './Nav'
import {NavLink, Route, Redirect} from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition';
import {sections, navSections} from './sections'

class App extends Component {
    render() {


        function mapStyles(styles) {
            return {
                opacity: styles.opacity,
                transform: `scale(${styles.scale})`,
            };
        }

        function bounce(val) {
            return spring(val, {
                stiffness: 330,
                damping: 22,
            });
        }
        const popTransitionConfig = { stiffness: 360, damping: 25 };



        const bounceTransition = {
            atEnter: {
                transitionIndex: 0,
                scale: 0.8,
                opacity: 0,
            },
            atLeave: {
                scale: spring(0.8, popTransitionConfig),
                opacity: spring(0, popTransitionConfig),
                transitionIndex: 2,
            },
            atActive: {
                scale: spring(1, popTransitionConfig),
                opacity: 1,
                transitionIndex: 1,
            },
            mapStyles: styles => ({
                position: styles.transitionIndex <= 1 ? 'relative' : 'absolute',
                width: '100%',
                height: '100%',
                transform: `scale(${styles.scale})`,
                opacity: styles.opacity,
            }),
        };


        const Section = (section)=>(props)=>{
            let Component = section.component;
            return <Component {...props} section={section} />;
        }



        return (
            <div className="App">
                <Title />
                <Nav sections={navSections} />
                <Route exact path="/" render={() => (
                    <Redirect to="/portfolio"/>
                )}/>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="section-wrapper"
                >
                    {sections.map(s =>  <Route key={s.name} path={s.path} component={Section(s)}  />)}
                </AnimatedSwitch>
                <a className="github-link" href="https://github.com/ruscal/hoskings.me"> <img src="/images/github/GitHub-Mark-Light-64px.png" alt="View on GitHub" /> <span>View on GitHub</span>  </a>
            </div>
        );
    }
}

export default App
