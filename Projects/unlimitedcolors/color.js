//random color generate
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalid;
const startChangingColor = function () {
  if(!intervalid){
    intervalid = setInterval(changeBGColor,500)
  }
  function changeBGColor(){
    document.body.style.backgroundColor = randomcolor()
  }
}
const stopChangingColor = function () {
  clearInterval(intervalid);
  intervalid = null;
}


document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);

