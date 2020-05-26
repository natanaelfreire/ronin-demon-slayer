import * as THREE from '../../node_modules/three/build/three.module.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import fieldWireFrame from './fieldWireFrame.js';
import THREEx from './THREEx.KeyboardState.js';
import modelWireFrame from './modelWireFrame.js';

var scene, camera, renderer;
var loader;
var ambientLight, light;
var controls;
var mixer, actions, clock;
var collidableMeshList = fieldWireFrame();
var keyboard = new THREEx.KeyboardState();
var model, modelWire = modelWireFrame();

init();
animate();

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

	for (var i = collidableMeshList.length - 1; i >= 0; i--) {
		scene.add(collidableMeshList[i]);
	}

	scene.add(modelWire);
	
	loader = new GLTFLoader();
	loader.load('../../models/field/field.gltf', function ( gltf ) {

		var field = gltf.scene;		
		scene.add( field );

		var monsterLoader = new GLTFLoader();
		monsterLoader.load('../../animations/littlemonster/scene.gltf', function ( gltf ) {

			model = gltf.scene;
			model.scale.set( 0.02, 0.02, 0.02 );
			model.position.x = 9.5;
			model.position.y = 0;
			model.position.z = 11;
			model.rotation.y = 3.2;
			
			scene.add( model );

			var animations = gltf.animations;

			mixer = new THREE.AnimationMixer( model );
			actions = mixer.clipAction( animations[0] );

		});

	});

}

function animate() {

	requestAnimationFrame( animate );

	var mixerUpdateDelta = clock.getDelta();
	if(mixer != undefined){
		mixer.update( mixerUpdateDelta );
		actions.play();
		//camera.lookAt(model.position);
	}

	renderer.render( scene, camera );
	update();

}

function update() {

	if (keyboard.pressed("left")) {
		model.position.x -= 0.05;
		modelWire.position.x -= 0.05;
	}
	if (keyboard.pressed("right")) {
		model.position.x += 0.05;
		modelWire.position.x += 0.05;
	}
	if (keyboard.pressed("up")) {
		model.position.z -= 0.05;
		modelWire.position.z -= 0.05;
	}
	if (keyboard.pressed("down")) {
		model.position.z += 0.05;
		modelWire.position.z += 0.05;
	}

	rotation();

}

function rotation() {

	if (keyboard.pressed("left")) {
		if (keyboard.pressed("up")) {
			model.rotation.y = 4;
		} else if (keyboard.pressed("down")) {
			model.rotation.y = 5.6;
		} else {
			model.rotation.y = 4.8;
		}
	} else if (keyboard.pressed("right")) {
			if (keyboard.pressed("up")) {
				model.rotation.y = 2.4;
			} else if (keyboard.pressed("down")) {
				model.rotation.y = 0.8;
			} else {
				model.rotation.y = 1.6;
			}
	} else if (keyboard.pressed("up")) {
		model.rotation.y = 3.2;
	} else if (keyboard.pressed("down")) {
		model.rotation.y = 0;
	}

}