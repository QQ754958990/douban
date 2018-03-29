import * as React from "react";
import './main_style.css';
import {Li} from "./list/list_index";

export class Main extends React.Component {

    sortData(data: any, fn: any) {
        return data.map(function (item: any, index: number) {

            var book: any = {
                image: item.image || '',
                title: item.title || '',
                tags: item.tags ? getTags(item.tags) : '',
                author: item.author ? item.author[0] : '',
                average: item.rating ? item.rating.average : '',
                pubdate: item.pubdate || '',
                summary: item.summary || '',
                publisher: item.publisher || '',
                price: item.price || ''
            };

            return fn(book, index);

        });

        function getTags(tags: any): string[ ] {
            let setTags: string[] = ['我需要先占个位置'];
            tags.map(function (item: any, index: number) {
                if (index < 3) {
                    setTags.push(item.title);
                }
            });
            setTags.shift();
            return setTags;
        }

    }

    render() {
        const _self = this;
        let children: any = this.props.children;
        let books = children.books;
        return (
            <main className="app-main">
                {
                    _self.sortData(books, function (book: any, index: number) {
                        return <Li children={book} key={index}/>
                    })
                }
            </main>
        );
    }
}

