type Obj = {
  name: string;
  phone: number;
  email: string;
};

type Adult = {
  adult: boolean;
};

type New = Obj & Adult;

let a: New = {
  name: "나",
  phone: 821000000000,
  email: "you8inpark@gmail.com",
  adult: false,
};

console.log(a);
