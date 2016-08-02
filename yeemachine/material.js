/**
 * @author TatumCreative (Greg Tatum) / http://gregtatum.com/
 */

function generateMorphTargets(mesh, geometry) {

  var vertices = [],
    scale;

  for (var i = 0; i < geometry.vertices.length; i++) {

    vertices.push(geometry.vertices[i].clone());

    scale = 1 + Math.random() * 0.7;

    vertices[vertices.length - 1].x *= scale;
    vertices[vertices.length - 1].y *= scale;
    vertices[vertices.length - 1].z *= scale;

  }

  geometry.morphTargets.push({
    name: "target1",
    vertices: vertices
  });

  geometry.update

}

function updateMorphs(mesh, material) {

  return function() {

    mesh.updateMorphTargets();
    material.needsUpdate = true;

  };

}

function guiMeshBasicMaterial(mesh, material) {



  var folder = gui.addFolder('morph');
  folder.add(material, 'morphTargets').onChange(updateMorphs(mesh, material));


}

function chooseFromHash(mesh, geometry) {

  var selectedMaterial = "morph";
  var material;

  switch (selectedMaterial) {

    case "morph":

      material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        morphTargets: true,
      });
      guiMeshBasicMaterial(mesh, material);

      return material;

      break;


  }
}
