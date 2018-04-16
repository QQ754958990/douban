import * as React from "react";
import './search_style.css';
import Events = NodeJS.Events;

export class Seach extends React.Component<any> {
    shake: any;
    category:number;
    constructor(){
        super({});
        this.category = 2;
    }

    handle(e: Events) {

        const self = this;
        if (this.shake != undefined) {
            clearTimeout(this.shake);
        }
        self.shake = setTimeout(function () {

            let children: any = self.props.children;
            let input_value:any = self.refs.searchInput;

            children.fn(input_value.value, children.state.category);

        }, 500);

    }

    showText(category: number,self:any) {

        let input_value:any = self.refs.searchInput;

        if(input_value){
            if(this.category != category){
                input_value.value = '';
                this.category = category;
            }
        }


        switch (category) {
            case 1:
                return '\t书名、作者、ISBN';
            case 2:
                return '\t电影、影人、影院、电视剧';
            case 3:
                return '\t唱片名、表演者、条码、ISRC';
        }
    }

    componentDidUpdate() {
        let searchInput: any = this.refs.searchInput;
        searchInput.focus();
    }

    render() {
        const children: any = this.props.children;
        return (
            <div className="search_div_container">
                <span className='search-img-search'></span>
                <input type="search" className='search-input-search' ref='searchInput'
                       datatype={children.state.category} placeholder={this.showText(children.state.category,this)}/>
                <button className='search-button-search' onClick={this.handle.bind(this)}>搜索</button>
            </div>
        );
    }
}
