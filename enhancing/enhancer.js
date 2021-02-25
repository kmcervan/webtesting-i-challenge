module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enchancement < 20){
    item.enchancement += 1;
  }
  return { ...item };
}

function fail(item) {
  if(item.enchancement < 15 ){
    item.durability -= 5;
  }else if (item.enchancement >= 15){
    if (item.enchancement > 16){
      item.enchancement -= 1;
    }
    item.durability -= 10;
  }
  return { ...item };
}

function repair(item) {
  if (item.durability <= 100){
    item.durability = 100;
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}
