let rangeCM = document.getElementById('CM')
let rangekg = document.getElementById('KG')
let cmResult = document.querySelector('.cmResult')
let kgResult = document.querySelector('.kgResult')


rangekg.addEventListener('change', changeHandler)
rangeCM.addEventListener('change', changeHandler)



function changeHandler(){
   let result = rangekg.value / ((rangeCM.value/100) * (rangeCM.value/100));
   
   let resultStatus = document.querySelector('.status')
 

   if(result < 18.5){
   resultStatus.innerHTML = 'Underweight'


   }else if(result > 18.5 && result < 24.9){
    resultStatus.innerHTML = 'normal'

   }else if(result > 24.9 && result < 29.9){
    resultStatus.innerHTML = 'overWeight'

   }else{
    resultStatus.innerHTML = 'fat'

   }
   


   let resultNUM = document.querySelector('.result')
   resultNUM.innerHTML = result.toFixed(1)
}