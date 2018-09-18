let specialTags = document.querySelectorAll('[data-x]');
for(let i = 0,len = specialTags.length; i < len; i++){
    specialTags[i].classList.add('offset')
}

// 滚动条 事件监听
window.onscroll = function (x){
    console.log('scrollY',window.scrollY)
    // console.log('pageYOffset',window.pageYOffset);
    // console.log('documentElement.scrollTop',document.documentElement.scrollTop);
    // console.log('document.body.scrollTop',document.body.scrollTop);

    window.scrollY > 0?tabNavBar.classList.add('sticky'):tabNavBar.classList.remove('sticky');

    let special = document.querySelectorAll('[data-x]');
    //console.log(special);
    let minIndex = 0;
    for(let i = 1,len = special.length; i < len; i++){
        if(Math.abs(special[i].offsetTop - window.scrollY) < Math.abs(special[minIndex].offsetTop - window.scrollY)){
            minIndex = i
        }

    }
    specialTags[minIndex].classList.remove('offset')
    //console.log(minIndex)
    let minEle = special[minIndex];
    //console.log(minEle)
    let minEle_id = minEle.getAttribute('id');
    //console.log(minEle_id)
    let aTags = document.querySelectorAll('nav>ul>li>a');
    aTags.forEach(function (e,i,arr) {
        e.parentNode.classList.remove('highlight');
        if(e.getAttribute('href') === ('#' + minEle_id)){
            e.parentNode.classList.add('highlight')
        }
    })

}