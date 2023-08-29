let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function rand(max){
	return Math.ceil(Math.random() * max)
}

function doThingy(){
  let a = 1
  let b = 1

  a = rand(7)
  b = rand(7)
  console.log(arr[a]+b)
  document.querySelector('#square').innerText = arr[a]
  document.querySelector('#square').innerText += b
}
document.querySelector('#btn').onclick = function(){
  doThingy()
}
doThingy()