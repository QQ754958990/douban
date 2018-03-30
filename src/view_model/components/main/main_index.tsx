import * as React from "react";
import './main_style.css';
import {Li} from "./list/list_index";

export class Main extends React.Component {

    sortData(children: any, fn: any) {
        let category = children.category;
        let data = children.showData;

        switch (category) {
            case 1:
                return data.map(function (item: any, index: number) {

                    var book: any = {
                        image: item.image || 'o(╥﹏╥)o',
                        title: item.title || 'o(╥﹏╥)o',
                        tags: item.tags ? getTags(item.tags) : [],
                        author: item.author ? item.author[0] : 'o(╥﹏╥)o',
                        average: item.rating ? item.rating.average : 'o(╥﹏╥)o',
                        pubdate: item.pubdate || 'o(╥﹏╥)o',
                        summary: item.summary || 'o(╥﹏╥)o',
                        publisher: item.publisher || 'o(╥﹏╥)o',
                        price: item.price || 'o(╥﹏╥)o'
                    };

                    return fn(book, index);

                });
            case 2:
                return data.map(function (item: any, index: number) {

                    var move: any = {
                        image: item.images?item.images.small: 'o(╥﹏╥)o', //图片
                        title: item.title || 'o(╥﹏╥)o', //标题
                        genres: item.genres || 'o(╥﹏╥)o', //流派
                        casts: item.casts ? getTags(item.casts) : [], //演员阵容
                        average: item.rating ? item.rating.average : 'o(╥﹏╥)o',
                        directors:item.directors[0]? item.directors[0].name : 'o(╥﹏╥)o', //导演
                        year: item.year || 'o(╥﹏╥)o', //上映时间
                        castsImg: item.casts ? getCastsImg(item.casts) : [ ], //演员阵容图片
                    };
                    return fn(move, index);
                });
            case 3:
                return data.map(function (item: any, index: number) {

                    var music: any = {
                        image: item.image || 'o(╥﹏╥)o',
                        title: item.title || 'o(╥﹏╥)o',
                        tags: item.tags ? getTags(item.tags) : [ ],
                        author: item.author[0] ? item.author[0].name : 'o(╥﹏╥)o',
                        average: item.rating ? item.rating.average : 'o(╥﹏╥)o',
                        publisher: item.attrs.publisher || 'o(╥﹏╥)o',
                        pubdate: item.attrs.pubdate || 'o(╥﹏╥)o',
                        summary: item.summary || 'o(╥﹏╥)o'
                    };

                    return fn(music, index);

                });
        }

        function getTags(tags: any): string[ ] {
            let setTags: string[] = ['我需要先占个位置'];
            tags.map(function (item: any, index: number) {
                setTags.push(item.name);
            });
            setTags.shift();
            return setTags;
        }
        function getCastsImg(tags: any): string[ ] {
            let setTags: any[] = [{}];
            tags.map(function (item: any, index: number) {
                setTags.push({
                    name:item.name,
                    img:item.avatars?item.avatars.small:'o(╥﹏╥)o'
                });
            });
            setTags.shift();
            return setTags;
        }
    }

    render() {
        const _self: any = this;
        return (
            <main className="app-main">
                {
                    _self.sortData(this.props.children, function (data: any, index: number) {
                        return <Li children={{
                            category: _self.props.children.category,
                            showData: data
                        }} key={index}/>
                    })
                }
            </main>
        );
    }
}

