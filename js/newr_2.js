let mul5 = document.querySelector('.newr_2');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/newr_right.json');
    xhr.send();
    xhr.onload = function () {
        let res5 = JSON.parse(xhr.responseText);
        rend5(res5);
        // console.log(1);
    }
}

function rend5(res5) {
    console.log(res5);
    res5.forEach((item,index) => {
        let str = `
        <ul>
        <li><img src="https://www.guet.edu.cn/gdbh/skin/images/arrow00.gif"> <a href="#">
                ${item.title}
            </a></li>
        <li style="float: right;">${item.data}</li>
    </ul>
        `;
        mul5.innerHTML += str;
    })
}
