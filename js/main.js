console.log("ok js");

//

var navEl=document.querySelector('nav');

window.addEventListener("scroll", function(event) {
  var top = this.scrollY,
      left =this.scrollX;

if(this.scrollY>=100)
{

  navEl.classList.add("isFixed");


}

else{

  navEl.classList.remove("isFixed");
}


      //console.log(this.scrollY);
}, false);




//
const bt = document.getElementById("toggleButtonMenu");
const el=document.getElementById("wrapMenu");


bt.addEventListener("click", function(){

 el.classList.toggle("visible");

});


//Description véhicule

const singleCont =document.getElementById("carSubContent");

if(singleCont){
fillSubCont("btDesc");
};

const onglets=document.querySelectorAll("#onglets li a");
console.log(onglets);

onglets.forEach((btOnglet) => {
  btOnglet.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(btOnglet.id);
    fillSubCont(btOnglet.id);
  });
});

//const btDesc=document.getElementById("btDesc");
/*btDesc.addEventListener("click", function(e){
  e.preventDefault();
//console.log("click");
fillSubCont(1);

});
*/



function fillSubCont(onglet)
{

//console.log("auto ?");

  
  singleCont.innerHTML="";
  var htmlIn;

switch(onglet)
{


  case "btDesc":

  
  htmlIn=`
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nibh neque. In at tortor sed lacus condimentum convallis ac sit amet dolor. Curabitur nulla nunc, pellentesque sed ultricies nec, dictum sed nulla.</p>
  
  <p>Aliquam quis tellus diam. Morbi risus dolor, tempor in dignissim ut, maximus at mi. In lobortis iaculis eros et vestibulum. Donec blandit hendrerit suscipit. Pellentesque condimentum viverra suscipit. Vivamus in faucibus libero. Sed sit amet tellus mauris. Aliquam faucibus auctor diam, non pellentesque ex venenatis at.Aliquam quis tellus diam. Morbi risus dolor, tempor in dignissim ut, maximus at mi. In lobortis iaculis eros et vestibulum. Donec blandit hendrerit suscipit. Pellentesque condimentum viverra suscipit. Vivamus in faucibus libero. Sed sit amet tellus mauris. Aliquam faucibus auctor diam, non pellentesque ex venenatis at.Aliquam quis tellus diam. Morbi risus dolor, tempor in dignissim ut, maximus at mi. In lobortis iaculis eros et vestibulum. Donec blandit hendrerit suscipit. Pellentesque condimentum viverra suscipit. Vivamus in faucibus libero. Sed sit amet tellus mauris. Aliquam faucibus auctor diam, non pellentesque ex venenatis at.</p>
  
  <p id="quote">Aliquam quis tellus diam. Morbi risus dolor, tempor in dignissim ut, maximus at mi. In lobortis iaculis eros et vestibulum. Donec blandit hendrerit suscipit. Pellentesque condimentum viverra suscipit.</p>
  
  <p>Pellentesque condimentum viverra suscipit. Vivamus in faucibus libero. Sed sit amet tellus mauris. Aliquam faucibus auctor diam, non pellentesque ex venenatis at.Aliquam quis tellus diam. Morbi risus dolor, tempor in dignissim ut, maximus at mi. In lobortis iaculis eros et vestibulum. Donec blandit hendrerit suscipit.</p>
  
  <h3>OPTIONS</h3>
  
  
  <ul>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  </ul>
   
  
  `;

  break;

  case "btTech":

  htmlIn=`<dl>
  <dt class="isBold">Lorem ipsum dolor sit amet</dt>
  <dd>
  Morbi risus dolor, tempor in dignissim ut.
  </dd>
<br>
  <dt class="isBold">Lorem ipsum dolor sit amet</dt>
  <dd>
  Pellentesque condimentum viverra suscipit
  </dd>
  <br>
  <dt class="isBold">Lorem ipsum dolor sit amet</dt>
  <dd>Sed sit amet tellus mauris. Aliquam faucibus auctor diam, non pellentesque ex venenatis at.e</dd>
  <br>
  <dt class="isBold">Lorem ipsum dolor sit amet</dt>
  <dd>
  In lobortis iaculis eros et vestibulum.
  </dd>
  </dl>
`;

  break;


  case "btOpt":

  htmlIn=`
  <h3>INTERIEUR</h3>
  <ul>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  </ul>

  <h3>EXTERIEUR</h3>
  <ul>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  <li><img class="check" src="images/check.svg">Lorem ipsum sit amet</li>
  </ul>`;
  
  break;

  default:


  

  window.location.href = 'contact.html';

  

}


  singleCont.insertAdjacentHTML('beforeend', htmlIn);
  
  


}