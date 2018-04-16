import * as React from 'react'
import getData from '../../../getdata'
import ShowDetails from '../show_details'

class Books extends React.Component <any> {
    books: any

    constructor() {
        super({})
        this.books = []
        this.state = {
            books: this.books,
            category: this.props.category
        }
    }

    /**
     * 获取书籍数据
     * @param {string} keyword
     * @returns {Promise<any>}
     */
    getBooks(keyword = '图书') {
        let url = `https://api.douban.com/v2/book/search?q=${keyword}`
        return getData(url)
    }

    /**
     * 序列化数据
     * @param children
     * @param fn
     * @returns {any[]}
     */
    sortData(data: any) {
        const result: any = []
        data.map(function (item: any, index: number) {
            const book = {
                image: item.image || 'o(╥﹏╥)o',
                title: item.title || 'o(╥﹏╥)o',
                tags: item.tags ? getTags(item.tags) : [],
                author: item.author ? item.author[0] : 'o(╥﹏╥)o',
                average: item.rating ? item.rating.average : 'o(╥﹏╥)o',
                pubdate: item.pubdate || 'o(╥﹏╥)o',
                summary: item.summary || 'o(╥﹏╥)o',
                publisher: item.publisher || 'o(╥﹏╥)o',
                price: item.price || 'o(╥﹏╥)o'
            }

            result.push(book)
        })

        return result

        function getTags(tags: any): string[ ] {
            let setTags: string[] = ['我需要先占个位置']
            tags.map(function (item: any, index: number) {
                setTags.push(item.name)
            })
            setTags.shift()
            return setTags
        }

    }

    /**
     * 展示数据
     */
    setBookData(newProps:any) {
        const self = this
        const keyword: string = newProps.keyword
        self.getBooks(keyword).then(function (books: any) {
            const data = self.sortData(books.books) //获取序列化数据
            self.setState({
                books: data,
                category: newProps.category
            })
        })

    }


    /**
     * 收到数据后更新界面
     */
    componentDidMount(){
        this.setBookData(this.props)
    }
    componentWillReceiveProps(newProps:any){
        this.setBookData(newProps);
    }

    /**
     * 展示页面详情
     */
    bookDetails(){
        const self:any = this;
        ShowDetails(self.category,self.data);
    }

    render() {
        const self = this;
        const state: any = this.state //获取传送数据
        return (
            <div className='app-main-books'>
                {
                    state.books.map(function (data: any,index:number) {
                        return <div className="main-div-list" onClick={self.bookDetails.bind({
                            category:self.props.category,
                            data:data
                        })} key={index}>
                            <div className='main-div-li main-list-left'>
                                <img className='main-li-image' src={data.image}></img>
                            </div>
                            <aside className='main-div-li main-list-right'>
                                <p className='main-li-name'>名称:{data.title}</p>
                                <p className='main-li-author'>作者:{data.author}</p>
                                <div className='main-li-tags'>{
                                    data.tags ? (
                                        data.tags.map(function (item: any, index: number) {
                                            return <p className={'main-item-tags'} key={index}>{item}</p>
                                        })
                                    ) : ' '
                                }</div>
                                <p className='main-li-average'>评分:{data.average}</p>
                                <p className='main-li-pubdate'>时间:{data.pubdate}</p>
                            </aside>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Books