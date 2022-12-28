let slides = document.querySelectorAll(".slideOne")
let slidesMult = document.querySelectorAll(".slideTwo")
let btnNext = document.querySelector("#btnNext")
let btnPrev = document.querySelector("#btnPrev")
let btnNextMult = document.querySelector("#btnNextMult")
let btnPrevMult = document.querySelector("#btnPrevMult")
let currentSlide = slides.length -1
let maxNum = slides.length -1
let currentSlideMulty = 0
let length2 = slidesMult.length

let startedindex = maxNum


function slideMult(){
    
    slidesMult.forEach((slide,index)=>{
            //   console.log(slide.innerHTML)
            slide.style.transform = `translateX(${(index-currentSlideMulty)*100}%)`          
        
    })
    if(currentSlideMulty===0){
        currentSlideMulty = length2 -3
    }else{
        currentSlideMulty -=3
    }
}
// slideMult()


// function multNext(){
//     if(startedindex == 0){
//         startedindex =5
//         return startedindex
//     }
//     startedindex--
//     return startedindex
// }
// btnPrevMult.addEventListener("click",slideMult)





// setInterval(slideMult, 3000)

function next(){
    
    if(currentSlide === maxNum){
        currentSlide = 0
    }else{
        currentSlide += 1
    }
    slides.forEach((slide,index)=>{
        slide.style.transform = `translateX(${(index-currentSlide)*100}%)`
    })

    console.log("Next is working",currentSlide)
}

function prev(){
    console.log(currentSlide,maxNum)

    if(currentSlide ===0){
        currentSlide =maxNum
    }else{
        currentSlide -= 1
    }
    slides.forEach((slide,index)=>{
        slide.style.transform = `translateX(${( index - currentSlide )*100}%)`
    })
    console.log("Prev is working",currentSlide)
}


btnNext.addEventListener("click",next)
btnPrev.addEventListener("click",prev)




// let positionsValue = {}
// let positions = {} //1ci indeksleri yaz  2ci de movqeyi

// function positionsValueSet(){
//     slidesMult.forEach((slide,index)=>{
//         positionsValue[index] = (index*100)
//         positions[index] = index
//         slide.style.transform = `translate(${(positionsValue[index])}%)`

//     })
// }
// positionsValueSet()


// let positionLength = Object.keys(positions).length

// function buttonNext(){
//     // console.log(positions.size)
//     for(let a in positions){
//         // console.log(positions[a])
//         positions[a] +=1
//         // console.log(positionLength)
//         if(positions[a]==positionLength){
//             // console.log("sdfhbsdf")
//             positions[a]=0
//         }

//         // console.log(positions[a])
//     }
//     slidesMult.forEach((slide,index)=>{
//         console.log(positions[index])
//         slide.style.transform = `translate(${(positionsValue[positions[index]])}%)`
//     })
// }

// // console.log("length",positionLength)

// console.log(positionsValue,positions)


// btnPrevMult.addEventListener("click",buttonNext)
let counterNext = 0
let maxSize = slidesMult.length

function queueNext(){  
    if(counterNext==(maxSize-3)){
        counterNext=0
    }else{
        counterNext +=3
    }
    slidesMult.forEach((slide,index)=>{
        // console.log(slide.innerHTML,index,counterNext)
        slide.style.transform = `translateX(${(index - counterNext)*100}%)`
    })
    
    console.log(counterNext)

}

function queuePrev(){
    
// console.log("hgfhg",counterNext)
if(counterNext==0){
    counterNext=maxSize-3
}else{
    counterNext -=3
}  

    slidesMult.forEach((slide,index)=>{
        // console.log(slide.innerHTML,index,counterNext)
        slide.style.transform = `translateX(${(index -counterNext)*100}%)`
    })
    

}

queuePrev()
queueNext()
btnNextMult.addEventListener("click",queueNext)
btnPrevMult.addEventListener("click",queuePrev)


let slidesAuto = document.querySelectorAll(".slideThree")
let btnNextAuto = document.querySelector("#btnNextAuto")
let btnPrevAuto = document.querySelector("#btnPrevAuto")

let counterAuto = 0

function nextAuto(){
    if(counterAuto==slidesAuto.length-3){
        counterAuto=0
    }else{
        counterAuto++
    }
    slidesAuto.forEach((slide,index)=>{
        slide.style.transform = `translate(${(index-counterAuto)*100}%)`
    })
    
    
}
function prevAuto(){
    // console.log(counterAuto)
    if(counterAuto==0){
        counterAuto=slidesAuto.length -3
    }else{
        counterAuto--
        // console.log(counterAuto)
    }
    
    slidesAuto.forEach((slide,index)=>{
        slide.style.transform = `translate(${(index-counterAuto)*100}%)`
    })
    
    
}

nextAuto()
prevAuto()
// counterAuto=0
btnNextAuto.addEventListener("click",nextAuto)
btnPrevAuto.addEventListener("click",prevAuto)

setInterval(nextAuto,2000)


let slidesCenter = document.querySelectorAll(".slideFour")
let btnNextCenter = document.querySelector("#btnNextCenter")
let btnPrevCenter = document.querySelector("#btnPrevCenter")
let counterCenter = 0
function nextCenter(){
    

    slidesCenter.forEach((slide,index)=>{
        console.log(index,counterCenter)
        if((index-counterCenter)==1){
            slidesCenter[index].style.backgroundColor = "red" 
            slidesCenter[index].style.height = "100%" 
        }else{
            slidesCenter[index].style.backgroundColor = "green" 
            slidesCenter[index].style.height = "80%" 


        }
        slide.style.transform = `translateX(${(index-counterCenter)*105}%)`
    })
    // slidesCenter[counterCenter].style.backgroundColor = "red"
    if(counterCenter==(slidesCenter.length-3) ){
        console.log("sdkfsdkf")
    
            counterCenter=0
        }else{
    
            counterCenter++
        }

}
function  prevCenter(){
    if(counterCenter == 0){
        

        counterCenter = (slidesCenter.length -3)
    }else{
        
        counterCenter--
    }

    slidesCenter.forEach((slide,index)=>{
        if((index-counterCenter)==1){
            slidesCenter[index].style.backgroundColor = "red" 
        }else{
            slidesCenter[index].style.backgroundColor = "green" 

        }
        slide.style.transform = `translateX(${(index-counterCenter)*105}%)`
    })
    
}


nextCenter()
// prevCenter()
btnNextCenter.addEventListener("click",nextCenter)
btnPrevCenter.addEventListener("click",prevCenter)