import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

var camera, scene, renderer;
var loader;

init();
animate();


function init() {

	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
	camera.position.z = 150;
	camera.position.x = 0;

	console.log(window.innerWidth);
	console.log(window.innerHeight);

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	loader = new GLTFLoader();
	loader.load('../models/mug/mug.gltf', function ( gltf ) {

		console.log( gltf );

		scene.add( gltf.scene );


	}, undefined, function ( error) {
		console.log(error);
	});

}

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}