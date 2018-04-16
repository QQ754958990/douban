import * as React from "react";
import {Seach} from "./search/search_index";
import './header_style.scss';

export class Header extends React.Component<any> {
    render() {
        return (
            <header className="app-header">
                <Seach category={this.props.category} searchLick ={this.props.searchLick}/>
            </header>
        );
    }
}
