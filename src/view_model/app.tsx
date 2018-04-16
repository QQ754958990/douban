import * as React from 'react'
import './app_style.scss'
import getData from './getdata'
import {Header} from './components/header/header_index'
import {Main} from './components/main/main_index'
import {Footer} from './components/footer/footer_index'

export class App extends React.Component {
    category: string
    keyword: string

    constructor() {
        super({}, {})
        this.category = 'movies'
        this.keyword = '大话西游'
        this.state = {
            category: this.category,
            keyword: this.keyword
        }
    }

    /**
     *  展示类别
     * @param {string} keyword
     * @param {string} category
     */
    showCategory(keyword: string, category: string) {
        this.setState({
            category: category,
            keyword: keyword
        })
    }

    /**
     * 渲染器
     * @returns {any}
     */
    render() {
        const state: any = this.state
        return (
            <div className="douban-app">
                <article className={'showDetails'}></article>
                <Header category={state.category} keyword={state.keyword} searchLick={this.showCategory.bind(this)}/>
                <Main category={state.category} keyword={state.keyword}/>
                <Footer category={state.category} keyword={state.keyword} showCategory={this.showCategory.bind(this)}/>
            </div>
        )
    }
}





