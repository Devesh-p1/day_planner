
 //you have to grab all the buttons $(".classButton")=[button1,button2,etc]

//  = ( "button1", "button2", "button3", "button4", "button5", "button6", "botton7" );
 
  let button1 = document.querySelector('#button1') 
  let button2 = document.querySelector('#button2') 
  let button3 = document.querySelector('#button3') 
  let button4 = document.querySelector('#button4') 
  let button5 = document.querySelector('#button5') 
  let button6 = document.querySelector('#button6') 
  let button7 = document.querySelector('#button7') 
  let button8 = document.querySelector('#button8') 
  const input1 = document.querySelector('#item1')
  const input2 = document.querySelector('#item2')
  const input3 = document.querySelector('#item3')
  const input4 = document.querySelector('#item4')
  const input5 = document.querySelector('#item5')
  const input6 = document.querySelector('#item6')
  const input7 = document.querySelector('#item7')
  const input8 = document.querySelector('#item8')

  button1.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item1', JSON.stringify(input1.value))
    // itemsArray.push(input1.value)
    // localStorage.setItem('item1', JSON.stringify(input1.value))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button2.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item2', JSON.stringify(input2.value))
    // itemsArray.push(input2.value)
    // localStorage.setItem('item2', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button3.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item3', JSON.stringify(input3.value))
    // itemsArray.push(input3.value)
    // localStorage.setItem('item3', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button4.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item4', JSON.stringify(input4.value))
    // itemsArray.push(input4.value)
    // localStorage.setItem('item4', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button5.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item5', JSON.stringify(input5.value))
    // itemsArray.push(input5.value)
    // localStorage.setItem('item5', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button6.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item6', JSON.stringify(input6.value))
    // itemsArray.push(input6.value)
    // localStorage.setItem('item6', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button7.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item7', JSON.stringify(input7.value))
    // itemsArray.push(input7.value)
    // localStorage.setItem('item7', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })
  button8.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem('item8', JSON.stringify(input8.value))
    // itemsArray.push(input8.value)
    // localStorage.setItem('item8', JSON.stringify(itemsArray))
    // const data = JSON.parse(localStorage.getItem('items'))
  })

  
    //1 tthe logic of saving the text into the local storage
    //2 adding an event listeners to all the buttons with a loop
  $(document).ready(function(){
    $('#item1').val(localStorage.getItem('item1'));
    $('#item2').val(localStorage.getItem('item2'));
    $('#item3').val(localStorage.getItem('item3'));
    $('#item4').val(localStorage.getItem('item4'));
    $('#item5').val(localStorage.getItem('item5'));
    $('#item6').val(localStorage.getItem('item6'));
    $('#item7').val(localStorage.getItem('item7'));
    $('#item8').val(localStorage.getItem('item8'));
  })
    

setInterval(function(){
    var hour = moment();
var ct5 = document.querySelector('#ct5').textContent=hour
},1000)




function display_ct5() {
   //load the local storage
   //make a loop to take the textarea values 
   var nine = document.getElementById("9:00am").innerHTML;
   var ten = document.getElementById("10:00am").innerHTML;
   var eleven = document.getElementById("11:00am").innerHTML;
   var twelve = document.getElementById("12:00pm").innerHTML;
   var one = document.getElementById("1:00pm").innerHTML;
   var two = document.getElementById("2:00pm").innerHTML;
   var three = document.getElementById("3:00pm").innerHTML;
   var four = document.getElementById("4:00pm").innerHTML;
   console.log(nine)
   //put the values stored in the textarea
}

var currentHour = moment().format("HH");
console.log(currentHour)
display_ct5()

if (currentHour == 9){
  $('#item1').addClass('present')
} else if (currentHour > 9){
  $('#item1').addClass('past')
} else {
  $('#item1').addClass('future')
}

if (currentHour == 10){
  $('#item2').addClass('present')
} else if (currentHour > 10){
  $('#item2').addClass('past')
} else {
  $('#item2').addClass('future')
}

if (currentHour == 11){
  $('#item3').addClass('present')
} else if (currentHour > 11){
  $('#item3').addClass('past')
} else {
  $('#item3').addClass('future')
}

if (currentHour == 12){
  $('#item4').addClass('present')
} else if (currentHour > 12){
  $('#item4').addClass('past')
} else {
  $('#item4').addClass('future')
}

if (currentHour == 13){
  $('#item5').addClass('present')
} else if (currentHour > 13){
  $('#item5').addClass('past')
} else {
  $('#item5').addClass('future')
}

if (currentHour == 14){
  $('#item6').addClass('present')
} else if (currentHour > 14){
  $('#item6').addClass('past')
} else {
  $('#item6').addClass('future')
}

if (currentHour == 15){
  $('#item7').addClass('present')
} else if (currentHour > 15){
  $('#item7').addClass('past')
} else {
  $('#item7').addClass('future')
}

if (currentHour == 16){
  $('#item8').addClass('present')
} else if (currentHour > 16){
  $('#item8').addClass('past')
} else {
  $('#item8').addClass('future')
}
// function displaycolor() {
//     var hour=moment().hour()
//     //logic that tracka the time and compares all of the rows time values with the current time to change the class color
//     //grab all the row divs with querySelectorAll or $() 
//     // var rows;
//     rows.forEach(row,function(){
//         if(row.id===hour){
//             //change textarea background color depending of the time with a class
//         }else if(row.id<hour){

//         }else{}
//     })
//     // if
// }




