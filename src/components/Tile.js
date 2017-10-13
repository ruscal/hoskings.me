import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class Tile extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
        this.show = this.show.bind(this);
    }

    componentWillMount(){
        let delay = 300;
        this.cancelToken =  setTimeout(this.show, this.props.index * delay + delay);
    }

    componentWillUnmount(){
        if(this.cancelToken)
            clearTimeout(this.cancelToken);
    }

    show(){
        this.setState({show:true});
    }

    render(){
        const {className, path, project} = this.props;

        const renderTechnology = (technology, index)=> {
            return (
                <span key={index} className="technology">
                    {technology}
                </span>
            )
        }

        let cssClass = ["tile"];
        if(className)
            cssClass.push(className);
        if(this.state.show)
            cssClass.push("show");

        let style = {
            backgroundImage: project.caption.image ? 'url(' + project.caption.image + ')' : null
        };

        return (
            <Link to={path} className={cssClass.join(" ")} style={style}>
                <div className="caption">
                    <h3>{project.title}</h3>
                    <p>{project.caption.text}</p>
                    <div className="technologies">
                        {project.technologies.items.map(renderTechnology)}
                    </div>
                </div>
            </Link>
        );
    }
}

Tile.propTypes = {
    className: PropTypes.string,
    path: PropTypes.string.isRequired,
    project: PropTypes.object.isRequired
};


export default Tile