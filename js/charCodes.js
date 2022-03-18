// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667 total1 total2 = 656661

function calc(x) {
  let total1 = "";
  let total2 = "";
  for (let i = 0; i < x.length; i++) {
    let charCode = x.charCodeAt(i).toString();
    total1 += charCode;
  }
  for (let i = 0; i < total1.length; i++) {
    let code = total1[i];
    if (code === "7") {
      code = "1";
    }
    total2 += code;
  }
  // let t = 0
  // let y = 0
  let t = total1.split("").reduce((total, num) => (total += Number(num)), 0);
  let y = total2.split("").reduce((total, num) => (total += Number(num)), 0);

  let result = t - y;
  return result;
}
