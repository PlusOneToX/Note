var listSpan = document.getElementsByClassName('listSpan');

var listSpanShow = true;

for (let i = 0; i < listSpan.length; i++) {
    listSpan[i].onclick = function () {
        listSpanShow = this.nextElementSibling.style.display == 'block' ? false : true;
        if (listSpanShow) {
            this.classList.toggle('listActive');
            this.nextElementSibling.style.display = 'block';
        } else {
            this.classList.remove('listActive');
            this.nextElementSibling.style.display = 'none';
        }
    };
}

var conten = document.querySelectorAll('.conten');
var contenLiArr = [];
var contenLiArr2 = [];

for (let i = 0; i < conten.length; i++) {
    contenLiArr.push(conten[i].getElementsByTagName('li'));
}

for (let i = 0; i < contenLiArr.length; i++) {
    for (let j = 0; j < contenLiArr[i].length; j++) {
        contenLiArr2.push(contenLiArr[i][j]);
    }
}

for (let i = 0; i < contenLiArr2.length; i++) {
    contenLiArr2[i].onclick = function () {
        for (let j = 0; j < contenLiArr2.length; j++) {
            contenLiArr2[j].classList.remove('contenLiHover');
        }
        this.classList.toggle('contenLiHover');
        var containerMain = document.getElementsByClassName('containerMain');
        for (let i = 0; i < containerMain.length; i++) {
            containerMain[i].style.display = 'none';
        }
        document.getElementById(this.id + '-main').style.display = 'block';
    };
}

function copyfun(obj) {
    var text = obj.parentNode.children[1].innerText;
    var input = document.getElementById('input');
    input.value = text; // 修改文本框的内容
    input.select(); // 选中文本
    document.execCommand('copy'); // 执行浏览器复制命令

    obj.innerHTML = '复制成功';
    var copyBtninnerHTML = setTimeout(function () {
        obj.innerHTML = '复制';
        clearInterval(copyBtninnerHTML);
    }, 800);
}
