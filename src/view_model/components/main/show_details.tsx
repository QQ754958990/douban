
const ShowDetails =(category:string,date:any)=>{
    let details_html : string = '我需要先占个位置';
    switch (category){
        case 'books':
            details_html  = `<article class="item-article-details">

                                <header class="item-header-details">
                                     <p class="item-header-getback" onclick="document.getElementsByClassName('item-article-details')[0].style.display='none'"><返回</p>
                                     <h3 class="item-title-details">${date.title}</h3>
                                </header>
                                
                                <div class="item-main-details">
                                    <div class="item-div-list" >
                                        <div class='item-div-li item-list-left'>
                                            <img class='item-li-image' src=${date.image}></img>
                                        </div>
                                        <aside class='item-div-li item-list-right'>
                                            <p class='item-name-details'>名称:${date.title}</p>
                                            <p class='item-author-details'>作者:${date.author}</p>
                                            <p class='item-publisher-details'>出版社:${date.publisher}</p>
                                             <p class='item-pubdate--details'>时间:${date.pubdate}</p>
                                             <p class='item-average-details'>评分:${date.average}</p>
                                             <p class='item-price-details'>价钱:${date.price}</p>
                                            <div class='item-tags-details'>${
                date.tags?(
                    date.tags.map(function (item: any, index: number) {
                        return `<p class='item-p-tags' key=${index}>${item}</p>`
                    })
                ):' '
                }</div>                                     
                                        </aside>
                                        <div class="item-list-footer">
                                            <hr/>
                                            <p >${date.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </article>`;
            break;
        case 'movies':
            details_html  = `<article class="movie-article-details">
                                    <header class="movie-header-details">
                                         <p class="movie-header-getback" onclick="document.getElementsByClassName('movie-article-details')[0].style.display='none'"><返回</p>
                                         <h3 class="movie-title-details">${date.title}</h3>
                                    </header>
                                    <div class="item-main-details">                                  
                                    <div class="movie-main-details">
                                            <img class='movie-li-image' src=${date.image}></img>
                                    </div>                                  
                                    <footer class="movie-footer-details">                                                                   
                                        <div class='movie-genres-details'><span>名称:${date.title}</span>${
                date.genres ? (
                    date.genres.map(function (item: any, index: number) {
                        return `<span><p class='movie-p-genres' key=${index}>${item}</p></span>`
                    })
                ):' '
                }</div>
                                         <p class='movie-year-details'>上映时间:${date.year}</p>                           
                                        <p class='movie-author-details'>导演:${date.directors}</p>
                                        <div class='movie-castsImg-details'>${
                date.castsImg ? (
                    date.castsImg.map(function (item: any, index: number) {
                        return `<div class="castsImg-item-details" key=${index}>
                                                                   <img class="castsImg-img-details" src=${item.img}></img>
                                                                    <p class='castsImg-name-details' >${item.name}</p>
                                                                </div>`
                    })
                ):' '
                }</div>                                                                                                   
                                    </footer>
                                    </div>                           
                                </article>`;
            break;
        case 'musics':
            details_html  = `<article class="item-article-details">

                                <header class="item-header-details">
                                     <p class="item-header-getback" onclick="document.getElementsByClassName('item-article-details')[0].style.display='none'"><返回</p>
                                     <h3 class="item-title-details">${date.title}</h3>
                                </header>
                                
                                <div class="item-main-details">
                                    <div class="item-div-list" >
                                        <div class='item-div-li item-list-left'>
                                            <img class='item-li-image' src=${date.image}></img>
                                        </div>
                                        <aside class='item-div-li item-list-right'>
                                            <p class='item-name-details'>名称:${date.title}</p>
                                            <div class='item-tags-details'>${
                date.tags ? (
                    date.tags.map(function (item: any, index: number) {
                        return `<p class='item-p-tags' key=${index}>${item}</p>`
                    })
                ):' '
                }</div>          
                                            <p class='item-author-details'>作者:${date.author}</p>
                                            <p class='item-publisher-details'>发布商:${date.publisher}</p>
                                             <p class='item-pubdate--details'>发布时间:${date.pubdate}</p>
                                             <p class='item-average-details'>评分:${date.average}</p>                                                                                                        
                                        </aside>
                                        <div class="item-list-footer">
                                            <hr/>
                                            <p >${date.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </article>`;
            break;
    }

    document.getElementsByClassName('showDetails')[0].innerHTML = details_html;
}


export default ShowDetails;