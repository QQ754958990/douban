import * as React from "react";
import './footer_style.css';

export class Footer extends React.Component {

    handle(e:Event){
        let self:any = this;
        self.showCategory.fn(self.category);
    }

    componentDidUpdate (){

        (document.getElementById('appfooter-img-book')as HTMLDivElement).style.color='black';
        (document.getElementById('appfooter-img-movie')as HTMLDivElement).style.color='black';
        (document.getElementById('appfooter-img-music')as HTMLDivElement).style.color='black';

        const children:any  = this.props.children;
        let category =  children.state.category;
        switch (category){
            case 1:
                (document.getElementById('appfooter-img-book')as HTMLDivElement).style.color='blue';
                break;
            case 2:
                (document.getElementById('appfooter-img-movie')as HTMLDivElement).style.color='blue';
                break;
            case 3:
                (document.getElementById('appfooter-img-music')as HTMLDivElement).style.color='blue';
                break;
        }
    }

    render() {
        return (
            <footer className="app-footer">
                <ul className={'appfooter-ul-item'}>
                    <li>
                        <div id='appfooter-img-book' className={'appfooter-item-category'} datatype={'1'} onClick={this.handle.bind({
                            showCategory: this.props.children,
                            category: 1
                        })}><p>图书</p></div>
                    </li>
                    <li>
                        <div id='appfooter-img-movie' className={'appfooter-item-category'} datatype={'2'} onClick={this.handle.bind({
                            showCategory: this.props.children,
                            category: 2
                        })}><p>电影</p></div>
                    </li>
                    <li>
                        <div id='appfooter-img-music' className={'appfooter-item-category'} datatype={'3'} onClick={this.handle.bind({
                            showCategory: this.props.children,
                            category: 3
                        })}><p>音乐</p></div>
                    </li>
                </ul>
            </footer>
        );
    }
}
