let mul9 = document.querySelector('.nel_left');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/main2_left.json');
    xhr.send();
    xhr.onload = function () {
        let res9 = JSON.parse(xhr.responseText);
        ma2(res9);
        // console.log(1);
    }
}

function ma2(res9) {
    console.log(res9);
    res9.forEach((item,index) => {
        let str = `
        <ul  class="ull">
        <li style="margin-bottom: 10px;"><a href="./main_left.html" class="nel_left_1"><u>${item.title}</u></a></li>
        <li style="float: left;">${item.sourc}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.author}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.data}&nbsp;&nbsp;&nbsp;</li><br>
        <li style="margin-top: 10px;" class="nel_day"><a href="#" class="nel_left_5">&nbsp;&nbsp;${item.content}</a></li>
    </ul>
        `;
        mul9.innerHTML += str;
    })
}