import * as React from 'react'
import './footer_style.scss'

export class Footer extends React.Component {
    shake: any

    handle(e: Event) {
        //按键抖动 --间隔500毫秒
        let self: any = this

        if (this.shake != undefined) {
            clearTimeout(this.shake)
        }
        this.shake = setTimeout(function () {
            self.showCategory.fn(self.category)

        }, 500)
    }

    componentDidUpdate() {
        const book: any = this.refs['appfooter-img-book'];
        const movie: any = this.refs['appfooter-img-movie'];
        const music: any = this.refs['appfooter-img-music'];

        book.style.color  = 'black';
        movie.style.color = 'black';
        music.style.color = 'black';

        const children: any = this.props.children
        let category = children.state.category
        switch (category) {
            case 1:
                book.style.color = 'blue';
                break
            case 2:
                movie.style.color = 'blue';
                break
            case 3:
                music.style.color = 'blue';
                break
        }
    }

    render() {
        return (
            <footer className="app-footer">
                <div className={'appfooter-ul-item'}>
                    <div id='appfooter-img-book' className={'appfooter-item-category'} ref='appfooter-img-book'
                         datatype={'1'}
                         onClick={this.handle.bind({
                             showCategory: this.props.children,
                             category: 1
                         })}><p>图书</p>
                    </div>

                    <div id='appfooter-img-movie' className={'appfooter-item-category'} ref='appfooter-img-movie'
                         datatype={'2'}
                         onClick={this.handle.bind({
                             showCategory: this.props.children,
                             category: 2
                         })}><p>电影</p>
                    </div>

                    <div id='appfooter-img-music' className={'appfooter-item-category'} ref='appfooter-img-music'
                         datatype={'3'}
                         onClick={this.handle.bind({
                             showCategory: this.props.children,
                             category: 3
                         })}><p>音乐</p>
                    </div>
                </div>
            </footer>
        )
    }
}
