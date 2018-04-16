import * as React from 'react'
import './search_style.scss'
import Events = NodeJS.Events;

export class Seach extends React.Component<any> {
    shake: any
    category: string

    constructor() {
        super({})
        this.category = this.props.category
    }

    handle(e: Events) {

        const self = this
        if (this.shake != undefined) {
            clearTimeout(this.shake)
        }
        self.shake = setTimeout(function () {

            let input_value: any = self.refs.searchInput

            self.props.searchLick(input_value.value, self.props.category)

        }, 500)

    }

    showText(category: string) {

        /*let input_value: any = this.refs.searchInput
        if (input_value) {
             if (this.category != category) {
                 input_value.value = ''
                 this.category = category
             }
         }*/


        switch (category) {
            case 'books':
                return '\t书名、作者、ISBN'
            case 'movies':
                return '\t电影、影人、影院、电视剧'
            case 'musics':
                return '\t唱片名、表演者、条码、ISRC'
        }
    }

    componentDidUpdate() {
        let searchInput: any = this.refs.searchInput
        searchInput.focus()
    }

    render() {
        return (
            <div className="search_div_container">
                <span className='search-img-search'></span>
                <input type="search" className='search-input-search' ref='searchInput'
                       datatype={this.props.category} placeholder={this.showText(this.props.category)}/>
                <button className='search-button-search' onClick={this.handle.bind(this)}>搜索</button>
            </div>
        )
    }
}
