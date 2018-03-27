import * as React from "react";
import './main_style.css';
import {Li} from "./list/list_index";
import {type} from "os";


interface BookData {
    image: string; //图片
    title: string; //书名
    author: string;//作者
    average: string; //评分
    pubdate: string;//发布时间
    //getbook(keyword: string): Promise<Response>; //获取书籍信息
}


export class Main extends React.Component {


    render() {
        let children:any = this.props.children;
        let books = children.books;
        return (
            <main className="app-main">
                {
                    books.map(function (item: BookData, index: number) {
                          return <Li children={item} key={index}/>
                    })
                }
            </main>
        );
    }
}

