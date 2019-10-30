// document 객체로 HTML 만들기

var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제로초'; // 여기까지 기억
document.body.append(단어); // 화면에 표시해줘
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창)


폼.addEventListener('submit', function(이벤트){
  이벤트.preventDefault(); // 새로고침 방지
  if(단어.textContent[단어.textContent.length -1] == 입력창.value[0]){
    단어.textContent = 입력창.value;
    결과창.textContent = '딩동댕';
    입력창.value = '';
    입력창.focus();
  } else {
    결과창.textContent = '땡';
    입력창.value = '';
    입력창.focus();
  }
});

/*
var word = '송진영'
while(true) {
    var answer = prompt(word)
    if (word[word.length - 1] === answer[0]){
		//맞았을 때
        word = answer;	
    } else {
		//틀렸을 때
    }

}
*/