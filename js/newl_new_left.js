let mull = document.querySelector('.box1');

getDatax();

function getDatax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','../json/newl_new_left.json');
    xhr.send();
    xhr.onload = function () {
        let res2 = JSON.parse(xhr.responseText);
        rend2(res2);
        // console.log(1);
    }
}

function rend2(res2) {
    console.log(res2);
    res2.forEach((item,index) => {
        let str = `
        <ul>
        <li>
            <img src="https://www.guet.edu.cn/gdbh/skin/images/arrow1.gif"> 
                <a href="./newl.html">${item.namee}</a>
        </li>
        <li style="float: right;"> &nbsp; &nbsp;&nbsp;${item.may}</li>
    </ul>
        `;
        mull.innerHTML += str;
    })
}









