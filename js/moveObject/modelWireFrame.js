import { BoxGeometry, MeshBasicMaterial, Mesh } from '../../node_modules/three/build/three.module.js';

export default function modelWireFrame() {

	var modelGeometry = new BoxGeometry(1.2, 1.5, 1.2, 2, 2, 2);
	var wireMaterial = new MeshBasicMaterial({ color: 0xff0000, wireframe: true, transparent: true, opacity: 0 });
	var model = new Mesh(modelGeometry, wireMaterial);
	model.position.set(9.5, 0.8, 10);

	return model;
}
