
// -----------------------------------------------------
// Conjunto.js
// -----------------------------------------------------

// -----------------------------------------------------
// -----------------------------------------------------
class Conjunto {

	// .................................................
	// .................................................
	constructor( ) {

		this.losElementos = [ ]	;

	} // ()

	// .................................................
	// 
	// vaciar()
	//
	// _________________________________________________
	// Elimina todos los elementos de un 
	// conjunto, cambiando su tamaño a 0 casillas.
	// .................................................
	vaciar( ) {

		this.losElementos.length = 0 ;

	} // vaciar()

	// .................................................
	// 
	// talla()
	// -->
	//    Entero 
	// _________________________________________________
	// Devuelve el número de elementos que contiene el
	// conjunto.
	// .................................................
	talla( ) {

		return this.losElementos.length	;

	} // talla()

	// .................................................
	// 
	// Real
	//  -->
	// donde()
	// -->
	//    Entero 
	// _________________________________________________
	// Devuelve el número de la casilla del array donde
	// se encuentra el elemento solicitado.
	// .................................................
	donde( elemento ) {

		var res;

		for( let i = 0 ; i<= this.losElementos.length - 1 ; i++ ){
			
			if ( this.losElementos[ i ] ==  null){

				res = i;

			}	else{

				res = null ;

			}
		}

		return res;

	} // donde()

	// .................................................
	// 
	// Real
	//  -->
	// contiene()
	// -->
	//    [T/F]
	// _________________________________________________
	// Devuelve V/F si el elemento solicitado se
	// encuentra dentro del conjunto.
	// .................................................
	contiene( elemento ) {

		if( this.losElementos [ this.donde( elemento ) ] != null ){

			return true	;

		}

	} // contiene()

	// .................................................
	// 
	// Real
	//  -->
	// anyadir()
	// _________________________________________________
	// Añade un elemento nuevo al conjunto si este no 
	// se encuentra ya en él.
	// .................................................
	anyadir( elemento ) {

		if( this.losElementos [ this.contiene( elemento ) ] == false ){

			this.losElementos.push( elemento )

		}

	} // anyadir()

} // class

// -----------------------------------------------------
// -----------------------------------------------------
module.exports = Conjunto

// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
