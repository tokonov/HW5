
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const rus =  document.querySelector('#rus')

console.log(som);

const convert  =(elem , target ,target2) =>{
    const req =new XMLHttpRequest()
    elem.addEventListener("input" , () =>{
        req.open("GET", "date.json");
        req.setRequestHeader("Content-type" , "application/json")
        req.send()
        req.addEventListener("load" , () =>{
            const response  =JSON.parse(req.response)
            if(elem === som){
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value / response.rus).toFixed(2)
            }
            else if(elem === usd){
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.usd / response.rus).toFixed(2)
            }
            else if(elem === rus){
                target.value = (elem.value * response.rus / response.usd).toFixed(2)
                target2.value = (elem.value * response.rus).toFixed(2)
            }

            elem.value === ""  && (target.value = "")
            elem.value === ""  && (target2.value = "")

        })
    }
)}
convert(som, usd, rus)
convert(usd, som,rus)
convert(rus,usd, som)


// const convert  =(elem , target ,target2) =>{
//     const req =new XMLHttpRequest()
//     elem.addEventListener("input" , () =>{
//         req.open("GET", "date.json");
//         req.setRequestHeader("Content-type" , "application/json")
//         req.send()
//         req.addEventListener("load" , () =>{
//             const response  =JSON.parse(req.response)
//             // if(isTrue){
//             //     target.value = (elem.value / response.usd).toFixed(2)
//             // }
//             // else{
//             //     target.value = (elem.value * response.usd).toFixed(2)
//             // }
//             target2
//                 ? target.value = (elem.value / response.usd).toFixed(2)
//                 :target.value = (elem.value * response.usd).toFixed(2)
//             elem.value === ""  && (target.value = "")
//         })
//     }
// )}
// convert(som, usd, rus)
// convert(usd, som, '')