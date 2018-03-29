import {Component} from "react";
import './list_style.css';

export class Li extends Component {


    clickDetails( ) {
        let book: any = this.props.children;

        let details_html = `<article class="item-article-details">

                                <header class="item-header-details">
                                     <p class="item-header-getback" onclick="document.getElementsByClassName('item-article-details')[0].style.display='none'"><图书</p>
                                     <h3 class="item-title-details">${book.title}</h3>
                                </header>
                                
                                <div class="item-main-details">
                                    <div class="item-div-list" >
                                        <div class='item-div-li item-list-left'>
                                            <img class='item-li-image' src=${book.image}></img>
                                        </div>
                                        <aside class='item-div-li item-list-right'>
                                            <p class='item-name-details'>名称:${book.title}</p>
                                            <p class='item-author-details'>作者:${book.author}</p>
                                            <p class='item-publisher-details'>出版社:${book.publisher}</p>
                                             <p class='item-pubdate--details'>时间:${book.pubdate}</p>
                                             <p class='item-average-details'>评分:${book.average}</p>
                                             <p class='item-price-details'>价钱:${book.price}</p>
                                            <div class='item-tags-details'>${
                                                book.tags.map(function (item: any, index: number) {
                                                    return `<p class='item-p-tags' key=${index}>${item}</p>`
                                                })
                                            }</div>                                     
                                        </aside>
                                        <div class="item-list-footer">
                                            <hr/>
                                            <textarea readonly>${book.summary}</textarea>
                                        </div>
                                    </div>
                                </div>
                            
                            </article>`;

        let showDetails = document.getElementsByClassName('showDetails')[0];

        showDetails.innerHTML = details_html;

    }

    componentDidMount() {

    }

    render() {

        let book: any = this.props.children;
        return (
            <div className="main-div-list" onClick={this.clickDetails.bind(this)}>
                <div className='main-div-li main-list-left'>
                    <img className='main-li-image' src={book.image}></img>
                </div>
                <aside className='main-div-li main-list-right'>
                    <p className='main-li-name'>名称:{book.title}</p>
                    <p className='main-li-author'>作者:{book.author}</p>
                    <div className='main-li-tags'>{
                        book.tags.map(function (item: any, index: number) {
                            return <p className={'main-item-tags'} key={index}>{item}</p>
                        })
                    }</div>
                    <p className='main-li-average'>评分:{book.average}</p>
                    <p className='main-li-pubdate'>时间:{book.pubdate}</p>
                </aside>
            </div>
        );
    }
}
