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
*		- 2013/10/23: Created. Separated into own module. [KGryte].
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

	// METHOD: mean( vector )
	//
	// Calculate the mean of an input vector.
	utils.mean = function( vector ) {
		//
		//
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.mean:no input vector provided.');
			return;
		}

		var sum = 0;

		for ( var i = 0; i < vector.length; i++ ) {
			sum += vector[i];
		}

		return sum / vector.length;

	}; // end METHOD mean()


	// METHOD: max( vector )
	//
	// Calculate the maximum value of an input vector.
	utils.max = function( vector ) {
		//
		//
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.max:no input vector provided.');
			return;
		}

		var max = Number.NEGATIVE_INFINITY;

		for ( var i = 0; i < vector.length; i++ ) {
			if ( max < vector[i] ) {
				max = vector[i];
			}
		}

		return max;

	}; // end METHOD max()


	// METHOD: min( vector )
	//
	// Calculate the minumum value of an input vector.
	utils.min = function( vector ) {
		//
		//
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.min:no input vector provided.');
			return;
		}

		var min = Number.POSITIVE_INFINITY;

		for ( var i = 0; i < vector.length; i++ ) {
			if ( min > vector[i] ) {
				min = vector[i];
			}
		}

		return min;

	}; // end METHOD min()


	// METHOD: variance( vector )
	//
	// Calculate the sample variance of an input vector.
	utils.variance = function( vector ) {
		//
		//	NOTES:
		//		- This calculates the sample variance!
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.variance:no input vector provided.');
			return;
		}

		var val1, val2,
			sum = 0, sum_of_squares = 0;

		for ( var i = 0; i < vector.length; i++ ) {
			sum += vector[i];
			sum_of_squares += vector[i]*vector[i];
		}

		val1 = sum_of_squares / ( vector.length - 1);
		val2 = sum*sum / ( vector.length * (vector.length - 1) );

		return val1 - val2;

	}; // end METHOD variance()

	// METHOD: std( vector )
	//
	// Calculate the sample standard deviation of an input vector.
	utils.std = function( vector ) {
		//
		//	NOTES:
		//		- This calculates the sample standard deviation!
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.std:no input vector provided.');
			return;
		}

		var val1, val2,
			sum = 0, sum_of_squares = 0;

		for ( var i = 0; i < vector.length; i++ ) {
			sum += vector[i];
			sum_of_squares += vector[i]*vector[i];
		}

		val1 = sum_of_squares / ( vector.length - 1);
		val2 = sum*sum / ( vector.length * (vector.length - 1) );

		return Math.sqrt( val1 - val2 );

	}; // end METHOD std()


	// METHOD: sum( vector )
	//
	// Calculate the sum of an input vector.
	utils.sum = function( vector ) {
		//
		//	NOTES:
		//		- 
		//
		//

		if ( !arguments.length ) {
			console.error('ERROR:utils.sum:no input vector provided.');
			return;
		}

		var sum = 0;

		for ( var i = 0; i < vector.length; i++ ) {
			sum += vector[i];
		}

		return sum;

	}; // end METHOD sum()


})( utils );