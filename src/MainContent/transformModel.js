function getScale(scale) {
  let x = isNaN(scale) ? 1.0 : scale;
  let y = isNaN(scale) ? 1.0 : scale;
  let z = isNaN(scale) ? 1.0 : scale;

  return new window.THREE.Vector3(x, y, z);
}

function getTranslation(obj) {
  let x = isNaN(obj.x) ? 0.0 : obj.x;
  let y = isNaN(obj.y) ? 0.0 : obj.y;
  let z = isNaN(obj.z) ? 0.0 : obj.z;

  return new window.THREE.Vector3(x, y, z);
}

function getRotation(obj) {
  let x = isNaN(obj.x) ? 0.0 : obj.x;
  let y = isNaN(obj.y) ? 0.0 : obj.y;
  let z = isNaN(obj.z) ? 0.0 : obj.z;
  let euler = new window.THREE.Euler(
    (x * Math.PI) / 180,
    (y * Math.PI) / 180,
    (z * Math.PI) / 180,
    "XYZ"
  );
  let q = new window.THREE.Quaternion();
  q.setFromEuler(euler);
  return q;
}

function _transformModel(viewer, model, transform) {
  function _transformFragProxy(fragId) {
    var fragProxy = viewer.impl.getFragmentProxy(model, fragId);

    fragProxy.getAnimTransform();

    fragProxy.position = transform.translation;

    fragProxy.scale = transform.scale;

    //Not a standard three.js quaternion
    fragProxy.quaternion._x = transform.rotation.x;
    fragProxy.quaternion._y = transform.rotation.y;
    fragProxy.quaternion._z = transform.rotation.z;
    fragProxy.quaternion._w = transform.rotation.w;

    fragProxy.updateAnimTransform();
  }

  return new Promise(async resolve => {
    var fragCount = model.getFragmentList().fragments.fragId2dbId.length;

    //fragIds range from 0 to fragCount-1
    for (var fragId = 0; fragId < fragCount; ++fragId) {
      _transformFragProxy(fragId);
    }

    return resolve();
  });
}

async function transformModel(viewer, model, item) {
  if (
    typeof item.translate === "undefined" ||
    typeof item.rotate === "undefined" ||
    typeof item.scale === "undefined"
  )
    return;

  var transform = {
    translation: getTranslation(item.translate.get()),
    rotation: getRotation(item.rotate.get()),
    scale: getScale(item.scale.get())
  };

  await _transformModel(viewer, model, transform);
  viewer.impl.sceneUpdated(true);
}
export default transformModel;
