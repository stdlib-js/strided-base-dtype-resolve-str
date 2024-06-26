/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var enum2str = require( '@stdlib/strided-base-dtype-enum2str' );
var str2enum = require( '@stdlib/strided-base-dtype-str2enum' );


// MAIN //

/**
* Returns the data type string associated with a supported strided array data type value.
*
* @param {*} dtype - data type value
* @returns {(string|null)} data type string or null
*
* @example
* var str2enum = require( '@stdlib/strided-base-dtype-str2enum' );
*
* var v = resolve( str2enum( 'float64' ) );
* // returns 'float64'
*/
function resolve( dtype ) {
	var t = ( typeof dtype );
	if ( t === 'string' ) {
		return ( str2enum( dtype ) === null ) ? null : dtype;
	}
	if ( t === 'number' ) {
		return enum2str( dtype );
	}
	return null;
}


// EXPORTS //

module.exports = resolve;
