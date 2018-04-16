import * as React from 'react'
import './footer_style.scss'

export class Footer extends React.Component<any> {
    shake: any

    handle(e: Event) {
        const element: any = e.target //获取事件元素
        const datatype = element.getAttribute('datatype') //获取元素类型

        //按键抖动 --间隔500毫秒
        let self: any = this
        if (self.shake != undefined) {
            clearTimeout(this.shake)
        }
        self.shake = setTimeout(function () {
            self.props.showCategory(self.props.keyword, datatype)
        }, 500)
    }

    /**
     * 渲染类别颜色
     */
    showColor(){
        const book: any = this.refs['appfooter-img-book']
        const movie: any = this.refs['appfooter-img-movie']
        const music: any = this.refs['appfooter-img-music']

        book.style.color = 'black'
        movie.style.color = 'black'
        music.style.color = 'black'

        let category = this.props.category
        switch (category) {
            case 'books':
                book.style.color = 'blue'
                break
            case 'movies':
                movie.style.color = 'blue'
                break
            case 'musics':
                music.style.color = 'blue'
                break
        }
    }

    componentDidMount() {
       this.showColor();
    }

    componentDidUpdate() {
        this.showColor();
    }

    render() {
        return (
            <footer className="app-footer">
                <div className={'appfooter-ul-item'}>
                    <div id='appfooter-img-book' className={'appfooter-item-category'} ref='appfooter-img-book'
                         datatype={'books'}
                         onClick={this.handle.bind(this)}><p>图书</p>
                    </div>

                    <div id='appfooter-img-movie' className={'appfooter-item-category'} ref='appfooter-img-movie'
                         datatype={'movies'}
                         onClick={this.handle.bind(this)}><p>电影</p>
                    </div>

                    <div id='appfooter-img-music' className={'appfooter-item-category'} ref='appfooter-img-music'
                         datatype={'musics'}
                         onClick={this.handle.bind(this)}><p>音乐</p>
                    </div>
                </div>
            </footer>
        )
    }
}
