import * as THREE from '../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';

var scene, camera, renderer;
var controls;
var ambientLight, directionalLight;
var loader;
var actions, clock, mixer;

init();
credits();

function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 500 );
	camera.position.set( -1, 20, 100 );

	clock = new THREE.Clock();

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setClearColor( 0x74b9ff );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	controls = new OrbitControls( camera, renderer.domElement );

	ambientLight = new THREE.AmbientLight( 0xcccccc );
	scene.add( ambientLight );

	directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 1, 1 ).normalize();
	scene.add( directionalLight );

	loader = new GLTFLoader();
	loader.load('../../animations/littlemonster/scene.gltf', function ( gltf ) {

		var model = gltf.scene;
		scene.add( model );

		var animations = gltf.animations;

		mixer = new THREE.AnimationMixer( model );

		actions = mixer.clipAction( animations[0] );
		actions.play();

		animate();

	}, undefined, function ( error ) {
		console.log( error );
	});

}

function animate() {

	requestAnimationFrame( animate );

	var mixerUpdateDelta = clock.getDelta();

	mixer.update( mixerUpdateDelta );

	renderer.render( scene, camera );

}

function credits() {

	var div = document.createElement('div');
	div.innerHTML = 'Credits: <a href="https://sketchfab.com/gugurij" target="_blank">@gugurij</a>';

	var attClass = document.createAttribute('class');
	attClass.value = 'credits';

	div.setAttributeNode(attClass);

	document.body.appendChild(div);
}