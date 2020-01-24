document.addEventListener(`DOMContentLoaded`, function() {
  let button = document.createElement(`button`);
  let btnText = document.createTextNode(`Add Square`);
  let i = 0;
  button.appendChild(btnText);
  document.body.appendChild(button);
 ;
  button.addEventListener(`click`, function() {
    let div = document.createElement(`div`);
    div.innerText = i;
    div.className = `box`;
    div.id = `i`
    //div.appendChild(divTxt);
    document.body.appendChild(div);
    i++;
    div.addEventListener(`click`,divClicked);
    div.addEventListener(`dblclick`,divdblClicked);
  });
  
    function divClicked(e) {
        let random = Math.floor((Math.random() * 10) + 1);
        e.currentTarget.style.backgroundColor = colorArray[random]
    };

    function divdblClicked(box) {
     if ( box.hasChildNodes()) {
         box.removeChild(box.childNodes[2]);
        }

          /*  element = e.currentTarget
        element.parentNode.removeChild(element) */
   };


});
const colorArray = [`purple`, `blue`, `pink`, `red`, `yellow`, `green`, `orange`,`coral`,`crimson`,`skyblue`];
