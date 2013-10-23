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
			//		- Not guaranteed to include 'b'
			//

			var vec = [],
				length = ( (b - a) / increment ) >> 1; // equivalent: Math.floor( (b-a) / increment )

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


		


		

	};

})();