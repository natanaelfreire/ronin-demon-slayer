import * as THREE from '../node_modules/three/build/three.module.js';

var camera, scene, renderer;
var geometry, material, line;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 100);
	camera.position.set( 0, 0, 100 ); 
	camera.lookAt( 0, 0, 0 );

	scene = new THREE.Scene();

	var points = [];
	points.push(new THREE.Vector3(-30, 0, 0));
	points.push(new THREE.Vector3(0, 10, 0));
	points.push(new THREE.Vector3(10, 0, 0));
	points.push(new THREE.Vector3(0, -20, 0));
	points.push(new THREE.Vector3(-30, 0, 0));

	geometry = new THREE.BufferGeometry().setFromPoints(points);

	material = new THREE.LineDashedMaterial( { color: 0x0000ff, linewidth: 2 } );

	line = new THREE.Line(geometry, material);

	scene.add(line);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {

	requestAnimationFrame( animate );

	//scene.rotation.y += 0.01;

	renderer.render(scene, camera);
}

