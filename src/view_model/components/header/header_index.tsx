import * as React from "react";
import {Seach} from "./search/search_index";
import './header_style.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <Seach children={this.props.children}/>
            </header>
        );
    }
}
