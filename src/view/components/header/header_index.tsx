import * as React from "react";
import {Seach} from "./search/search_index";
import './header_style.css';

export class Header extends React.Component {
    render() {
        let searchLick  = this.props.children
        return (
            <header className="app-header">
                <Seach children={searchLick}/>
            </header>
        );
    }
}
