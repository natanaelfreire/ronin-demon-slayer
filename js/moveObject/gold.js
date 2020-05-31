import * as THREE from '../../node_modules/three/build/three.module.js';

export default function gold() {
	var goldList = [];

	var groupGold = new THREE.Group();
	var OctahedronGeometry = new THREE.OctahedronGeometry(0.5);
	var OctahedronWire = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
	var gold = new THREE.Mesh(OctahedronGeometry, OctahedronWire);
	groupGold.add(gold);

	var OctahedronMaterial = new THREE.MeshBasicMaterial({ color: 0xffcb15 });
	var gold = new THREE.Mesh(OctahedronGeometry, OctahedronMaterial);
	groupGold.add(gold);

	groupGold.position.set(5, 1, -6);
	goldList.push(groupGold);

	var groupGold = groupGold.clone();
	groupGold.position.set(5, 1, 10.5);
	goldList.push(groupGold);

	var groupGold = groupGold.clone();
	groupGold.position.set(-5, 1, -11);
	goldList.push(groupGold);

	return goldList;
}