const options = [
      {value:-1, label:"Nu stiu"},
      {value:1, label:"Shor"},
      {value:2, label:"Plaha"}
]

const buildForm = (id, options) => {
  var form = document.getElementById("vote")
   var h2 = document.createElement("h2")
    h2.innerText ="Pentru cine votezi?"
   form.appendChild(h2)
  options.forEach(element => {
    var input = document.createElement("input")
    input.type = "radio"
    input.value =  element.value
     form.appendChild(input)
     var text = document.createTextNode(element.label)
     form.appendChild(text)
     var br_1 = document.createElement("br")
     var br_2 = document.createElement("br")
     form.appendChild(br_1)
     form.appendChild(br_2)   
  });
  var button = document.createElement("button")
     button.innerText = "Trimite"
     button.onclick = (event) => {
         event.preventDefault() // opreste optiunea implicita
         try{
             var vote = document.querySelector('#vote input:Checked').value
         alert(vote)
         }catch(e){
             alert("Trebuie sa alegi o valoare!")
         }
     }
     form.appendChild(button)

} 


buildForm("vote", options )