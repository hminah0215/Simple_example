let target = document.querySelector("#dynamic");

// 배열의 내용을 랜덤으로 하나씩 자르는 함수
function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Python","Learn to JavaScript","Learn to Java"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split(""); // 단어 하나하나를 잘라서 배열로 변경됨

    return selectStringArr
}

// 타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

// 마치 한글자씩 텍스트가 타이핑 되도록 하는 함수
function dynamic(randomArr){
   if(randomArr.length > 0){
       target.textContent += randomArr.shift(); // shift 메소드는 배열이 있으면 그 배열에 있는 앞에 것부터 바깥으로 빼내줌
       setTimeout(function(){
           dynamic(randomArr) // 모든 문자열이 출력될때까지 계속 반복
       },80);
   }else{
       setTimeout(resetTyping,3000);
   }
}

dynamic(randomString());

// 커서 깜박이는것 처럼 보여지게 만드는 함수
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); // 0.5초마다 함수 반복