
var vainput = document.querySelector('#inputs');
var check = document.querySelector('.btncheck');
var ques = document.querySelector('.ctn-ques');
var sucess= document.querySelector('.cnt-sucess');
var imghp = document.querySelector('.img-happy');
var imgsad = document.querySelector('.img-sad');
var video = document.querySelector('.video');
var videoo = document.querySelector('#videoo');
var audio1= document.querySelector('#audio1');
var question= document.querySelector('.question');
var containercard = document.querySelector('.container-card')



vainput.addEventListener('focus',()=>{
  
    audio1.play()
  })

check.addEventListener('click',(e)=>{
    e.stopPropagation
    var a =vainput.value
    if(a === "03/10/2003")
    {
        ques.classList.add('active')
        sucess.classList.add('active')
        sucess.addEventListener('click',(ev)=>{
          
            ev.stopPropagation
            question.classList.add('active')
            video.classList.add('active')
            audio1.pause()
            videoo.play()
            
            setTimeout(()=>{
                 
                videoo.pause()
                audio1.play()
                video.classList.remove('active')
                containercard.classList.add('active')
            },39900)
             }
        )
        
        
    }
    else
    {
      imghp.classList.add('active')
      imgsad.classList.add('active')
      vainput.addEventListener('focus',()=>{
        imgsad.classList.remove('active')
        imghp.classList.remove('active')
       
      })
    }
})

