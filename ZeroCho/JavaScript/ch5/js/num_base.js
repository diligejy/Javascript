/*
    4자릿수 숫자야구
    1. 10번의 기회
    2. 1에서 9까지 중복되지 않는 숫자로 구성
*/

const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
for (let i = 1; i <= 9; i++) {
    numbers.push(i);
}

const answer = [];
for (let i = 0; i <= 3; i++) {
    const index = Math.floor(Math.random() * numbers.length); // 0~8 정수 
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}

const tries = [];
function checkInput(input) {
    if (!(Number.isInteger(Number(input)))) {
        return alert('숫자를 입력하세요');
    } else if (input.length !== 4) {
        return alert('4자리 숫자를 입력해주세요.');
    } else if (new Set(input).size !== 4) {
        return alert('중복되지 않게 입력해주세요.');
    } else if (tries.includes(input)) {
        return alert('이미 시도한 값입니다');
    }
    return true;
}
function defeated() {
    const message = document.createTextNode(`패배! 정답은 ${answer.join('')}`);
    $logs.appendChild(message);

}

let out = 0;
$form.addEventListener('submit', (event) => {
    event.preventDefault(); // 기본 동작 막기
    const value = $input.value;
    $input.value = '';
    if (!checkInput(value)) {
        //에러 있음
        return;
    }
    if (answer.join('') === value) {
        $logs.textContent = '홈런!';
        return;
    }
    if (tries.length >= 9) {
        defeated();
        return;
    }
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]);
        if (index > -1) {
            if (index === i) {
                strike += 1;
            } else {
                ball += 1;
            }
        }
    }
    if (strike === 0 && ball === 0) {
        out++;
        $logs.append(`${value} : ${out} 아웃`.fontcolor('red'), document.createElement('br'));
    } else {
        $logs.append(`${value} : ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    }
    if (out >= 3) {
        defeated();
        return;
    }
    tries.push(value);
});

console.log(answer);

