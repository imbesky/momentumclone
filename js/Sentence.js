const Sentences = [
    {   sentence: "제한된 차원성에 속박되는 것을 거절하려는 저항의 정신을 일깨우리라고, 여전히 희망을 버리지 않고 있습니다. 그것은 더 밝은 순간에 대한 희망입니다.",
        book: "플랫랜드",},
    {   sentence: "인류와 할머니의 고향이었던 푸른 점. 지구는 생명이 넘치는 행성이라고 하지만 내게는 낯설고 이해할 수 없는 것투성이인 곳이었다.",
        book: "그 이름, 찬란",},
    {   sentence: "차가운 기술 안에 인간의 뜨거운 피를 돌게 하신 당신께 깊은 존경의 인사를 보냅니다.",
        book: "모멘트 아케이드",},
    {   sentence: "유한하기에 역설적으로 영원의 가치를 지니게 되는 게토에서의 삶이 그리웠다.",
        book: "테세우스의 배",},
    {   sentence: "나는 죽음에 대해 농담하며 웃기를, 죽음을 희화하기를 즐긴다. 죽음을 무찌르는 나만의 방법이다. 그렇게 죽음은 덜 심각해진다. 죽음을 가벼이 대하며 삶이 죽음 위로 올라서게 한다, 더 큰 힘을 갖게 한다.",
        book: "비올레트, 묘지지기",},
    {   sentence: "전 사실 괴담을 좋아해요. 모든 일에는 이유가 있잖아요. 괴담이라 불릴 만큼 말도 안 되는 일에도 사실은 어떤 이유가 있지 않을까요?",
        book: "트로피컬 나이트",},
    {   sentence: '"떠나기 전엔 몰랐어. 모든 행성이 우주 공간을 여행하고 있다는 걸. 모든 별, 모든 은하, 그리고 그 너머까지 여행하며 천상의 춤을 추고 있다는 걸."',
        book: "에스에프널 2022 Vol.1, 우주로 간 인어",},
    {   sentence: "게르만족: 전투는 재미있다.",
        book: "세상에서 가장 짧은 세계사",},
    {   sentence: "그리고 그때 이곳을 그리워할 수 있게 된다면, 다른 게 아니라 정확히 바로 지금 이 장면을 그리워하게 될 것이라는 예감. 나는 지금 이 순간의 한복판에 서서 이 순간을 추억하고 있었다.",
        book: "달까지 가자",}
];
const Sen = document.querySelector("#sentence");
const Book = document.querySelector("#book");

function randomS(){
    const randomN = Math.floor(Math.random()*(Sentences.length));
    Sen.innerText = Sentences[randomN].sentence;
    Book.innerText = Sentences[randomN].book;
}

setTimeout(randomS, 0);
setInterval(randomS, 10000);