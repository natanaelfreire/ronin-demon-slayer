import * as THREE from '../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';

var scene, camera, renderer;
var loader;
var ambientLight, light;
var controls;
var mixer, actions, clock;
var collidableMeshList = [];
var model, maze;

init();

function init() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 5000 );
	camera.position.set( 0, 20, 10 );
	camera.lookAt( 0, 0, 0 );

	clock = new THREE.Clock();

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setClearColor( 0x74b9ff );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	controls = new OrbitControls( camera, renderer.domElement );

	ambientLight = new THREE.AmbientLight( 0x383434 );
	scene.add( ambientLight );

	light = new THREE.PointLight( 0xffffff, 1, 80 );
	light.position.set( 0, 5, 5 );
	scene.add( light );

	loader = new GLTFLoader();
	loader.load('../../models/test/test.gltf', function ( gltf ) {

		maze = gltf.scene;

		collidableMeshList.push(maze);
		
		scene.add( maze );

		var monsterLoader = new GLTFLoader();
		monsterLoader.load('../../animations/littlemonster/scene.gltf', function ( gltf ) {

			model = gltf.scene;
			model.scale.set( 0.02, 0.02, 0.02 );
			model.position.x = 7.2;
			model.position.y = 0;
			model.position.z = 7;
			model.rotation.y = 3.2;
			
			console.log( model );
			scene.add( model );

			var animations = gltf.animations;

			mixer = new THREE.AnimationMixer( model );
			actions = mixer.clipAction( animations[0] );
			actions.play();

			document.addEventListener("keydown", ( event ) => {

				var keyPressed = event.key;

				if (keyPressed == 'ArrowUp') {
					model.position.z -= 0.2;
					model.rotation.y = 3.2;
				} else if (keyPressed == 'ArrowDown') {
					model.position.z += 0.2;
					model.rotation.y = 0;
				} else if (keyPressed == 'ArrowLeft') {
					model.position.x -= 0.2;
					model.rotation.y = 4.8;
				} else if (keyPressed == 'ArrowRight') {
					model.position.x += 0.2;
					model.rotation.y = 1.6;
				}		

			});

			animate();

		});

	});

}

function animate() {

	requestAnimationFrame( animate );

	var mixerUpdateDelta = clock.getDelta();
	mixer.update( mixerUpdateDelta );

	renderer.render( scene, camera );
	//update();

}

function update() {

	var originPoint = model.position.clone();

	var globalVertex = model.matrix;
	//var directionVector = globalVertex.sub( model.position );

	var ray = new THREE.Raycaster( originPoint );
	var collisionResults = ray.intersectObject( collidableMeshList );
	console.log( collisionResults );

}