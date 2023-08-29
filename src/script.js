let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function rand(min, max){
	return Math.floor(Math.random() * max) + min
}

function doThingy(){
  let a = 1
  let b = 1

  a = rand(0,8)
  b = rand(1,8)
  console.log(arr[a]+b)
  document.querySelector('#square').innerText = arr[a]
  document.querySelector('#square').innerText += b
}
document.querySelector('#btn').onclick = function(){
  doThingy()
}
doThingy()