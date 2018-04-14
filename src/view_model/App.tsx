import * as React from 'react'
import './app_style.css'
import getData from './getdata'
import {Header} from './components/header/header_index'
import {Main} from './components/main/main_index'
import {Footer} from './components/footer/footer_index'

export class App extends React.Component {

    constructor() {
        super({})
        this.state = {
            category: 1,
            showData: [{}]
        }
    }

    componentDidMount() {
        const _self = this
        getData(`https://api.douban.com/v2/movie/search?q=电影`).then(function (data: any) {
            _self.setState({
                category: 2,
                showData: data.subjects
            })
        })
    }

    getBooks(keyword: string) {
        let url = `https://api.douban.com/v2/book/search?q=${keyword}`
        return getData(url);


    }

    getMovie(keyword: string) {

        let url = `https://api.douban.com/v2/movie/search?q=${keyword}`
        return getData(url);

    }

    getMusic(keyword: string) {

        let url = `https://api.douban.com/v2/music/search?q=${keyword}`
        return getData(url);

    }

    searchLick(keyword: string, category: number): void {
        const _self = this
        switch (category) {
            case 1:
                _self.getBooks(keyword).then(function (data: any) {
                    _self.setState({
                        category: 1,
                        showData: data.books
                    })
                })
                break
            case 2:
                _self.getMovie(keyword).then(function (data: any) {
                    _self.setState({
                        category: 2,
                        showData: data.subjects
                    })
                })
                break
            case 3:
                _self.getMusic(keyword).then(function (data: any) {
                    _self.setState({
                        category: 3,
                        showData: data.musics
                    })
                })
                break
        }
    }

    showCategory(category: number) {
        const _self = this
        switch (category) {
            case 1:
                this.getBooks('图书').then(function (data: any) {
                    _self.setState({
                        category: 1,
                        showData: data.books
                    })
                })
                break
            case 2:
                this.getMovie('电影').then(function (data: any) {
                    _self.setState({
                        category: 2,
                        showData: data.subjects
                    })
                })
                break
            case 3:
                _self.getMusic('音乐').then(function (data: any) {
                    _self.setState({
                        category: 3,
                        showData: data.musics
                    })
                })
                break
        }
    }

    render() {
        return (
            <div className="douban-app">
                <article className={'showDetails'}></article>
                <Header children={{
                    state: this.state,
                    fn: this.searchLick.bind(this)
                }}/>
                <Main children={this.state}/>
                <Footer children={
                    ({
                        state: this.state,
                        fn: this.showCategory.bind(this)
                    })
                }/>
            </div>
        )
    }
}





