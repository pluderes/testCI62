// B1
// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
// Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)

// let inpNum = prompt("Nhap vao 1 mang:");
function adjacentElementsProduct(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  arr = arr.split(", ");
  let index = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let pow = arr[i] * arr[i + 1];
    if (pow > max) {
      max = pow;
      index = i;
    } else {
    }
  }
  console.log(`Max: `, max);
  console.log(`Vi tri: `, index, " va ", index + 1);
}
// adjacentElementsProduct(inpNum);

// -----------------------------------------------------------------------------
// B2
// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao.
// Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2,
// người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu
// và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

// Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]

// let inpWeight = prompt("Nhap vao mang can nang: ");
let Team1 = [];
let Team2 = [];
function alternatingSums(arrWeight) {
  arrWeight = arrWeight.split(", ");
  console.log(arrWeight);
  for (let i = 0; i < arrWeight.length; i++) {
    if (i % 2 == 0) {
      Team1.push(Number(arrWeight[i]));
    } else {
      Team2.push(Number(arrWeight[i]));
    }
  }
}
// alternatingSums(inpWeight);
// const reducer = (total, newValue) => total + newValue;
// console.log(`Team 1: `, Team1.reduce(reducer));
// console.log(`Team 2: `, Team2.reduce(reducer));

// -------------------------------------------------------------
// b3
const inpLink = document.getElementById("inpLink");
const btnAction = document.getElementById("action");

const content = document.getElementById("content");

const inpshrt = document.getElementById("shrtco");
const inp9qr = document.getElementById("qr");
const inpshiny = document.getElementById("shiny");

async function getshrtco(link) {
  let promise = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  let data = await promise.json();

  console.log(data);

  content.insertAdjacentHTML(
    `afterend`,
    `
    <br>
  <div class="result p-4">
  <h3><b>Link generated</b></h3>
  <br />
    <a href=" ${data.result.short_link}">${data.result.short_link}</a>
</div>
  `
  );
}
async function get9qr(link) {
  let promise = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  let data = await promise.json();

  console.log(data);

  content.insertAdjacentHTML(
    `afterend`,
    `
    <br>
  <div class="result p-4">
  <h3><b>Link generated</b></h3>
  <br />
  <a href=" ${data.result.short_link2}">${data.result.short_link2}</a>
</div>
  `
  );
}
async function getshiny(link) {
  let promise = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  let data = await promise.json();

  console.log(data);

  content.insertAdjacentHTML(
    `afterend`,
    `
    <br>
  <div class="result p-4">
  <h3><b>Link generated</b></h3>
  <br />
  <a href="${data.result.short_link3}">${data.result.short_link3}</a>
</div>
  `
  );
}
btnAction.onclick = () => {
  if (inpshrt.checked == true) {
    getshrtco(inpLink.value);
  } else if (inp9qr.checked == true) {
    get9qr(inpLink.value);
  } else if (inpshiny.checked == true) {
    getshiny(inpLink.value);
  }
};
