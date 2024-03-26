
const jasonArr = [
  {img: 'images/3.jpg',title: 'DJI Inspire 3', bigSpan: '$700,99', smallSpan: '989,09', stars: ['&starf;', '&starf;', '&starf;', '&starf;', '&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'},
  {img: 'images/1.jpg',title: 'DJI Googles 2', bigSpan: '$690,29', smallSpan: '790,02', stars: ['&starf;', '&starf;', '&starf;', '&starf;', '&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'},
  {img: 'images/bn1.jpg',title: 'DJI Mavic Air', bigSpan: '$710,09', smallSpan: '889,19', stars: ['&starf;', '&starf;','&starf;', '&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'},
  {img: 'images/bn4.jpg',title: 'LANSENXI LS-XT6', bigSpan: '$900,1', smallSpan: '1989,06', stars: ['&starf;', '&starf;', '&starf;', '&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'},
  {img: 'images/2.jpg',title: 'DJI Phantom 4', bigSpan: '$490', smallSpan: '689,9', stars: ['&starf;', '&starf;', '&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'},
  {img: 'images/next.jpg',title: 'WLRC 2021', bigSpan: '$790', smallSpan: '909,0', stars: ['&starf;', '&starf;', '&starf;','&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'},
  {img: 'images/banner3.jpg',title: 'F-FLUGZEUG', bigSpan: '$610,80', smallSpan: '789,20', stars: ['&starf;', '&starf;', '&starf;', '&starf;'], descript: 'Lorem ipsum dolor sit. Dicta at quas obcaecati culpa perspiciatis natus corrupti ivolumes dae macgadchja amet qui cupiditate, ut ipsum optio tenetur.'}
]


let hamb = document.querySelector('.hamburguer')
let nav = document.querySelector('.navigation_menu')

let cart_img = document.querySelector('.cart_img')

let slide = document.querySelector('.slide')

let daily = document.querySelectorAll('.daily')

let leftArr = document.querySelector('.leftArr')
let rightArr = document.querySelector('.rightArr')

let customer = document.querySelectorAll('.customer')
let customers = document.querySelector('.customers')

let prevSlide = document.querySelector('.leftarrow')
let nextSlide = document.querySelector('.rightarrow')

let dots = document.querySelector('.dots')
let btndesc = document.querySelector('.button_desc')
let navItems = document.querySelector('.nav_items')

let nav_link = document.querySelectorAll('.nav_link')

let dailyArr = [2.99, 5.89, 9.99]
let weeklyArr = [19.99, 28.89, 49.99]

let bool = true

let src1 = "images/icon-hamburger.svg"
let src2 = "images/icon-close.svg"

//toggle hamburguer for mobile
let too = true

  const func1 = ()=>{
    hamb.src = `${src2}`
    nav.style.left = '0px'
  }
  
  const func2 = ()=>{
    
    hamb.src = `${src1}`
    nav.style.left = '-100%'
  }

hamb.addEventListener('click', ()=>{

  if(too == true){
    too = false
    func1()
  }else{
    too = true
    func2()
  }

})

//explore button, scrolling efect
document.querySelector('.explore').addEventListener('click', ()=> document.querySelector('#exploration').scrollIntoView())

let modal = document.querySelector('.modal')

//cards items (slider)

jasonArr.map((e, i)=>{

  let itemsDrones = document.querySelector('.clonagem .slider_card').cloneNode(true)
  slide.append(itemsDrones)

  itemsDrones.querySelector('.im img').src = e.img
  itemsDrones.querySelector('.slider_content h3').textContent = e.title
  itemsDrones.querySelector('.slider_content .prices .big').textContent = e.bigSpan
  itemsDrones.querySelector('.slider_content .prices .small').textContent = e.smallSpan


  itemsDrones.querySelector('.im img').addEventListener('click', (index)=>{

    //console.log(index.target.className)
    //console.log(index.offsetX, index.offsetY)
    
    modal.style.display = 'flex'

    document.querySelector('.images_section img').src = e.img
    document.querySelector('.modal_desc h3').textContent = e.title
    document.querySelector('.modal_desc .description').textContent = e.descript
    document.querySelector('.modal_desc .stars').innerHTML = `<span>${e.stars.join('')}</span>`
    document.querySelector('.increase .preco').textContent = e.bigSpan
    document.querySelector('.increase .smallp').textContent = e.smallSpan

    document.querySelector('.closeModal').addEventListener('click', ()=> modal.style.display = 'none')
    document.addEventListener('keydown', (e)=>{
      console.log(e.key);
      if (e.key == 'Escape') modal.style.display = 'none'
    })
    //a.addEventListener('click', (n)=> console.log(n, b))
    
  })
  let cart = itemsDrones.querySelectorAll('.cart')

  cart.forEach((ele, l)=> {
    
      let div = document.createElement('div')
      let img = document.createElement('img')
      let spanName = document.createElement('span')
      let spanMinus = document.createElement('span')
      let spanPlus = document.createElement('span')
      let spanNumber = document.createElement('span')
      let button = document.createElement('button')
      button.className = 'increased'
      button.appendChild(spanMinus)
      button.appendChild(spanNumber)
      button.appendChild(spanPlus)
  
      spanMinus.textContent = '-'
      spanPlus.textContent = '+'
      spanNumber.textContent = '1'
      spanName.className = 'name'
      spanName.textContent = e.title
      img.setAttribute('src', `${e.img}`)
      div.className = 'shop'
      div.append(img)
      div.append(spanName)
      div.append(button)
      
      let contagem = document.querySelector('.counter')
      
      ele.addEventListener('click', (el,)=> {
        
        cart_img.append(div)
        document.querySelector('.empty').style.display = 'none'
        contagem.style.display = 'flex'

      })
        
  })
    
})

//sliders sections, all the sliders
let sliderCard = document.querySelectorAll('.slider_card')

let index = 0

rightArr.addEventListener('click', ()=>{

  (index <= sliderCard.length-1) ? slide.style.transform = `translateX(-${310*(index)}px)` : index = 0
  index++

})

leftArr.addEventListener('click', ()=>{
  
  if(index > 0){
    slide.style.transform = `translateX(-${310*(index-1)}px)`
    index--
  }else{
    index = sliderCard.length -1
  }

})

let i = 1

for(let i = 0; i < customer.length; i++){

  let div = document.createElement('div')
  div.className = 'dot'
  dots.append(div)
  
}

let dot = document.querySelectorAll('.dot')

dot[0].classList.add('change')

let dele = ()=>{
  document.querySelector('.change').classList.remove('change')
}


dot.forEach((e, j)=>{
  
  e.addEventListener('click', (element)=>{
    
    customers.style.transform = `translateX(-${100*j}%)`
    dele()
    element.target.classList.add('change')

  })

})


nextSlide.addEventListener('click', ()=>{

  if(i < customer.length){
    customers.style.transform = `translateX(-${100*i}%)`
    i++
  }else{
    customers.style.transform = `translateX(0%)`
    i = 1
  }

  dele()
  dot[i - 1].classList.add('change')

})
prevSlide.addEventListener('click', ()=>{

  if(i > 1){
    customers.style.transform = `translateX(-${100*(i-2)}%)`
    i--
  }else{
    customers.style.transform = `translateX(-${100*(customer.length-1)}%)`
    i = customer.length

  }

  dele()
  dot[i - 1].classList.add('change')

})

//header scrolling


let main = document.querySelector('.main')

let stickyHeader = (entries)=>{
  
  const [entry] = entries
  
  if(entry.isIntersecting) document.querySelector('.header_container').classList.add('scroll')
  else document.querySelector('.header_container').classList.remove('scroll')

}

const headerObs = new IntersectionObserver(stickyHeader, {

  root: null,
  threshold: 0,
  rootMargin: '-45px'
})

headerObs.observe(main)

//intersectionObserver takes two parameters, first, the function and second the object


//daily and weekly plans

daily.forEach((e)=>{

  e.addEventListener('click', (el)=>{

    document.querySelector('.day').classList.remove('day')
    e.classList.add('day')

    if (bool) {
      bool = false
      document.querySelectorAll('.pbig').forEach((e, i)=> e.textContent = weeklyArr[i])
    }else{
      bool = true
      document.querySelectorAll('.pbig').forEach((e, i)=> e.textContent = dailyArr[i])
    }
    
  })
  
})


document.querySelector('.icon_cart').addEventListener('click', ()=> document.querySelector('.cart_section').classList.toggle('zero'))

//nav links

document.querySelectorAll('.nav_items ul li').forEach((na)=>{

  na.addEventListener('click', ()=>{

    document.querySelector('.active').classList.remove('active')
    na.classList.add('active')

  })

})


//revealing the sections
let sections = document.querySelectorAll('.sections')

const showSections = (entries, observer)=>{

  let [entry] = entries

  if(!entry.isIntersecting) return
  entry.target.classList.remove('efeito')

  observer.unobserve(entry.target)
}

const allsectionsObs = new IntersectionObserver(showSections, {
  root: null,
  threshold: 0.15,
})

sections.forEach((e)=>{
  allsectionsObs.observe(e)
  e.classList.add('efeito')
})




document.querySelector('.button_desc').addEventListener('click', ()=> modal.style.display = 'none')