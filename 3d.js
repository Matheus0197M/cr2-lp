// VAMO USAR O THREE JS RAPAZIADA, pra deixar o titulo 3D bem zikado

// No terminal tem que rodar 
// npm install --save three
// npx vite

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

function titulo3d(){
    //      Cena
    const scene = new THREE.Scene();
    //      Câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //      Renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
}