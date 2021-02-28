let mul0 = document.querySelector('.nel_left');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/main_center.json');
    xhr.send();
    xhr.onload = function () {
        let res0 = JSON.parse(xhr.responseText);
        ma0(res0);
        // console.log(1);
    }
}

function ma0(res0) {
    console.log(res0);
    res0.forEach((item,index) => {
        let str = `
        <ul  class="ull">
        <li style="margin-bottom: 10px;"><a href="./main_center.html" class="nel_left_1"><u>${item.title}</u></a></li>
        <li style="float: left;">${item.sourc}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.author}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.data}&nbsp;&nbsp;&nbsp;</li><br>
        <li style="margin-top: 10px;" class="nel_day"><a href="./main_center.html" class="nel_left_5">&nbsp;&nbsp;${item.content}</a></li>
    </ul>
        `;
        mul0.innerHTML += str;
    })
}