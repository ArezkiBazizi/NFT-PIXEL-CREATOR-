var tablet = document.getElementById("tablet");
	var spanX = document.getElementById("x");
	var spanY = document.getElementById("y");

	for (i =0; i<2500; i++){
		var carre = document.createElement("Div");
		carre.className = "carre";
		tablet.appendChild(carre);
	} //créer les pixels 

	tablet.addEventListener('click', function(evt){
		 	if (evt.target.tagName === 'DIV') {
		 	color = document.getElementById("inp").value;
    		evt.target.style.backgroundColor = color;	
  		    }
	}, false); //clic gauche pour colorer un pixel 

	tablet.addEventListener('mousedown', function(event){
		 if (event.button==1) {
    		color = event.target.style.backgroundColor;
    		document.getElementById("inp").value = color;
  		 }
	}, ); // clic (avec la molette) sur un pixel pour selectioner sa couleur


	spanX.addEventListener('click', function(ev){

	if (ev.target.id === 'x') {
		var carres = document.getElementsByClassName("carre");
		for (i =0; i<2500; i++){
				carres[i].style.backgroundColor ='white'; //effacer le dessin
			
	  	}
	}
	}, false);

	spanY.addEventListener('click', function(e){
	if (e.target.id === 'y') {
		color = document.getElementById("inp").value;
		var carres = document.getElementsByClassName("carre");
		for (i =0; i<2500; i++){
			carres[i].style.backgroundColor =color; //colorer tout les pixels
			
	  	}
	}
	}, false);

	const picker = new CP(document.querySelector('input'));

      picker.on('change', function(r, g, b, a) {
          this.source.value = this.color(r, g, b, a);
      });    // la pallette de couleur