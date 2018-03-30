import * as React from "react";
import './search_style.css';
import Events = NodeJS.Events;

export class Seach extends React.Component {

    handle(e:Events){
        let children:any  = this.props.children;
        let input_value = (document.getElementsByClassName('search-input-search')[0] as HTMLInputElement).value;

        children.fn(input_value,children.state.category);
    }

    showText(category:number){
        switch (category){
            case 1:
                return '书名、作者、ISBN';
            case 2:
                return '电影、影人、影院、电视剧';
            case 3:
                return '唱片名、表演者、条码、ISRC';
        }
    }

    componentDidUpdate(){
        let searchInput:any = this.refs.searchInput;
        searchInput.focus();
    }

    render() {
        const  children:any = this.props.children;
        return (
            <div className="search_div_container">
                <span className='search-img-search'></span>
                <input type="search" className='search-input-search' ref='searchInput'  datatype={children.state.category} placeholder={this.showText(children.state.category)}/>
                <button className='search-button-search' onClick={this.handle.bind(this)}>搜索</button>
            </div>
        );
    }
}
