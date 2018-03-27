import * as React from "react";
import './search_style.css';
import Events = NodeJS.Events;

export class Seach extends React.Component {

    handle(e:Events){

        let searchLick:any  = this.props.children;
        let input_value = (document.getElementsByClassName('search-input-search')[0] as HTMLInputElement).value;

        searchLick(input_value);

    }

    render() {
        return (
            <div className="search_div_container">
                <div className='search-img-search'></div>
                <input type="search" className='search-input-search' placeholder="书名、作者、ISBN"/>
                <button className='search-button-search' onClick={this.handle.bind(this)}>搜索</button>
            </div>
        );
    }
}
