import { Raycaster } from '../../node_modules/three/build/three.module.js';

export default function collect(wire, collectableMeshes, scene) {
	var originPoint = wire.position.clone();

	for (var vertexIndex = 0; vertexIndex < wire.geometry.vertices.length; vertexIndex++)
	{		
		var localVertex = wire.geometry.vertices[vertexIndex].clone();
		var ray = new Raycaster( originPoint, localVertex.clone().normalize() );
		var collisionResults = ray.intersectObjects( collectableMeshes );
		
		if ( collisionResults.length > 0 && collisionResults[0].distance < localVertex.length() ) {
			//console.log(originPoint);
			if ((originPoint.x > 4 && originPoint.x < 6) && (originPoint.z > -7 && originPoint.z < -5))
				for (var i = 0; i < scene.children.length; i++) {
					if (scene.children[i].id == 22) {
						scene.remove(scene.children[i]);
					}
				}

			if ((originPoint.x > -6 && originPoint.x < -4) && (originPoint.z > -12 && originPoint.z < -10))
				for (var i = 0; i < scene.children.length; i++) {
					if (scene.children[i].id == 28) {
						scene.remove(scene.children[i]);
					}
				}

			if ((originPoint.x > 4 && originPoint.x < 6) && (originPoint.z > 9.5 && originPoint.z < 11.5))
				for (var i = 0; i < scene.children.length; i++) {
					if (scene.children[i].id == 25) {
						scene.remove(scene.children[i]);
					}
				}
		}
	}

}
