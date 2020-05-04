import * as THREE from '../node_modules/three/build/three.module.js';

var camera, scene, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
 
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
  camera.position.z = 5;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry();
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  renderer = new THREE.WebGLRenderer( { antialias: true } ); // O que é esse antialias ?? Tira o efeito de serrilhamento da rederização
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
  requestAnimationFrame( animate );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render( scene, camera );
 
}