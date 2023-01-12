async function request (method) { //모듈화 가능
  const res = fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen', {
    method// GET, POST, PUT, DELETE => 읽기, 생성, 수정, 삭제
            //CRUD Create Read U Delete
    // headers: {},
    // body: {}
  })
  return await res.json() //Promise instance 반환한다.
}

console.log(await request())

function loadImage(src){
  return new Promise((resolve) => {
    const imgEl = document.createElement('img')
    imgEl.src = src
    imgEl.addEventListener('load', () =>{
      resolve()
    })
  })
}

const src = 'https://picsum.photos/2000'
await loadImage(src)
document.body.innerHTML = `<img src="${src}" />`
document.body.append(document.createElement('div').innerHTML('load'))