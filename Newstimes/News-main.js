let news = []
// 카테고리 클릭시 검색기능 실행!
let menus = document.querySelectorAll(".menus button");
menus.forEach
((menu) => menu.addEventListener("click", (event)=>getNewsByTopic(event) ));

let searchButton = document.getElementById("search-button");

// #코드 리펙토링#
// 각 함수에서 필요한  url만들기
// api 호출 함수 만들기

let url; //url 전역변수 설정해주기
//햄버거 메뉴바
const bar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menus');

bar.addEventListener('click',() => {
    menu.classList.toggle('active');
});

//Search 바 숨김
let cateflag=true;
OnSearch = () => {
    if(cateflag == true){
        document.getElementById("cate").style.display = 'block';
        cateflag = !cateflag;
    }else{
        document.getElementById("cate").style.display = 'none';
        cateflag = !cateflag;
    }
}


const getNews = async() => {
    let header = new Headers({
        "x-api-key" : "fal_aGepsMSpCct07-dARECvxVLusDv_MLl4TUkBkoA",
    });
                //데이터를 보내는 방식 : fetch, ajax, http
                // await : fetch 함수(서버에 요청을 보내는 함수) 기다려주기
                // await + async은 set
    let response = await fetch(url, {headers:header});
    // json: 서버통신에서 많이 쓰는 자료형 타입
    let data = await response.json();
    news = data.articles;
    // console.log(news);
    render();
}
const getLatesNews = async() => {
    // new URL 객체 클래스 생성 (자바스크립트에서 제공하는 URL클래스) 
    // : URL을 분석해줌!
    url = new URL(
        `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business&page_size=10`
    );
    getNews();
};
// 카테고리 클릭시 검색기능 실행!
const getNewsByTopic = async (event) => {
    let topic = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`);
    
    getNews();
};
// 키워드 검색 기능
const getNewsBykeyword = async () => {
    //1. 검색키워드 읽어오기
    //2. url에 검색 키워드 붙이기
    //3. 헤더준비
    //4. url  부르기
    //5. 데이터 가져오기 
    //6. 데이터 보여주기

    let keyword = document.getElementById("search-input").value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
    getNews();
}


const render = () =>{
    // map의 결괏값은 array
    // 따라서 newsHTML 결과값은 array
    //array를 String 타입으로 변환해야함! 그래야 `가 사라짐 : Array.join()-> String을 리턴함
    let newsHTML = '';
    // map = for문과 비슷 반복!!
    newsHTML = news //뉴스 어레이
    .map((item) => { //각 뉴스 아이템
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights} | ${item.published_date}</div>
        </div>
    </div>`
    }).join('');
    document.getElementById("news-board").innerHTML=newsHTML;
}

getLatesNews();
searchButton.addEventListener("click",getNewsBykeyword);



//9강 카테고리별 검색부터 다시!!!!!