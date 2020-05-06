import * as THREE from '../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

var scene, camera, renderer;
var controls;
var ambientLight, directionalLight;
var loader;

init();
animate();


function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20000);
	camera.position.set( 1, 1, 20);

	renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
	renderer.setClearColor( 0xC5C5C3 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild(renderer.domElement);

	controls = new OrbitControls( camera, renderer.domElement );

	ambientLight = new THREE.AmbientLight( 0xcccccc );
	scene.add( ambientLight );

	directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 1, 1 ).normalize();
	scene.add( directionalLight );

	loader = new GLTFLoader();
	loader.load('../models/mug/mug.gltf', function ( gltf ) {
		var object = gltf.scene;
		gltf.scene.scale.set( 2, 2, 2 );
		gltf.scene.position.x = 0;
		gltf.scene.position.y = 0;
		gltf.scene.position.z = 0;

		scene.add( gltf.scene );

	} );

}

function animate() {

	requestAnimationFrame( animate );

	renderer.render( scene, camera );

}