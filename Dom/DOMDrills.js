document.addEventListener(`DOMContentLoaded`, function () { //this is how to add content to an html with JS
    let div = document.createElement(`div`);
    div.className = `header-container`;
    let h1 = document.createElement(`h1`);
    let text = document.createTextNode(`This is an H1 `);
    h1.className = `h1`;
    document.body.appendChild(div);
    h1.appendChild(text);
    div.appendChild(h1);
    let h2 = document.createElement(`h2`);
    let h2Text = document.createTextNode(`This is an H2`);
    h2.className = `h2`;
    h2.appendChild(h2Text);
    div.appendChild(h2);
    let h3 = document.createElement(`h3`);
    let h3Text = document.createTextNode(`This is an H3`);
    h3.className = `h3`;
    h3.appendChild(h3Text);
    div.appendChild(h3);
    let h4 = document.createElement(`h4`);
    let h4Text = document.createTextNode(`This is an H4`);
    h4.className = `h4`;
    h4.appendChild(h4Text);
    div.appendChild(h4);
    let h5 = document.createElement(`h5`);
    let h5Text = document.createTextNode(`This is an H5`);
    h5.className = `h5`;
    h5.appendChild(h5Text);
    div.appendChild(h5);
    let h6 = document.createElement(`h6`);
    let h6Text = document.createTextNode(`This is an H6`);
    h6.className = `h6`;
    h6.appendChild(h6Text);
    div.appendChild(h6);

    const headerArray = [h1, h2, h3, h4, h5, h6];     //this is how to call on an array for h elemets in html
    headerArray.forEach(function (element) {
        element.addEventListener(`dblclick`, function () {
            headerClicked(element);
        });

    })
    function headerClicked(header) {
        let random = Math.floor((Math.random() * 8) );
        header.style.color = colorsArray[random]
    };
    /*  h1.addEventListener(`dblclick`,h1Clicked)
    
        function h1Clicked() {                                 this will change thecolor of just one element
             let random = Math.floor((Math.random() * 8) + 1);
            h1.style.color = colorsArray[random] 
        }; */

    let liNum = 1
    let button = document.getElementsByClassName(`new`)
    button[0].addEventListener(`click`, function () {
            let li = document.createElement(`li`);
            let liText = document.createTextNode(`This is list item ${liNum}`);
            li.id = liNum;
            li.append(liText);
            document.body.append(li);
            liNum++;
            li.addEventListener(`click`, liClicked);
            li.addEventListener(`dblclick`,lidblClicked);
           
        })
        
    function liClicked(e) {
        let random = Math.floor((Math.random() * 8) + 1);
        e.currentTarget.style.color = colorsArray[random]
    }; 
     function lidblClicked(e) {
         element = e.currentTarget
         element.parentNode.removeChild(element)

    };




    
})
/* li.addEventListener(`click`, funtion(){
    liClicked
});*/
const colorsArray = [  //this is the array of colors that is called on in above DOM
    `blue`,
    `red`,
    `green`,
    `purple`,
    `yellow`,
    `brown`,
    `violet`,
    `lavender`
];