"use strict";
// mapped types
Object.defineProperty(exports, "__esModule", { value: true });
// map
const arrayOfNum = [1, 4, 6];
const arrayOfstring = ["1", "4", "6"];
const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);
const user = {
    id: 222,
};
/*

T >>>   { height: string; width: number }
  
{  height: string; width: number }['height']: number

*/
//"height" |"width"
const area1 = {
    height: "50",
    width: false,
};
//# sourceMappingURL=mapped.js.map