const input = document.querySelector('.input')
let btn1 = document.querySelector('#btn1')

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let rus = document.createElement('div')
    rus.className = 'ruText'
    for (let i = 0; i < input.value.length; i += 1) {
      if (input.value.length > 7) {
        rus.innerText = input.value.slice(0, 7) + '...'
      } else {
        rus.innerText = input.value
      }
    }
    /*alert1 (input.value)*/

    let eng = document.createElement('div')
    eng.className = 'enText'

    for (let i = 0; i < input.value.length; i += 1) {
      if (input.value.length > 7) {
        eng.innerText = translit(input.value).slice(0, 7) + '...'
      } else {
        eng.innerText = translit(input.value)
      }
    }
    const leftC = document.querySelector('.leftC')
    const rightC = document.querySelector('.rightC')

    let newLeftDiv = document.createElement('div')
    newLeftDiv.className = 'leftMid'
    newLeftDiv.append(rus)

    let newRightDiv = document.createElement('div')
    newRightDiv.className = 'rightMid'
    newRightDiv.append(eng)

    leftC.append(newLeftDiv)
    rightC.append(newRightDiv)

    let delBtn = document.createElement('div')
    delBtn.className = 'delBtn'
    newRightDiv.appendChild(delBtn)
    let btn2 = document.createElement('img')
    btn2.src = './icons/icon_small.png';
    btn2.alt = 'clean-icon';
    btn2.className = "btn2"
    delBtn.appendChild(btn2)

    btn2.addEventListener('click', function () {
      newRightDiv.remove()
      newLeftDiv.remove()
      numList()
    })

    function numList() {
      let num = document.querySelectorAll('.num');
      for (let i = 1; i < num.length; i++) {
        num[i].innerText = i + 1;
      }
    }

    let num = document.createElement('div')
    num.className = 'num'
    let num1 = document.querySelectorAll('.num')
    num1 = num1.length + 1
    num.innerText = num1
    newLeftDiv.append(num)

    if (input.value.length > 7) {
      let popupLeft = document.createElement('div')
      popupLeft.className = 'popupLeft'
      popupLeft.innerText = input.value
      newLeftDiv.append(popupLeft)
      
      let popupRight = document.createElement('div')
      popupRight.className = 'popupRight'
      popupRight.innerText = translit(input.value)
      newRightDiv.append(popupRight)
    }  
    
  }
})


btn1.addEventListener('click', function () {
  let rus = document.createElement('div')
  rus.className = 'ruText'
  for (let i = 0; i < input.value.length; i += 1) {
    if (input.value.length > 7) {
      rus.innerText = input.value.slice(0, 7) + '...'
    } else {
      rus.innerText = input.value
    }
  }
  /*alert1 (input.value)*/

  let eng = document.createElement('div')
  eng.className = 'enText'

  for (let i = 0; i < input.value.length; i += 1) {
    if (input.value.length > 7) {
      eng.innerText = translit(input.value).slice(0, 7) + '...'
    } else {
      eng.innerText = translit(input.value)
    }
  }

  const leftC = document.querySelector('.leftC')
  const rightC = document.querySelector('.rightC')

  let newLeftDiv = document.createElement('div')
  newLeftDiv.className = 'leftMid'
  newLeftDiv.append(rus)

  let newRightDiv = document.createElement('div')
  newRightDiv.className = 'rightMid'
  newRightDiv.append(eng)
  console.log(newRightDiv)

  leftC.append(newLeftDiv)
  rightC.append(newRightDiv)

  let delBtn = document.createElement('div')
  delBtn.className = 'delBtn'
  newRightDiv.appendChild(delBtn)
  let btn2 = document.createElement('img')
  btn2.src = './icons/icon_small.png';
  btn2.alt = '?????????????? ????????????';
  btn2.className = "btn2"
  delBtn.appendChild(btn2)

  btn2.addEventListener('click', function () {
    newRightDiv.remove()
    newLeftDiv.remove()
    numList()
  })

  function numList() {
    let num = document.querySelectorAll('.num');
    for (let i = 1; i < num.length; i++) {
      num[i].innerText = `${i + 1}`;
    }
  }

  let num = document.createElement('div')
  num.className = 'num'
  let num1 = document.querySelectorAll('.num')
  num1 = num1.length + 1
  num.innerText = num1
  newLeftDiv.append(num)

  if (input.value.length > 7) {
    let popupLeft = document.createElement('div')
    popupLeft.className = 'popupLeft'
    popupLeft.innerText = input.value
    newLeftDiv.append(popupLeft)
    
    let popupRight = document.createElement('div')
    popupRight.className = 'popupRight'
    popupRight.innerText = translit(input.value)
    newRightDiv.append(popupRight)
  }

})

let dictionary = {

  '??': 'a',
  '??': 'b',
  '??': 'v',
  '??': 'g',
  '??': 'd',
  '??': 'e',
  '??': 'yo',
  '??': 'zh',
  '??': 'z',
  '??': 'i',

  '??': 'y',
  '??': 'k',
  '??': 'l',
  '??': 'm',
  '??': 'n',
  '??': 'o',
  '??': 'p',
  '??': 'r',
  '??': 's',
  '??': 't',

  '??': 'u',
  '??': 'f',
  '??': 'h',
  '??': 'c',
  '??': 'ch',
  '??': 'sh',
  '??': 'sch',
  '??': '\'',
  '??': 'y',
  '??': '',
  '??': 'e',
  '??': 'yu',
  '??': 'ya',


  '??': 'A',
  '??': 'B',
  '??': 'V',
  '??': 'G',
  '??': 'D',
  '??': 'E',
  '??': 'Yo',
  '??': 'Zh',
  '??': 'Z',
  '??': 'I',

  '??': 'Y',
  '??': 'K',
  '??': 'L',
  '??': 'M',
  '??': 'N',
  '??': 'O',
  '??': 'P',
  '??': 'R',
  '??': 'S',
  '??': 'T',

  '??': 'U',
  '??': 'F',
  '??': 'H',
  '??': 'C',
  '??': 'Ch',
  '??': 'Sh',
  '??': 'Sch',
  '??': '\'',
  '??': 'Y',
  '??': '',
  '??': 'E',
  '??': 'Yu',
  '??': 'Ya',

};

function translit(str) {

  let newArr = []

  for (let i = 0; i < str.length; i++) {
    if (dictionary[str[i]] !== undefined) {
      newArr.push(dictionary[str[i]])
    } else {
      newArr.push(str[i])
    }
  }
  return newArr.join('')
}

let mainDelBtn = document.querySelector('.mainDelBtn')

mainDelBtn.addEventListener('click', function () {

  let leftList = document.querySelectorAll('.leftMid')
  let rightList = document.querySelectorAll('.rightMid')

  for (let i = 0; i < leftList.length; i++) {
    leftList[i].remove()
    rightList[i].remove()
  }
})
