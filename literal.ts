let ab: "머머리";
let cd: "빡빡이";

let M: "머머리" | "빡빡이";
M = "머머리";

function N(a: "naver"): 1 | 0 {
  return 1;
}

N("naver");

function rsp(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}

const 변수 = "변하지마";

//❌
const m = "머머리" | "빡빡이";

let 자료 = {
  name: "kim",
} as const;

자료.name;

function 내함수(a: "kim") {}

내함수(자료.name);
