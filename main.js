/**
 * ici on appel l'element dans le document , avec la methode 
 * queruselectorAll( pour appler tous les boite de notre div)
 * et mise en place d'une boucle qui cherche chaque élément a changé dans le code 
 * on applique par la suite l'écoteur de l'événement click 
 */



const boiteEl = document.querySelectorAll('.boite');
console.log(boiteEl);
boiteEl.forEach(boite => {
	boite.addEventListener('click', () => {
		 
		boite.classList.toggle("active");
		console.log(boite.classList.toggle);

	})
});
/**
 *  classList  c'est une API => permet de manipiler les class css d'un élement 
 * dans le Dom, donc elle permet de ajouter, suprimmer et verifier 
 * la presence d'une class css d'un élement. à travers plusieurs 
 * methodes qui existe,  remove(), add(), toggel() .....
 * 
 * => NodeList(4) [div.boite, div.boite, div.boite, div.boite]
 * 
 * Toggel(active)=> cette méthode permet d'ajouter la classe en paramétre ici (active)
 * c'est elle qui s'occupe d'activer et désactiver les changement 
 * lors de l'evenement ( ici c'est le click )
 * 
 * => ƒ toggle() { [native code] }
 */
 


 