/**
 * Created by RuanChao on 2017/6/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'nav/Nav.js';
import CardWrap from  'cardwrap/CardWrap.js';
import PropTypes from 'prop-types';

//import semantic from 'semantic-ui';
require('./common/style/main.css');
require("../semantic/semantic.css");

let Component = React.Component;

//数据
let data = [
    {
        imgSrc: require('img/card.png'),
        name: 'Matt',
        meta: 'Frideds',
        desc: 'Matthew is an insterior ',
        joined: 2016,
        likeNum: 45
    },
    {
        imgSrc: require('img/card.png'),
        name: 'Matt',
        meta: 'Frideds',
        desc: 'Matthew is an insterior ',
        joined: 2012,
        likeNum: 51
    },
    {
        imgSrc: require('img/card.png'),
        name: 'Matt',
        meta: 'Frideds',
        desc: 'Matthew is an insterior ',
        joined: 2015,
        likeNum: 12
    },
    {
        imgSrc: require('img/card.png'),
        name: 'Matt',
        meta: 'Frideds',
        desc: 'Matthew is an insterior ',
        joined: 2013,
        likeNum: 52
    }
];

class App extends Component{

    getChildContext(){
        return {
            et: 'Died'
        }
    }

    render(){

        let {data} = this.props;
        return (
            <div className="ui container">
                <div className="ui dividing" />
                <Nav/>
                <CardWrap data={data} />
            </div>
        )
    }
}

App.childContextTypes = {
    et: PropTypes.string
}

//页面
ReactDOM.render(
    <App data={data} />,
    document.getElementById('root')
);

if (module.hot){
    module.hot.accept()
}