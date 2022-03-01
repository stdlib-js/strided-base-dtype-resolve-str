<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# resolve

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the data type string associated with a supported strided array data type value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-dtype-resolve-str
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var resolve = require( '@stdlib/strided-base-dtype-resolve-str' );
```

#### resolve( dtype )

Returns the data type string associated with a strided array data type value.

```javascript
var str2enum = require( '@stdlib/strided-base-dtype-str2enum' );

var v = resolve( 'float64' );
// returns 'float64'

v = resolve( str2enum( 'float64' ) );
// returns 'float64'
```

If unable to resolve a data type string, the function returns `null`.

```javascript
var v = resolve( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var str2enum = require( '@stdlib/strided-base-dtype-str2enum' );
var resolve = require( '@stdlib/strided-base-dtype-resolve-str' );

var v = resolve( str2enum( 'float64' ) );
// returns 'float64'

v = resolve( str2enum( 'float32' ) );
// returns 'float32'

v = resolve( str2enum( 'int32' ) );
// returns 'int32'

v = resolve( str2enum( 'int16' ) );
// returns 'int16'

v = resolve( str2enum( 'int8' ) );
// returns 'int8'

v = resolve( str2enum( 'uint32' ) );
// returns 'uint32'

v = resolve( str2enum( 'uint16' ) );
// returns 'uint16'

v = resolve( str2enum( 'uint8' ) );
// returns 'uint8'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-dtype-resolve-str.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-dtype-resolve-str

[test-image]: https://github.com/stdlib-js/strided-base-dtype-resolve-str/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-dtype-resolve-str/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-dtype-resolve-str/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-dtype-resolve-str?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-dtype-resolve-str.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-dtype-resolve-str/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-dtype-resolve-str/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-dtype-resolve-str/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-dtype-resolve-str/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-dtype-resolve-str/main/LICENSE

</section>

<!-- /.links -->
