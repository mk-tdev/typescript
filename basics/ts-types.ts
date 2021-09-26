
console.log('Typescript Object Types');
console.log('Typescript Tuple Type');
console.log('Typescript Enum Type');
console.log('Typescript Union Type');
console.log('Typescript Literal Type');
console.log('Typescript Function Type');

// ENUM Type
enum Role {
  WORKING = 'WORKING',
  MANAGING = 0,
};

const person: {
  name: string;
  age: number;
  address?: object;
  hobbies: string[];
  role: [number, string]; // Tuple
  mainRole: Role;
} = {
  name: 'Mk',
  age: 30,
  hobbies: ["Coding", "Problem Solving", "Tech"],
  role: [2, 'coder'],
  mainRole: Role.MANAGING,
}

// person.role.push('athlete');

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}

console.log(person);

// Custom type
type Combinable = number | string;

// Union type
function combine(input1: Combinable, input2: number, resultConversion?: 'as-num' | 'as-text') {
  console.log(resultConversion);
  return typeof input1 === 'number' ? input1 + input2 : input1.toString() + input2;
}
console.log(combine(1, 3))
console.log(combine('1', 3, 'as-text'))

// Function Type
let combineValues: (a: number, b: number) => number;

function addition(n1: number, n2: number): number {
  return n1 + n2;
}

combineValues = addition;

let combText: (a: string, b: string, cb: (res: string) => void) => void;

function combineText(a: string, b: string, cb: (res: string) => void) {
  // return cb(a + ' ' + b);
  cb(a + ' ' + b);
}


console.log(combineValues(2, 45));

combineText('Hi', 'There!', (res) => console.log(res));


function generateError(message: string, code: number): never {

  throw { message: message, code: code }
}

generateError('Not found!', 404)