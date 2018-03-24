import * as React from "react";
import './style.css';

export class App extends React.Component {
    constructor(message: string) {
        super({});
    }
    render() {
        return (
            <div className="app">
                <h1>从零开发口袋豆瓣</h1>
            </div>
        );
    }
}



