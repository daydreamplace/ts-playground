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
  phone: 8210513880188,
  email: "you8inpark@gmail.com",
  adult: false,
};

console.log(a);
