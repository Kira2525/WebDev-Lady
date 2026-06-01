import * as THREE from "three";

const container = document.getElementById("spaceScene");

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");

    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (error) {
    return false;
  }
}

if (!container || !supportsWebGL()) {
  if (container) {
    container.style.display = "none";
  }
} else {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let mobileViewport = window.innerWidth <= 650;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: !mobileViewport,
    alpha: true,
    powerPreference: "high-performance"
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(mobileViewport ? 1 : Math.min(window.devicePixelRatio, 2));
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0x6ecbff, 0.45);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x8eeeff, 3, 80);
  pointLight.position.set(5, 4, 8);
  scene.add(pointLight);

  const purpleLight = new THREE.PointLight(0x8a4dff, 2, 80);
  purpleLight.position.set(-6, -3, 6);
  scene.add(purpleLight);

  const planetGeometry = new THREE.SphereGeometry(2.1, 64, 64);
  const planetMaterial = new THREE.MeshStandardMaterial({
    color: 0x1db7ff,
    roughness: 0.55,
    metalness: 0.18,
    emissive: 0x061b33,
    emissiveIntensity: 0.55
  });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);
  scene.add(planet);

  const atmosphereGeometry = new THREE.SphereGeometry(2.22, 64, 64);
  const atmosphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x62eaff,
    transparent: true,
    opacity: 0.16,
    blending: THREE.AdditiveBlending
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  scene.add(atmosphere);

  const ringGeometry = new THREE.RingGeometry(2.65, 3.25, 128);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x8eeeff,
    transparent: true,
    opacity: 0.32,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2.7;
  ring.rotation.y = -0.45;
  scene.add(ring);

  const moonGeometry = new THREE.SphereGeometry(0.32, 32, 32);
  const moonMaterial = new THREE.MeshStandardMaterial({
    color: 0xd7e6ff,
    roughness: 0.7,
    metalness: 0.05,
    emissive: 0x111827,
    emissiveIntensity: 0.25
  });
  const moon = new THREE.Mesh(moonGeometry, moonMaterial);
  scene.add(moon);

  function createStars(count, radius, size, color) {
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let index = 0; index < count; index += 1) {
      positions.push(
        THREE.MathUtils.randFloatSpread(radius),
        THREE.MathUtils.randFloatSpread(radius),
        THREE.MathUtils.randFloatSpread(radius)
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color,
      size,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });

    return new THREE.Points(geometry, material);
  }

  const farStars = createStars(
    reduceMotion ? 320 : mobileViewport ? 700 : 1600,
    900,
    0.9,
    0xffffff
  );
  const blueStars = createStars(
    reduceMotion ? 120 : mobileViewport ? 250 : 600,
    500,
    1.15,
    0x7fe9ff
  );
  const purpleStars = createStars(
    reduceMotion ? 80 : mobileViewport ? 180 : 450,
    450,
    1.05,
    0xa96cff
  );

  scene.add(farStars, blueStars, purpleStars);

  function createNebula(color, position, scale, opacity) {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const nebula = new THREE.Mesh(geometry, material);
    nebula.position.set(position.x, position.y, position.z);
    nebula.scale.set(scale.x, scale.y, scale.z);

    return nebula;
  }

  const nebulas = [
    createNebula(0x006eff, { x: -8, y: 4, z: -12 }, { x: 5, y: 2.5, z: 1 }, 0.12),
    createNebula(0x7b2cff, { x: 7, y: -3, z: -10 }, { x: 6, y: 3, z: 1 }, 0.1),
    createNebula(0x00eaff, { x: 1, y: 5, z: -14 }, { x: 4, y: 2, z: 1 }, 0.08)
  ];

  nebulas.forEach((nebula) => scene.add(nebula));

  const orbGroup = new THREE.Group();
  const orbCount = reduceMotion ? 6 : mobileViewport ? 14 : 32;

  for (let index = 0; index < orbCount; index += 1) {
    const orbGeometry = new THREE.SphereGeometry(
      THREE.MathUtils.randFloat(0.025, 0.075),
      12,
      12
    );
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: index % 2 === 0 ? 0x8eeeff : 0xa96cff,
      transparent: true,
      opacity: THREE.MathUtils.randFloat(0.35, 0.8),
      blending: THREE.AdditiveBlending
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);

    orb.position.set(
      THREE.MathUtils.randFloatSpread(12),
      THREE.MathUtils.randFloatSpread(7),
      THREE.MathUtils.randFloat(-8, 4)
    );

    orb.userData.speed = THREE.MathUtils.randFloat(0.003, 0.012);
    orb.userData.floatRange = THREE.MathUtils.randFloat(0.1, 0.4);
    orb.userData.startY = orb.position.y;
    orbGroup.add(orb);
  }

  scene.add(orbGroup);

  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  };

  const shootingStars = [];
  const planetBasePosition = new THREE.Vector3();

  function updatePlanetBasePosition() {
    planetBasePosition.set(
      mobileViewport ? 1.4 : 2.6,
      mobileViewport ? -0.9 : -0.4,
      -2
    );
  }

  function syncPlanetGroup() {
    planet.position.copy(planetBasePosition);
    atmosphere.position.copy(planet.position);
    ring.position.copy(planet.position);
  }

  function handlePointerMove(clientX, clientY) {
    mouse.targetX = (clientX / window.innerWidth - 0.5) * 2;
    mouse.targetY = (clientY / window.innerHeight - 0.5) * 2;
  }

  function resetPointer() {
    mouse.targetX = 0;
    mouse.targetY = 0;
  }

  window.addEventListener("pointermove", (event) => {
    handlePointerMove(event.clientX, event.clientY);
  });

  window.addEventListener("pointerleave", resetPointer);
  window.addEventListener("touchend", resetPointer, { passive: true });

  function createShootingStar() {
    const geometry = new THREE.BufferGeometry();
    const startX = THREE.MathUtils.randFloat(-8, 8);
    const startY = THREE.MathUtils.randFloat(4, 8);
    const startZ = THREE.MathUtils.randFloat(-6, 2);
    const positions = new Float32Array([
      startX,
      startY,
      startZ,
      startX - 2.2,
      startY + 0.8,
      startZ
    ]);

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.LineBasicMaterial({
      color: 0x8eeeff,
      transparent: true,
      opacity: 1
    });

    const line = new THREE.Line(geometry, material);
    line.userData.speed = THREE.MathUtils.randFloat(0.08, 0.16);
    line.userData.life = 1;
    shootingStars.push(line);
    scene.add(line);
  }

  function removeShootingStar(star, index) {
    scene.remove(star);
    star.geometry.dispose();
    star.material.dispose();
    shootingStars.splice(index, 1);
  }

  function updateShootingStars() {
    if (!reduceMotion && Math.random() < (mobileViewport ? 0.006 : 0.014)) {
      createShootingStar();
    }

    for (let index = shootingStars.length - 1; index >= 0; index -= 1) {
      const star = shootingStars[index];

      star.position.x += star.userData.speed * 2.8;
      star.position.y -= star.userData.speed;
      star.userData.life -= 0.018;
      star.material.opacity = star.userData.life;

      if (star.userData.life <= 0) {
        removeShootingStar(star, index);
      }
    }
  }

  function handleResize() {
    mobileViewport = window.innerWidth <= 650;
    updatePlanetBasePosition();
    syncPlanetGroup();

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = mobileViewport ? 10 : 8;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(mobileViewport ? 1 : Math.min(window.devicePixelRatio, 2));
  }

  updatePlanetBasePosition();
  syncPlanetGroup();
  camera.position.z = mobileViewport ? 10 : 8;

  window.addEventListener("resize", handleResize);

  let time = 0;

  function animate() {
    time += 0.01;

    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    planet.rotation.y += reduceMotion ? 0.0018 : 0.004;
    planet.rotation.x += reduceMotion ? 0.0002 : 0.0008;
    atmosphere.rotation.y += reduceMotion ? 0.0014 : 0.003;
    ring.rotation.z += reduceMotion ? 0.0007 : 0.0018;

    const moonAngle = time * 0.85;
    moon.position.x = planet.position.x + Math.cos(moonAngle) * 3.7;
    moon.position.y = planet.position.y + Math.sin(moonAngle) * 1.1;
    moon.position.z = planet.position.z + Math.sin(moonAngle) * 1.8;

    farStars.rotation.y += reduceMotion ? 0.00012 : 0.00035;
    blueStars.rotation.y += reduceMotion ? 0.00018 : 0.00055;
    purpleStars.rotation.y -= reduceMotion ? 0.00012 : 0.0004;

    nebulas.forEach((nebula, index) => {
      nebula.rotation.z += reduceMotion ? 0.0002 : 0.0008 + index * 0.0002;
      if (!reduceMotion) {
        nebula.material.opacity = 0.07 + Math.sin(time + index) * 0.025;
      }
    });

    orbGroup.children.forEach((orb, index) => {
      orb.position.y =
        orb.userData.startY + Math.sin(time * 2 + index) * orb.userData.floatRange;
      orb.rotation.y += orb.userData.speed;
    });

    camera.position.x = mouse.x * 0.45;
    camera.position.y = -mouse.y * 0.28;
    camera.lookAt(0, 0, -2);

    planet.position.x = planetBasePosition.x + mouse.x * 0.12;
    planet.position.y = planetBasePosition.y - mouse.y * 0.1;
    atmosphere.position.copy(planet.position);
    ring.position.copy(planet.position);

    updateShootingStars();
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}
