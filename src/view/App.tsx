import * as React from "react";

const fetchJsonp = require('fetch-jsonp');
import {Header} from "./components/header/header_index";
import {Main} from "./components/main/main_index";
import {Footer} from "./components/footer/footer_index";

interface BookData {
    image: string; //图片
    title: string; //书名
    tags:string[ ];//标签
    author: string;//作者
    average: string; //评分
    pubdate: string;//发布时间
}


export class App extends React.Component implements BookData {
    image:string;
    title:string;
    tags : string[ ];
    author:string;
    average:string;
    pubdate:string;
    constructor(  ) {
        super({});

        this.image = 'https://img3.doubanio.com/mpic/s27348744.jpg';
        this.title = '求魔';
        this.tags = ['玄幻','文学','小说'],
        this.author = '耳根';
        this.average = '6.8';
        this.pubdate = '2013-12';

        this.state = {
            books:[
                {
                    image: this.image,
                    title: this.title,
                    tags: this.tags,
                    author: this.author,
                    average: this.average,
                    pubdate: this.pubdate,
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

    sortData(data: any[]): BookData[ ] {
        let books: BookData[ ] = [data[0]];

        function getTags(tags:any):string[ ]{
            let arrays: string[] = [tags[0].title];
            tags.map(function (item: any, index: number) {
                if (index) {
                    arrays.push(item.title);
                }
            });

            arrays.shift();
            return arrays;
        }

        data.map(function (item: any, index: number) {
            if (index) {
                var book: BookData = {
                    image: item.image,
                    title: item.title,
                    tags : getTags(item.tags),
                    author: item.author[0],
                    average: item.rating.average,
                    pubdate: item.pubdate,
                };

                books.push(book);
            }
        });

        books.shift();

        return books;

    }

    searchLick(keyword: string): void {
        const _self = this;
        this.getbook(keyword).then(function (books: any) {
            let data:BookData[ ] = _self.sortData(books);
            _self.setState({
                books:data
            });

        });
    }

    render() {
        return (
            <div className="douban-app">
                <Header children={this.searchLick.bind(this)}/>
                <Main children={this.state}/>
                <Footer/>
            </div>
        );
    }
}





