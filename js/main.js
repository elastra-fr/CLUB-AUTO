console.log("ok js");


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

  htmlIn=``;

  break;


  case "btOpt":

  htmlIn=``;

  break;

  case "btCont":

  htmlIn=`
  <form id="contactForm">

<p>CONTACTEZ NOUS</p>

<div id="inputsWrapper">
<div class="inputBox"><label for="prenom">Prénom*</label><input name="prenom" type="text" placeholder="Entrez votre nom" required/></div>
<div class="inputBox"><label for="nom">Nom*</label><input name="nom" type="text" placeholder="Entrez votre nom" required/></div>





<div class="inputBox"><label for="email">Email*</label><input name="email" type="email" placeholder="Entrez une adresse mail valide" required/></div>
<div class="inputBox"><label for="tel">Téléphone</label><input name="tel" type="tel" placeholder="Numéro de téléphone"/></div>
</div>

<div id="messageBox" class="inputBox"><label for="message">Message</label><textarea name="message" placeholder="Ecrivez votre message" required></textarea></div>

<input type="submit"/>

</form>
  
  `;

  break;
  

}


  singleCont.insertAdjacentHTML('beforeend', htmlIn);
  
  


}