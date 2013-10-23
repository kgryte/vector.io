/**
*
*	DESCRIPTION:
*		-
*
*	NOTES:
*		- 
*
*
*	HISTORY:
*		- 2013/10/17: Created. KGryte.
*
*
*	TODO:
*		[1] Type checking input arguments.
*		[2] Consider using prototypes. Would allow method chaining and highly expressive and compact code. This would also obviate the need for some type checking. (an array is an array)
*		[3] Extend random number generators, zeros, and ones to arrays: take xDim, yDim, zDim as arguments. If only one argument, then length
*		[4] Mean, Var, StDev should be extended to matrices, in which a dimension can be specified across which to calculate the desired quantity.
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
*/

var utils;

(function() {
	'use strict';

	utils = {


		// METHOD: zeros( length )
		//
		//
		zeros: function( length ) {
			//
			//
			//

			if ( !arguments.length ) {
				console.error('ERROR:utils.zeros:no length provided.');
				return;
			}

			var vec = [];

			for ( var i = 0; i < length; i++) {
				vec[i] = 0;
			} // end FOR i

			return vec;


		}, // end METHOD zeros()


		// METHOD: ones( length )
		//
		//
		ones: function( length ) {
			//
			//
			//

			if ( !arguments.length ) {
				console.error('ERROR:utils.ones:no length provided.');
				return;
			}

			var vec = [];

			for ( var i = 0; i < length; i++) {
				vec[i] = 1;
			} // end FOR i

			return vec;


		}, // end METHOD ones()

		// METHOD: linspace( a, b, increment )
		//
		//
		linspace: function( a, b, increment ) {
			//
			//	NOTES:
			//		- Does not include 'b'
			//

			var vec = [],
				length = Math.floor( (b-a) / increment );

			vec[0] = a;

			for ( var i = 1; i < length; i++) {
				vec[i] = a + increment*i;
			} // end FOR i

			return vec;


		}, // end METHOD linspace()


		// METHOD: cumsum( vector, sort )
		//
		//
		cumsum: function( vector, sort ) {
			//
			//	Sort: sorting function
			//

			var vec = vector.slice(),
				vec_sum = [];

			if ( sort ) {
				// Sort the copied vector:
				vec.sort( sort );
			} // end IF sort

			// 
			vec_sum[0] = vec[0];

			for ( var i = 1; i < vec.length; i++ ) {
				vec_sum[i] = vec_sum[i-1] + vec[i];
			}

			return vec_sum;


		}, // end METHOD cumsum()


		// METHOD: identity( size )
		//
		//
		identity: function( size ) {
			//
			//	NOTES:
			//		- Only 2 dimensions.
			//

			if ( !arguments.length ) {
				console.error('ERROR:utils.identity:no size provided.');
				return;
			}

			var eye = [];
			for (var i = 0; i < size; i++) {
				eye[i] = [];
				for (var j = 0; j < size; j++) {
					eye[i][j] = (i == j) ? 1 : 0;
				}
			}

			return eye;

		}, // end METHOD identity()



		// METHOD: diag( array, values )
		//
		// Set or return the diagonal of a square matrix.
		diag: function( array, values ) {
			//
			//
			//
			//

			if ( !arguments.length ) {
				console.error('ERROR:utils.diag:no array provided.');
				return;
			}

			var xDim = array.length,
				yDim,
				vals = values || [],
				numValues = vals.length,
				vec = [];

			// Check that the array is square:
			for ( var k = 0; k < xDim; k++ ) {

				yDim = array[ k ].length;

				if ( yDim !== xDim ) {
					console.error('ERROR:utils.diag:array is not square.');
					return;
				}

			} // end FOR i

			// If we have values, place them along the diagonal:
			if ( numValues ) {

				// Check that the number of values matches the array dimensions:
				if ( numValues !== xDim ) {
					console.error('ERROR:utils.diag:number of diagonal elements does not match the array dimensions.');
					return;
				}

				for ( var i = 0; i < numValues; i++ ) {
					array[i][i] = vals[i];
				} // end FOR i

				return array;

			} // end IF numValues

			// Grab the diagonal elements:
			for ( var j = 0; j < xDim; j++ ) {
				vec[j] = array[j][j];
			} // end FOR j

			return vec;

		}, // end METHOD diag()



		// METHOD: find( vector, callback, numValues )
		//
		//
		find: function( vector, callback, numValues ) {
			//
			//	NOTES:
			//		- the callback should perform a test condition; ideally, returning true or false. The callback is supplied a vector element, the element index, and the vector.
			//		- numValues is used to short-circuit the search and return the first 'numValues' meeting the test	
			//
			//

			if ( arguments.length < 2 ) {
				console.error('ERROR:utils.find:only an array and callback should be provided.');
				return;
			}

			var output,
				success = [],
				ids = [],
				numVals = numValues || Number.POSITIVE_INFINITY,
				counter = 0;

			for ( var i = 0; i < vector.length; i++ ) {

				// Send the current value to the callback:
				output = callback( vector[ i ], i, vector );

				// Boolean test:
				if ( output ) {
					// Success! We found a value meeting the test criteria. Store the value and its associated index...
					success.push( vector[ i ] );
					ids.push( i );

					// Update our counter:
					counter += 1;

					if ( counter === numVals ) {
						// We have found a sufficient number of values meeting the test critera; exit the loop...
						break;
					}
				}

			} // end FOR i

			return [success, ids];


		}, // end METHOD find()
		


		

	};

})();