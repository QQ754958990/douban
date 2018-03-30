import * as React from "react";
import './app_style.css';

const fetchJsonp = require('fetch-jsonp');
import {Header} from "./components/header/header_index";
import {Main} from "./components/main/main_index";
import {Footer} from "./components/footer/footer_index";

export class App extends React.Component {

    constructor() {
        super({});
        this.state = {
            category: 1,
            showData: [{}]
        };
    }

    componentDidMount(){
        const _self = this;
        this.getMovie('林志颖').then(function (movies:any) {
            _self.setState({
                category: 2,
                showData: movies
            });
        });
    }

    getDefaultBooks(): Promise<Response> {
        return new Promise(function (resolve, reject) {
            let url = `https://api.douban.com/v2/book/series/9527/books`;
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

    getBooks(keyword: string): Promise<Response> {
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

    getMovie(keyword:string){
        return new Promise(function (resolve, reject) {
            let url = `https://api.douban.com/v2/movie/search?q=${keyword}`;
            fetchJsonp(url, {
                    method: 'get'
                }
            ).then(function (response: any) {
                return response.json();
            }).then(function (json: any) {
                resolve(json.subjects);
            }).catch(function (ex: any) {
                console.log('parsing failed', ex)
            })
        });
    }

    getMovieTop250(): Promise<Response> {
        return new Promise(function (resolve, reject) {
            let url = `https://api.douban.com/v2/movie/top250`;
            fetchJsonp(url, {
                    method: 'get'
                }
            ).then(function (response: any) {
                return response.json();
            }).then(function (json: any) {
                resolve(json.subjects);
            }).catch(function (ex: any) {
                console.log('parsing failed', ex)
            })
        });

    }

    getMusic(keyword:string){
        return new Promise(function (resolve, reject) {
            let url = `https://api.douban.com/v2/music/search?q=${keyword}`;
            fetchJsonp(url, {
                    method: 'get'
                }
            ).then(function (response: any) {
                return response.json();
            }).then(function (json: any) {
                resolve(json.musics);
            }).catch(function (ex: any) {
                console.log('parsing failed', ex)
            })
        });
    }

    searchLick(keyword: string,category:number): void {
        const _self = this;
        switch (category){
            case 1:
                _self.getBooks(keyword).then(function (books: any) {
                    _self.setState({
                        category: 1,
                        showData: books
                    });
                });
                break;
            case 2:
                _self.getMovie(keyword).then(function (movies: any) {
                    _self.setState({
                        category: 2,
                        showData: movies
                    });
                });
                break;
            case 3:
                _self.getMusic(keyword).then(function (musics: any) {
                    _self.setState({
                        category: 3,
                        showData: musics
                    });
                });
                break
        }

    }

    showCategory(category: number) {
        const  _self = this;
        switch (category){
            case 1:
                this.getBooks('林志颖').then(function (books:any) {
                    _self.setState({
                        category: 1,
                        showData: books
                    });
                });
                break;
            case 2:
                this.getMovie('林志颖').then(function (movies:any) {
                    _self.setState({
                        category: 2,
                        showData: movies
                    });
                });
                break;
            case 3:
                _self.getMusic('林志颖').then(function (musics:any) {
                    _self.setState({
                        category: 3,
                        showData: musics
                    });
                });
                break
        }
    }

    render() {
        return (
            <div className="douban-app">
                <article className={'showDetails'}></article>
                <Header children={{
                    state:this.state,
                    fn:this.searchLick.bind(this)
                }}/>
                <Main   children={this.state}/>
                <Footer children={
                    ({
                        state:this.state,
                        fn:this.showCategory.bind(this)
                    })
                }/>
            </div>
        );
    }
}





