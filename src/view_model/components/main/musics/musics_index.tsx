import * as React from 'react'
import getData from '../../../getdata'
import ShowDetails from '../show_details'

class Musics extends React.Component<any, {}> {

    musics: any

    constructor() {
        super({}, {})
        this.musics = []
        this.state = {
            musics: this.musics,
            category: this.props.category
        }
    }

    /**
     * 获取音乐数据
     * @param {string} keyword
     * @returns {Promise<any>}
     */
    getMusic(keyword = '音乐') {
        let url = `https://api.douban.com/v2/music/search?q=${keyword}`
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
            const music: any = {
                image: item.image || 'o(╥﹏╥)o',
                title: item.title || 'o(╥﹏╥)o',
                tags: item.tags ? getTags(item.tags) : [],
                author: item.author ? item.author[0].name : 'o(╥﹏╥)o',
                average: item.rating ? item.rating.average : 'o(╥﹏╥)o',
                publisher: item.attrs.publisher || 'o(╥﹏╥)o',
                pubdate: item.attrs.pubdate || 'o(╥﹏╥)o',
                summary: item.summary || 'o(╥﹏╥)o'
            }
            result.push(music)
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
    setMusciData(newProps:any) {
        const self = this
        const keyword: string = newProps.keyword
        self.getMusic(keyword).then(function (musics: any) {
            const data = self.sortData(musics.musics) //获取序列化数据
            self.setState({
                musics: data,
                category: newProps.category
            })
        })

    }

    /**
     * 收到数据后更新界面
     */
    componentDidMount(){
        this.setMusciData(this.props)
    }
    componentWillReceiveProps(newProps:any) {
        this.setMusciData(newProps)
    }

    /**
     * 展示页面详情
     */
    musicDetails( ){
        const self:any = this;
        ShowDetails(self.category,self.data);
    }
    render() {
        const self = this
        const state: any = this.state
        return (
            <div className={'app-main-musics'}>{
                state.musics.map(function (data: any, index: number) {
                    return <div className="main-div-list"onClick={self.musicDetails.bind({
                        category:self.props.category,
                        data:data
                    })} key={index}>
                        <div className='main-div-li main-list-left'>
                            <img className='main-li-image' src={data.image}></img>
                        </div>
                        <aside className='main-div-li main-list-right'>
                            <p className='main-li-name'>名称:{data.title}</p>
                            <p className='main-li-author'>作者:{data.author}</p>
                            <p className='main-li-average'>评分:{data.average}</p>
                        </aside>
                    </div>
                })
            }</div>

        )
    }
}

export default Musics