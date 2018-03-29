import * as React from "react";
import './app_style.css';
const fetchJsonp = require('fetch-jsonp');
import {Header} from "./components/header/header_index";
import {Main} from "./components/main/main_index";
import {Footer} from "./components/footer/footer_index";
import {IBookData} from "../model/book_data";


export class App extends React.Component implements IBookData {
    image: string;
    title: string;
    publisher:string;
    tags: string[ ];
    author: string;
    average: string;
    pubdate: string;
    summary:string;
    price:string;

    constructor() {
        super({});

        this.image = 'https://img3.doubanio.com/mpic/s27348744.jpg';
        this.title = '求魔';
        this.tags = ['玄幻', '文学', '小说'];
        this.author = '耳根';
        this.publisher = '我是出版社';
        this.average = '6.8';
        this.pubdate = '2013-12';
        this.summary ='我是摘要';
        this.price = '98.5';

        this.state = {
            books: [
                {
                    image: this.image,
                    title: this.title,
                    tags: this.tags,
                    author: this.author,
                    average: this.average,
                    pubdate: this.pubdate,
                    summary: this.summary,
                    publisher: this.publisher,
                    price : this.price
                }
            ]
        };
    }

    getbook(keyword: string): Promise<Response> {
        return new Promise(function (resolve, reject) {
            let url = `https://api.douban.com/v2/book/search?q=${keyword}`;
            fetchJsonp(url, {
                    method: 'get'
                }
            ).then(function (response: any) {
                return response.json();
            }).then(function (json: any) {
                resolve(json.books);
            }).catch(function (ex: any) {
                console.log('parsing failed', ex)
            })
        });

    }

    searchLick(keyword: string): void {
        const _self = this;
        this.getbook(keyword).then(function (books: any) {
            _self.setState({
                books: books
            });

        });
    }

    render() {
        return (
            <div className="douban-app">
                <article className={'showDetails'}></article>
                <Header children={this.searchLick.bind(this)}/>
                <Main children={this.state}/>
                <Footer/>
            </div>
        );
    }
}





