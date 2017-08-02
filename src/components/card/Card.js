/**
 * Created by RuanChao on 2017/7/27.
 */
import  React, {Component} from 'react';
import PropTypes from 'prop-types';

let propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    meat: PropTypes.string,
    desc: PropTypes.string,
    joined: PropTypes.number,
    likeNum: PropTypes.number
};
let contextTypes = {
    et: PropTypes.string
}
//卡片组件
export default class Card extends Component{

    constructor(){
        super();
        this.state = {
            isHeartON :false
        };

        this.heardClick = this.heardClick.bind(this);
    }
    heardClick(){
            let {isHeartON} = this.state;
            isHeartON = !isHeartON;
            this.setState({
                isHeartON
            })
    }

    render() {
        let {imgSrc, name, meat, desc, joined, likeNum} = this.props;
        let {et} = this.context;
        let {isHeartON} = this.state;
        let heartClass = isHeartON ? '': "empty";
        return (
            <div className="ui card">
                <div className="image">
                    <img src= {imgSrc} alt=""/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href="">{meat}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span className="right floated created"> {`${et} in ${joined}`} </span>
                    <span>
                        <i
                            className={`${heartClass} heart icon`}
                            onClick={this.heardClick}
                        ></i> {`${likeNum} Like`}
                    </span>
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;