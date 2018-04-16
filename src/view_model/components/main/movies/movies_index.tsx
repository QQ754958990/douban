import * as React from 'react'
import getData from '../../../getdata'
import ShowDetails from '../show_details'

class Movies extends React.Component<any> {
    movies: any
    constructor() {
        super({})
        this.movies = []
        this.state = {
            movies: this.movies,
            category: this.props.category
        }
    }

    /**
     * 获取电影数据
     * @param {string} keyword
     * @returns {Promise<any>}
     */
    getMovie(keyword='电影') {
        let url = `https://api.douban.com/v2/movie/search?q=${keyword}`
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
            const movie = {
                image: item.images ? item.images.small : 'o(╥﹏╥)o', //图片
                title: item.title || 'o(╥﹏╥)o', //标题
                genres: item.genres || 'o(╥﹏╥)o', //流派
                casts: item.casts ? getTags(item.casts) : [], //演员阵容
                average: item.rating ? item.rating.average : 'o(╥﹏╥)o',
                directors: item.directors[0] ? item.directors[0].name : 'o(╥﹏╥)o', //导演
                year: item.year || 'o(╥﹏╥)o', //上映时间
                castsImg: item.casts ? getCastsImg(item.casts) : [], //演员阵容图片
            }

            result.push(movie)
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

        function getCastsImg(tags: any): string[ ] {
            let setTags: any[] = [{}]
            tags.map(function (item: any, index: number) {
                setTags.push({
                    name: item.name,
                    img: item.avatars ? item.avatars.small : 'o(╥﹏╥)o'
                })
            })
            setTags.shift()
            return setTags
        }

    }

    /**
     * 展示数据
     */
    setMovieData(newProps:any) {
        const self = this
        const keyword: string = newProps.keyword
        self.getMovie(keyword).then(function (movies: any) {
            const data = self.sortData(movies.subjects) //获取序列化数据
            self.setState({
                movies: data,
                category: newProps.category
            })
        })

    }

    /**
     * 收到数据后更新界面
     */
    componentDidMount(){
        this.setMovieData(this.props)
    }
    componentWillReceiveProps(newProps:any) {
        this.setMovieData(newProps)
    }

    /**
     * 展示页面详情
     */
    movesDetails( ){
        const self:any = this;
        ShowDetails('movies',self.data);
    }

    render() {
        const self = this
        const state: any = this.state

        return (
            <div className={'app-main-movies'}>{
                state.movies.map(function (data: any, index: number) {
                    return <div className="main-div-list"onClick={self.movesDetails.bind({
                        category:self.props.category,
                        data:data
                    })} key={index}>
                        <div className='main-div-li main-list-left'>
                            <img className='main-li-image' src={data.image}></img>
                        </div>
                        <aside className='main-div-li main-list-right'>
                            <p className='main-li-name'>{data.title}</p>
                            <div className='main-li-genres'>{
                                data.genres ? (
                                    data.genres.map(function (item: any, index: number) {
                                        return <p className={'main-item-genres'} key={index}>{item}</p>
                                    })
                                ) : ' '
                            }</div>
                            <div className='main-li-casts'>{
                                data.casts ? (
                                    data.casts.map(function (item: any, index: number) {
                                        return <p className={'main-item-casts'} key={index}>{item}</p>
                                    })
                                ) : ' '
                            }</div>
                            <p className='main-li-average'>评分:{data.average}</p>
                        </aside>
                    </div>
                })
            }</div>
        )
    }
}

export default Movies