let mul7 = document.querySelector('.nel_left');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/newl2.json');
    xhr.send();
    xhr.onload = function () {
        let res7 = JSON.parse(xhr.responseText);
        ma1(res7);
        // console.log(1);
    }
}

function ma1(res7) {
    console.log(res7);
    res7.forEach((item,index) => {
        let str = `
        <ul  class="ull">
        <li style="margin-bottom: 10px;"><a href="#" class="nel_left_1"><u>${item.title}</u></a></li>
        <li style="float: left;">${item.sourc}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.author}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.data}&nbsp;&nbsp;&nbsp;</li><br>
        <li style="margin-top: 10px;" class="nel_day"><a href="#" class="nel_left_5">&nbsp;&nbsp;${item.content}</a></li>
    </ul>
        `;
        mul7.innerHTML += str;
    })
}