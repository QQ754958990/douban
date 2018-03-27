import * as React from "react";
import './list_style.css';


export class Li extends React.Component {
    render() {
        var book: any = this.props.children;
        return (
            <div className="main-div-list">
                <div className='main-div-li main-list-left'>
                    <img className='main-li-image' src={book.image}></img>
                </div>
                <div className='main-div-li main-list-right'>
                    <div className='main-li-name'>名称:{book.title}</div>
                    <div className='main-li-author'>作者:{book.author}</div>
                    <div className='main-li-tags'>{

                        book.tags.map(function (item: string, index: number) {
                            return <p className={'main-item-tags'}>*{item}*</p>
                        })

                    }</div>
                    <div className='main-li-average'>评分:{book.average}</div>
                    <div className='main-li-pubdate'>时间:{book.pubdate}</div>
                </div>
            </div>
        );
    }
}
