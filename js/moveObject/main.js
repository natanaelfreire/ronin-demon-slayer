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
	camera.position.set( 9.5, 5, 15 );
	camera.lookAt( 9.5, 0.8, 10 );

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
			model.position.set(9.5, 0, 10);
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
		camera.lookAt(model.position);
	}

	renderer.render( scene, camera );
	update();

}

function update() {

	var originPoint = modelWire.position.clone();

	if (keyboard.pressed("left")) {
		model.position.x -= 0.05;
		modelWire.position.x -= 0.05;
		camera.position.x -= 0.05;
	}
	if (keyboard.pressed("right")) {
		model.position.x += 0.05;
		modelWire.position.x += 0.05;
		camera.position.x += 0.05;
	}
	if (keyboard.pressed("up")) {
		model.position.z -= 0.05;
		modelWire.position.z -= 0.05;
		camera.position.z -= 0.05;
	}
	if (keyboard.pressed("down")) {
		model.position.z += 0.05;
		modelWire.position.z += 0.05;
		camera.position.z += 0.05;
	}

	rotate();

	for (var vertexIndex = 0; vertexIndex < modelWire.geometry.vertices.length; vertexIndex++) {

		var localVertex = modelWire.geometry.vertices[vertexIndex].clone();
		var ray = new THREE.Raycaster( originPoint, localVertex.clone().normalize() );
		var collisionResults = ray.intersectObjects( collidableMeshList );
		//console.log(collisionResults)
		if ( collisionResults.length > 0 && collisionResults[0].distance < localVertex.length() ) {
			console.log(" Hit ");
			var key = {};
			var [ value1, value2, value3, value4 ] = Object.values(keyboard.keyCodes);
			var [ key1, key2, key3, key4 ] = Object.keys(keyboard.keyCodes);
			key[key1] = value1;
			key[key2] = value2;
			key[key3] = value3;
			key[key4] = value4;

			console.table(key)

			if (keyboard.pressed("left")) {
				model.position.x += 0.10;
				modelWire.position.x += 0.10;
			} else if (key["37"] == false) {
				model.position.x += 0.05;
				modelWire.position.x += 0.05;
			}

			if (keyboard.pressed("right")) {
				model.position.x -= 0.10;
				modelWire.position.x -= 0.10;
			} else if (key["39"] == false) {
				model.position.x -= 0.05;
				modelWire.position.x -= 0.05;
			}

			if (keyboard.pressed("up")) {
				model.position.z += 0.10;
				modelWire.position.z += 0.10;
			} else if (key["38"] == false) {
				model.position.z += 0.05;
				modelWire.position.z += 0.05;
			}

			if (keyboard.pressed("down")) {
				model.position.z -= 0.10;
				modelWire.position.z -= 0.10;
			} else if (key["40"] == false) {
				model.position.z -= 0.05;
				modelWire.position.z -= 0.05;
			}

			keyboard.keyCodes = {};
		}
	}

}

function rotate() {

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