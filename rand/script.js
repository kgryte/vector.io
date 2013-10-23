/**
*
*	TITLE: 
*
*
*
*	DESCRIPTION:
*		- 
*
*
*	API:
*		- Input parameters:
*			-
*
*		- Output:
*			-
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	HISTORY:
*		- 2013/10/23: Created. Made into separate module. [KGryte].
*
*
*	DEPENDENCIES:
*		[1] Utils
*
*
*	AUTHOR:
*		Kristofer Gryte
*		NodePrime
*		San Francisco, CA
*
*		kris@nodeprime.com
*
*
*	LICENSE:
*		
*
*	COPYRIGHT:
*		Kristofer Gryte (c) 2013.
*
*
*
*/



(function( utils ) {
	'use strict';

	// METHOD: randu( length )
	//
	// Generate uniformly distributed random numbers.
	utils.randu = function( length ) {
		//
		//	NOTES:
		//		-
		//

		if ( !arguments.length ) {
			return Math.random();
		}

		var vec = [];
		for (var i = 0; i < length; i++) {
			vec.push( Math.random() );
		}

		return vec;
	}; // end METHOD randu()


	// METHOD: randn( length )
	//
	// Generate normally distributed random numbers.
	utils.randn = function( length ) {
		//
		//	NOTES:
		//		- Implementation: Box-Muller method.
		//
		//

		var urand, vrand,
			vec = [],
			numValues = length || 1;

		for (var i = 0; i < numValues; i++) {
			urand = Math.random();
			vrand = Math.random();
			vec.push (
				Math.sqrt( -2*Math.log( urand ) ) * Math.cos( 2*Math.PI*vrand)
			);
		} // end FOR i

		if ( numValues === 1 ) {
			return vec[0];
		}
		return vec;

	}; // end METHOD randn()

	// METHOD: randint( length )
	//
	// Generate random integers between a lower and upper bound
	utils.randint = function( lower, upper, length ) {
		//
		//
		//

		var range, val,
			vec = [],
			numValues = length || 1;

		if ( arguments.length < 2 ) {
			console.error('ERROR:utils.randint:both lower and upper bounds must be provided.');
			return;
		}

		upper = Math.round( upper );
		lower = Math.round( lower );

		range = upper - lower + 1; // number of possible values, including both bounds

		for (var i = 0; i < numValues; i++) {
			val = Math.floor( (Math.random()*range) + 1 ); // + 1 to remove being below the lower bound
			vec.push( val + lower );
		} // end FOR i

		if ( numValues === 1) {
			return vec[0];
		}
		return vec;


	}; // end METHOD randint()


	// METHOD: randp( rate, length )
	//
	// Generate random poisson numbers based on a specified rate
	utils.randp = function( rate, length ) {
		//
		//	NOTES:
		//		- Implementation based on Knuth
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.randp:no rate provided.');
			return;
		}

		var l = Math.exp( -rate),
			k = 0,
			p = 1,
			randu,
			numValues = length || 1,
			vec = [];

		for ( var i = 0; i < numValues; i++ ) {

			do {
				k = k + 1;
				randu = Math.random();
				p = p * randu;
			}while ( p > l );

			vec.push( k - 1 );

		} // end FOR i


		if ( numValues === 1 ) {
			return vec[0];
		}
		return vec;

	}; // end METHOD randp()


	// METHOD: randexp( rate )
	//
	// Generate exponential random numbers based on a specified rate.
	utils.randexp = function( rate, length ) {
		//
		//	NOTES:
		//		-
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.randexp:no rate provided.');
			return;
		}

		var vec = [],
			randu,
			numValues = length || 1;


		for ( var i = 0; i < numValues; i++ ) {
			randu = Math.random();
			vec.push( -Math.log( randu ) / rate );
		} // end FOR i

		if ( numValues === 1 ) {
			return vec[0];
		}
		return vec;

	}; // end METHOD randexp()

})( utils );