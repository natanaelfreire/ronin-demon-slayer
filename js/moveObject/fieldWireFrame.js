import * as THREE from '../../node_modules/three/build/three.module.js';

var fieldWireFrame = [];

// EXTERNAL WALLS:
var wallGeometry = new THREE.BoxGeometry(28, 2, 1.2, 15);
var wireMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: false, opacity: 0 });
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(0, 1, 13);
fieldWireFrame.push(wall);

var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(0, 1, -13);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 28, 1, 1, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(13, 1, 0);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 22, 1, 1, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-13, 1, 2.5);
fieldWireFrame.push(wall);


// INTERNAL WALLS:
var wallGeometry = new THREE.BoxGeometry(5.2, 2, 4.2, 5, 5, 1);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(10, 1, 2);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 17.5, 1, 1, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(3, 1, -0.2);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 22, 1, 1, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-8.3, 1, -2.5);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 6.2, 1, 5, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-1.7, 1, -2.5);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 6.2, 1, 5, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-1.7, 1, -12.2);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 4.5, 1, 5, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-1.7, 1, 6.3);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 6.2, 1, 5, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(7, 1, 10.5);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(1.2, 2, 6.2, 1, 5, 15);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(12, 1, 10.5);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(6.2, 2, 1.2, 1, 5, 1);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(5.5, 1, -8.5);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(6.2, 2, 1.2, 1, 5, 1);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(5.5, 1, -4);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(5.2, 2, 1.2, 1, 5, 1);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(5, 1, 8);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(7.8, 2, 1.2, 1, 5, 1);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-5, 1, -5);
fieldWireFrame.push(wall);

var wallGeometry = new THREE.BoxGeometry(7.8, 2, 1.2, 1, 5, 1);
var wall = new THREE.Mesh(wallGeometry, wireMaterial);
wall.position.set(-5, 1, 8);
fieldWireFrame.push(wall);

export default fieldWireFrame;