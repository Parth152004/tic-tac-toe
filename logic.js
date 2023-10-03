var num = 0
var arr = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
]
var a = document.getElementById('row11')
var a2 = document.getElementById('row12')
var a3 = document.getElementById('row13')
var a21 = document.getElementById('row21')
var a22 = document.getElementById('row22')
var a23 = document.getElementById('row23')
var a31 = document.getElementById('row31')
var a32 = document.getElementById('row32')
var a33 = document.getElementById('row33')
var btn = document.getElementById('reset')
var win = document.getElementById('win')

btn.addEventListener('click', function () {
  a.innerHTML = ''
  a2.innerHTML = ''
  a3.innerHTML = ''
  a21.innerHTML = ''
  a22.innerHTML = ''
  a23.innerHTML = ''
  a31.innerHTML = ''
  a32.innerHTML = ''
  a33.innerHTML = ''

  arr[0][0] = 2
  arr[0][1] = 2
  arr[0][2] = 2
  arr[1][0] = 2
  arr[1][1] = 2
  arr[1][2] = 2
  arr[2][0] = 2
  arr[2][1] = 2
  arr[2][2] = 2

  win.style.display = 'none'
  console.log(arr)
})
function seeresult() {
  if (arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
    
  }
  if (arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }
  if (arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }
  if (arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }
  if (arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }
  if (arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }
  if (arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }
  if (arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1) {
    win.style.display = 'block'
    win.innerHTML = 'winner is 0'
  }

  if (arr[0][0] == 0 && arr[1][0] == 0 && arr[2][0] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[0][0] == 0 && arr[0][1] == 0 && arr[0][2] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[0][2] == 0 && arr[1][2] == 0 && arr[2][2] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[2][0] == 0 && arr[2][1] == 0 && arr[2][2] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[1][0] == 0 && arr[1][1] == 0 && arr[1][2] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[0][1] == 0 && arr[1][1] == 0 && arr[2][1] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[0][0] == 0 && arr[1][1] == 0 && arr[2][2] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
  if (arr[0][2] == 0 && arr[1][1] == 0 && arr[2][0] == 0) {
    win.style.display = 'block'
    win.innerHTML = 'winner is X'
  }
}
a.addEventListener('click', function () {
  if (num == 0) {
    a.innerHTML = '0'
    arr[0][0] = 1
    num = 1
  } else {
    a.innerHTML = 'X'
    arr[0][0] = 0
    num = 0
  }

  seeresult()
})
a2.addEventListener('click', function () {
  if (num == 0) {
    a2.innerHTML = '0'
    arr[0][1] = 1
    num = 1
  } else {
    a2.innerHTML = 'X'
    arr[0][1] = 0
    num = 0
  }
  seeresult()
})
a3.addEventListener('click', function () {
  if (num == 0) {
    a3.innerHTML = '0'
    arr[0][2] = 1
    num = 1
  } else {
    a3.innerHTML = 'X'
    arr[0][2] = 0
    num = 0
  }
  seeresult()
})
a21.addEventListener('click', function () {
  if (num == 0) {
    a21.innerHTML = '0'
    arr[1][0] = 1
    num = 1
  } else {
    a21.innerHTML = 'X'
    arr[1][0] = 0
    num = 0
  }
  seeresult()
})
a22.addEventListener('click', function () {
  if (num == 0) {
    a22.innerHTML = '0'
    arr[1][1] = 1
    num = 1
  } else {
    a22.innerHTML = 'X'
    arr[1][1] = 0
    num = 0
  }
  seeresult()
})
a23.addEventListener('click', function () {
  if (num == 0) {
    a23.innerHTML = '0'
    arr[1][2] = 1
    num = 1
  } else {
    a23.innerHTML = 'X'
    arr[1][2] = 0
    num = 0
  }
  seeresult()
})
a31.addEventListener('click', function () {
  if (num == 0) {
    a31.innerHTML = '0'
    arr[2][0] = 1
    num = 1
  } else {
    a31.innerHTML = 'X'
    arr[2][0] = 0
    num = 0
  }
  seeresult()
})
a32.addEventListener('click', function () {
  if (num == 0) {
    a32.innerHTML = '0'
    arr[2][1] = 1
    num = 1
  } else {
    a32.innerHTML = 'X'
    arr[2][1] = 0
    num = 0
  }
  seeresult()
})
a33.addEventListener('click', function () {
  if (num == 0) {
    a33.innerHTML = '0'
    arr[2][2] = 1
    num = 1
  } else {
    a33.innerHTML = 'X'
    arr[2][2] = 0
    num = 0
  }
  seeresult()
})
