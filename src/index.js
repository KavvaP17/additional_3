module.exports = function getBase(num) {
  let tmp=num.split('').reduce((prev,next)=>Math.max(prev,next));
  if (tmp===1 && num.split('').length>1){
    return '9'.repeat(num.split('').length-1);
  }
  let base=2;
  while (true){
    let numOne=(Math.log(num)/Math.log(base)|0)+1;
    if (parseInt('1'.repeat(numOne),base)===(+num)){
      return base;
    }
    base++;
  }
}
