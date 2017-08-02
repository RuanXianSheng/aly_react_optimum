/**
 * Created by RuanChao on 2017/7/27.
 */
import  React, {Component} from 'react';
import Card from 'card/Card.js';

//卡片集合
export default class CardWrap extends Component{
    render() {
        let {data} = this.props;
        let cards = data.map((elt, i)=>{
            return ( <Card key={i} {...elt}/>)
        });

        return (
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}