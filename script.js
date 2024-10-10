console.log("Javascript is Working");
import * as THREE from "three";
import { Wireframe } from "three/examples/jsm/Addons.js";
//console.log(THREE);

//Canvas
const canvas = document.querySelector('canvas.webgl');
//console.log(canvas);

//scene
const scene = new THREE.Scene();
 
//Geometry Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
