import { BoxGeometry, MeshBasicMaterial, Mesh } from '../../node_modules/three/build/three.module.js';

export default function fieldWireFrame() {

	var field = [];

	// EXTERNAL WALLS:
	var wallGeometry = new BoxGeometry(28, 2, 1.2, 15);
	var wireMaterial = new MeshBasicMaterial({ color: 0x000000, wireframe: true, transparent: true, opacity: 0 });
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(0, 1, 13);
	field.push(wall);

	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(0, 1, -13);
	field.push(wall);

	var wallGeometry = new BoxGeometry(1.2, 2, 28, 1, 1, 15);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(13, 1, 0);
	field.push(wall);

	var wallGeometry = new BoxGeometry(1.2, 2, 22, 1, 1, 15);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-13, 1, 2.5);
	field.push(wall);

	// INTERNAL WALLS:
	var wallGeometry = new BoxGeometry(5.2, 2, 4.2, 5, 5, 1);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(10, 1, 2);
	field.push(wall);

	var wallGeometry = new BoxGeometry(1.2, 2, 17.5, 1, 1, 15);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(3, 1, -0.2);
	field.push(wall);

	var wallGeometry = new BoxGeometry(1.2, 2, 22, 1, 1, 15);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-8.3, 1, -2.5);
	field.push(wall);

	var wallGeometry = new BoxGeometry(1.2, 2, 6.2, 1, 5, 15); // THIS IS EQUAL TO THE NEXT WALLS
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-1.7, 1, -2.5);
	field.push(wall);

	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-1.7, 1, -12.2);
	field.push(wall);

	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(7, 1, 10.5);
	field.push(wall);

	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(12, 1, 10.5);
	field.push(wall);

	var wallGeometry = new BoxGeometry(1.2, 2, 4.5, 1, 5, 15);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-1.7, 1, 6.3);
	field.push(wall);

	var wallGeometry = new BoxGeometry(6.2, 2, 1.2, 1, 5, 1); // THIS IS EQUAL TO THE NEXT WALL
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(5.5, 1, -8.5);
	field.push(wall);

	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(5.5, 1, -4);
	field.push(wall);

	var wallGeometry = new BoxGeometry(5.2, 2, 1.2, 1, 5, 1);
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(5, 1, 8);
	field.push(wall);

	var wallGeometry = new BoxGeometry(7.8, 2, 1.2, 1, 5, 1); // THIS IS EQUAL TO THE NEXT WALL
	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-5, 1, -5);
	field.push(wall);

	var wall = new Mesh(wallGeometry, wireMaterial);
	wall.position.set(-5, 1, 8);
	field.push(wall);

	return field;
}
