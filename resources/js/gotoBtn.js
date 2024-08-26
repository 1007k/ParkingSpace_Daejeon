// 메뉴의 버튼 클릭이벤트 모음 
    

//일단 임시로 '메뉴열기'누르면 홈으로감 
$('.menuBtn').on('click',()=>{
    location.href = "./index.html"
});

$('.nowParking').on('click',()=>{
    location.href = "./03_지금이용가능.html"
});

$('.moreSearch').on('click',()=>{
    location.href = "./04_상세검색.html"
});

$('.gotoMap').on('click',()=>{
    location.href = "./05_한눈에보기.html"
});


$('.gotoStatic').on('click',()=>{
    location.href = "./06_주차장통계(그래프).html"
});

$('.gotoInfo').on('click',()=>{
    location.href = "./07_데이터정보, 제작정보.html"
});




