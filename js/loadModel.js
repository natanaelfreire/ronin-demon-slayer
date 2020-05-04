import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

var camera, scene, renderer;
var loader;

init();
animate();
credits();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000);
	camera.position.z = 8;
	camera.position.y = 2;

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement );

	loader = new GLTFLoader();
	loader.load('../models/hiih/scene.gltf', function ( gltf ) {
		scene.add( gltf.scene );

	}, undefined, function ( error ) {
		console.log( error );
	});

}

function animate() {

	requestAnimationFrame( animate );

	scene.rotation.y += 0.005;

	renderer.render( scene, camera );
}

function credits() {

	var div = document.createElement('div');
	div.innerHTML = 'Credits: <a href="https://sketchfab.com/luyssport" target="_blank">@luyssport</a>';

	var attClass = document.createAttribute('class');
	attClass.value = 'credits';

	div.setAttributeNode(attClass);

	document.body.appendChild(div);
}