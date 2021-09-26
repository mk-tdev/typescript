console.log('Typescript Object Types');
console.log('Typescript Tuple Type');
console.log('Typescript Enum Type');
console.log('Typescript Union Type');
console.log('Typescript Literal Type');
console.log('Typescript Function Type');
// ENUM Type
var Role;
(function (Role) {
    Role["WORKING"] = "WORKING";
    Role[Role["MANAGING"] = 0] = "MANAGING";
})(Role || (Role = {}));
;
var person = {
    name: 'Mk',
    age: 30,
    hobbies: ["Coding", "Problem Solving", "Tech"],
    role: [2, 'coder'],
    mainRole: Role.MANAGING
};
// person.role.push('athlete');
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
console.log(person);
// Union type
function combine(input1, input2, resultConversion) {
    console.log(resultConversion);
    return typeof input1 === 'number' ? input1 + input2 : input1.toString() + input2;
}
console.log(combine(1, 3));
console.log(combine('1', 3, 'as-text'));
// Function Type
var combineValues;
function addition(n1, n2) {
    return n1 + n2;
}
combineValues = addition;
var combText;
function combineText(a, b, cb) {
    // return cb(a + ' ' + b);
    cb(a + ' ' + b);
}
console.log(combineValues(2, 45));
combineText('Hi', 'There!', function (res) { return console.log(res); });
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('Not found!', 404);
