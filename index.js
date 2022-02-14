const BODY = document.querySelector("body")
const BTN = document.querySelector("#bgBtn")
const MoveSite = document.querySelector(".move_site")

const COLOR_CH = "테마 : "
const BLACK_THE = "어두운"
const WHITE_THE = "밝은"
const COLOR1 = "white"
const COLOR2 = "black"
const COLOR3 = "blue"
const COLOR4 = "#333333"

let btnClick = 0
let bccClick = 0

console.dir(BODY)

function backChangeColor() {
    if (bccClick === 0) { // 밝은 테마
        BODY.style.backgroundColor = COLOR1
        BODY.style.color = COLOR2
        BTN.innerText = COLOR_CH + WHITE_THE
        bccClick = 1

    } else { // 어두운 테마
        BODY.style.backgroundColor = COLOR4
        BODY.style.color = COLOR1
        BTN.innerText = COLOR_CH + BLACK_THE
        bccClick = 0
    }
}

function over() {
    BTN.style.backgroundColor = COLOR3
    BTN.style.color = COLOR1
}

function web(name) {
    if (name === 1) { // 인스타
        location.href = "https://www.instagram.com/se_do11/?hl=ko"
    } else if(name === 2){ // 페북
        location.href = "https://www.facebook.com/profile.php?id=100005061229348"
    } else if(name === 3){ // 유튜브
        location.href = "https://www.youtube.com/channel/UCgJ8iR8g3_7Cx-kqZZAcRrQ"
    } else if(name === 4){ // 네이버 블로그
        location.href = "https://blog.naver.com/tmvmffpsej"
    } else if(name === 5){ // 깃 허브
        location.href = "https://github.com/SEDO11"
    } else if(name === 6){ // 포트폴리오
        let select = confirm("이 페이지는 pc 에 최적화 되있습니다. 들어가시겠습니까?")
        if(select){
            location.href = "https://sedo11.github.io/knu_Portfolio/index.html"
        }
    } else { // 눈누
        location.href = "https://noonnu.cc/font_page/788"
    }
}

BTN.addEventListener("click", backChangeColor)
BTN.addEventListener("onmouseover", over)