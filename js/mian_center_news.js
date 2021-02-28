let gsm = document.querySelector('.main_center_news');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/mian_center_news.json');
    xhr.send();
    xhr.onload = function () {
        let res55 = JSON.parse(xhr.responseText);
        rendmay(res55);
        // console.log(1);
    }
}

function rendmay(res55) {
    console.log(res55);
    res55.forEach((item,index) => {
        let str = `
        <div class="center_news">
        <p><a href="#">${item.headee}</a></p>
        <span> 
            <a href="#">&nbsp;&nbsp;&nbsp;${item.contentt}</a></span>
    </div>
        `;
        gsm.innerHTML += str;
    })
}
