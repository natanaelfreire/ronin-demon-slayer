import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { RoughnessMipmapper } from '../node_modules/three/examples/jsm/utils/RoughnessMipmapper.js';

var camera, scene, renderer;
var loader;

init();
animate();


function init() {

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.025, 2000);
	camera.position.set( - 1.8, 0.6, 2.7 );

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var roughnessMipmapper = new RoughnessMipmapper( renderer );

	loader = new GLTFLoader();
	loader.load('../models/mug/mug.gltf', function ( gltf ) {

		console.log( gltf );

		gltf.scene.traverse( function ( child ) {

			if ( child.isMesh ) {

				roughnessMipmapper.generateMipmaps( child.material );

			}

		} );

		scene.add( gltf.scene );

		roughnessMipmapper.dispose();

		animate();

	}, undefined, function ( error) {

		console.log(error);

	} );

}

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}