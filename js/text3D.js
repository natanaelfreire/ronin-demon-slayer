import * as THREE from '../node_modules/three/build/three.module.js';

var camera, scene, renderer;
var geometry, material, mesh;
var loader;
var edges, line;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 0.01, 1000);
	camera.position.z = 100;
	//camera.lookAt(0, 0, 0);

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild( renderer.domElement );

	loader = new THREE.FontLoader();
	loader.load( '../node_modules/three/examples/fonts/gentilis_regular.typeface.json', 
		function ( font ) {
			geometry = new THREE.TextGeometry("Rōnin", {
				font: font,
				size: 50,
				height: 5,
				curveSegments: 12,
				bevelEnabled: false,
			/*	bevelThickness: 10,
				bevelSize: 8,
				bevelOffset: 0,
				bevelSegments: 5 Not necessary in this case */ 
			});

			material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
			mesh = new THREE.Mesh( geometry, material );

			scene.add( mesh );

			edges = new THREE.EdgesGeometry( geometry );
			line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
			scene.add( line );

		},
		function ( err ) {
		console.log( 'An error happened' );
		}
	);

}

function animate() {

	requestAnimationFrame( animate );

	scene.rotation.y += 0.02;

	renderer.render( scene, camera );
}