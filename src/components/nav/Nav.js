/**
 * Created by RuanChao on 2017/7/27.
 */
import  React, {Component} from 'react';
//导航栏 组件
export default class Nav extends Component{
    render() {
        return (
            <div className="ui menu">
                <div className="item">Nodes</div>
                <div className="item">Home</div>
                <div className="item">list</div>
            </div>
        )
    }
}