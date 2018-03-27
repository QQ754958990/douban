import * as React from "react";
import * as ReactDOM from "react-dom";
import './footer_style.css';

export class Footer extends React.Component {

    render() {
        return (
            <footer className="app-footer">
                <ul className={'appfooter-ul-item'}>
                    <li><div id='appfooter-img-book'><p>图书</p></div></li>
                    <li><div id='appfooter-img-movie'><p>电影</p></div></li>
                    <li><div id='appfooter-img-music'><p>音乐</p></div></li>
                </ul>
            </footer>
        );
    }
}
