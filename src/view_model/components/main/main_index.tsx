import * as React from 'react'
import './main_style.scss'
import './list_style.scss'
import Books from './Books/books_index'
import Movies from './movies/movies_index'
import Musics from './musics/musics_index'

export class Main extends React.Component<any> {
    constructor() {
        super({})
        this.state = {
            keyword: this.props.keyword,
            category: this.props.category,
            component: <Movies category={this.props.category} keyword={this.props.keyword}/>
        }
    }

    componentWillReceiveProps(newProps: any) {
        this.category_component(newProps)
    }

    /**
     * 获取展示类别组件
     */
    category_component(props: any) {
        const self = this
        const category = props.category
        switch (category) {
            case 'books':
                self.setState({
                    category: props.category,
                    keyword: props.keyword,
                    component: <Books category={props.category} keyword={props.keyword}/>
                })
                break
            case 'movies':
                self.setState({
                    category: props.category,
                    keyword: props.keyword,
                    component: <Movies category={props.category} keyword={props.keyword}/>
                })
                break
            case 'musics':
                self.setState({
                    category: props.category,
                    keyword: props.keyword,
                    component: <Musics category={props.category} keyword={props.keyword}/>
                })
                break

        }
    }

    render() {
        const state: any = this.state
        return (
            <main className="app-main">{
                state.component
            }</main>
        )
    }
}

