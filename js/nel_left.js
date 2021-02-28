let mul1 = document.querySelector('.nel_left');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/new_left.json');
    xhr.send();
    xhr.onload = function () {
        let res1 = JSON.parse(xhr.responseText);
        rendere(res1);
        // console.log(1);
    }
}

function rendere(res1) {
    console.log(res1);
    res1.forEach((item,index) => {
        let str = `
        <ul  class="ull">
        <li style="margin-bottom: 10px;"><a href="#" class="nel_left_1"><u>${item.title}</u></a></li>
        <li style="float: left;">${item.sourc}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.author}&nbsp;&nbsp;&nbsp;</li>
        <li style="float: left;">${item.data}&nbsp;&nbsp;&nbsp;</li><br>
        <li style="margin-top: 10px;" class="nel_day"><a href="#" class="nel_left_5">&nbsp;&nbsp;${item.content}</a></li>
    </ul>
        `;
        mul1.innerHTML += str;
    })
}