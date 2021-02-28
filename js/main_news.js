let main1 = document.querySelector('.main_news');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '../json/main_left.json');
    xhr.send();
    xhr.onload = function () {
        let res4 = JSON.parse(xhr.responseText);
        rend1(res4);
        // console.log(1);
    }
}

function rend1(res4) {
    console.log(res4);
    res4.forEach((item, index) => {
        let str = ` 
        <ul>
                <li style="float: left;"><img src="https://www.guet.edu.cn/gdbh/skin/images/arrow00.gif"> <a href="#">
                    ${item.a}
                </a></li>
                <li style="float: right;">&nbsp;&nbsp;&nbsp;           ${item.b}</li>
        </ul>
        `;
        main1.innerHTML += str;
    })
}