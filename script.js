const body = document.querySelector("body")
const bgBtn = document.querySelector("#bgBtn") // 테마 변경 버튼

const color1 = "white"
const color2 = "black"
const color3 = "blue"
const color4 = "#444"

let bccClick = 0

console.dir(body)

function backChangeColor() {
    const moveSites = document.querySelectorAll(".move_site") // 사이트
    const descriptions = document.querySelectorAll(".description") // 설명
    const header = document.querySelector("header"); // 헤더 선택
    const footer = document.querySelector("footer"); // 푸터 선택
    const images = document.querySelectorAll(".move_site img");

    if (bccClick === 0) { // 밝은 테마
        body.style.backgroundColor = color1;
        body.style.color = color2;
        header.style.backgroundColor = color1; // 헤더 배경 변경
        footer.style.backgroundColor = color1; // 푸터 배경 변경
        descriptions.forEach((site) => {
            site.style.backgroundColor = color1; // 모든 move_site 배경 변경
            site.style.color = color2; // 글자 색상도 변경
        });
        moveSites.forEach((site) => {
            site.style.backgroundColor = color1; // 모든 move_site 배경 변경
            site.style.color = color2; // 글자 색상도 변경
        });
        images.forEach((img) => {
            img.classList.remove("invert-image"); // 밝은 테마일 때는 클래스를 제거
        });
        bccClick = 1;
        bgBtn.innerText = "밝은";
    } else { // 어두운 테마
        body.style.backgroundColor = color4;
        body.style.color = color1;
        header.style.backgroundColor = color4; // 헤더 배경 변경
        footer.style.backgroundColor = color4; // 푸터 배경 변경
        descriptions.forEach((site) => {
            site.style.backgroundColor = color4; // 모든 move_site 배경 변경
            site.style.color = color1; // 글자 색상도 변경
        });
        moveSites.forEach((site) => {
            site.style.backgroundColor = color4; // 모든 move_site 배경 변경
            site.style.color = color1; // 글자 색상도 변경
        });
        images.forEach((img) => {
            img.classList.add("invert-image"); // 어두운 테마일 때는 클래스를 추가
        });
        bccClick = 0;
        bgBtn.innerText = "어두운";
    }
}


function over() {
    bgBtn.style.backgroundColor = color3
    bgBtn.style.color = color1
}

const urlList = [
    "https://www.instagram.com/se_do11/?hl=ko",
    "https://www.youtube.com/channel/UCgJ8iR8g3_7Cx-kqZZAcRrQ",
    "https://velog.io/@sedo11/posts",
    "https://blog.naver.com/tmvmffpsej",
    "https://github.com/sedoll",
    // "https://sedoll.github.io/knu_Portfolio/index.html",
];

function web(idx) {
    if (idx >= 0 && idx < urlList.length) {
        if (idx === 5) { // 포트폴리오
            if (confirm("이 페이지는 PC에 최적화되어 있습니다. 들어가시겠습니까?")) {
                window.open(urlList[idx], '_blank');
            }
        } else {
            window.open(urlList[idx], '_blank');
        }
    } else {
        console.error("Invalid index");
    }
}

// Section links generation
document.querySelector('.links-section').innerHTML = urlList.map((url, idx) => {
    const icons = [
        "instagram.svg", 
        "youtube.svg", 
        "velog.svg", 
        "naver.svg", 
        "github.svg", 
        // "webtrees.svg",
    ];

    const names = [
        "Instagram",
        "Youtube",
        "velog",
        "Naver Blog",
        "Git Hub",
        // "WEB PotFolio",
    ];

    return `<div class="move_site" onclick="web(${idx})">
                <img src="https://simpleicons.org/icons/${icons[idx]}" alt="${names[idx]}" class="invert-image">
                <span>${names[idx]}</span>
            </div>`;
}).join('');
