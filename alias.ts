type NumType = (x: number, y: number) => number;

let num: NumType = function (x, y) {
  return x + y;
};

type 함수타입 = (a: string) => number;

let 함수: 함수타입 = function (a) {
  return 10;
};

type InfoType = (a: number) => number;

let info = {
  name: "kim",
  plusOne: (a) {
    return a + 1;
  },
  changeName: () => {},
};

info.plusOne();
