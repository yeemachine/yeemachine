/**
 * @author TatumCreative (Greg Tatum) / http://gregtatum.com/
 */









function generateMorphTargets(mesh, geometry) {

  var vertices = [],
    scale;

  for (var i = 0; i < geometry.vertices.length; i++) {

    vertices.push(geometry.vertices[i].clone());

    scale = 1 + Math.random() * 0.3;

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





function updateMorphs(torus, material) {

  return function() {

    torus.updateMorphTargets();
    material.needsUpdate = true;

  };

}








function guiMeshBasicMaterial(gui, mesh, material, geometry) {

  var data = {
    color: 0xffffff,

  };

  var folder = gui.addFolder('THREE.MeshBasicMaterial');




  folder.add(material, 'morphTargets').onChange(updateMorphs(mesh, material));

  //folder.add( material, 'skinning' );

}









function chooseFromHash(gui, mesh, geometry) {

  var selectedMaterial = window.location.hash.substring(1) || "MeshBasicMaterial";
  var material;

  switch (selectedMaterial) {

    case "MeshBasicMaterial":

      material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
				morphTargets: true
      });
      guiMeshBasicMaterial(gui, mesh, material, geometry);

      return material;

      break;


  }

}
