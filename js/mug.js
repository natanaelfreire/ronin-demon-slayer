import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

var camera, scene, renderer;
var loader;

init();
animate();


function init() {

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000);
	camera.position.set( 0, 0, 10 );

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	//renderer.setClearColor( 0xC5C5C3 );
	//renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var ambientLight = new THREE.AmbientLight( 0xcccccc );
	scene.add( ambientLight );


	loader = new GLTFLoader();
	loader.load('../models/mug/mug.gltf', function ( gltf ) {

		console.log( gltf.scene );
		/*gltf.scene.scale.set( 2, 2, 2 );
		gltf.scene.position.x = 0;
		gltf.scene.position.y = 0;
		gltf.scene.position.z = 0;*/
		scene.add( gltf.scene );


	} );
}

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}