let scene, camera, renderer, atom, electrons = [];

function createAtomModel() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);
    document.getElementById('atom-canvas').appendChild(renderer.domElement);

    const nucleus = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    scene.add(nucleus);

    camera.position.z = 5;

    animate();
}

function createElectron() {
    const electron = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x0000ff })
    );
    const orbit = new THREE.Object3D();
    orbit.add(electron);
    scene.add(orbit);
    electrons.push({ electron, orbit });
    return orbit;
}

function setAtomType(type) {
    // Remove existing electrons
    electrons.forEach(e => {
        scene.remove(e.orbit);
    });
    electrons = [];

    if (type === 'hydrogen') {
        createElectron().rotation.x = Math.PI / 2;
        document.getElementById('atom-explanation').textContent = 'Hydrogen atom: 1 proton, 1 electron';
    } else if (type === 'carbon') {
        for (let i = 0; i < 2; i++) {
            const orbit = createElectron();
            orbit.rotation.x = Math.PI / 2;
            orbit.rotation.y = i * Math.PI / 2;
        }
        for (let i = 0; i < 4; i++) {
            const orbit = createElectron();
            orbit.rotation.x = i * Math.PI / 2;
        }
        document.getElementById('atom-explanation').textContent = 'Carbon atom: 6 protons, 6 neutrons, 6 electrons';
    }
}

function animate() {
    requestAnimationFrame(animate);
    electrons.forEach(e => {
        e.orbit.rotation.z += 0.01;
        e.electron.position.x = Math.sin(e.orbit.rotation.z) * 2;
        e.electron.position.y = Math.cos(e.orbit.rotation.z) * 2;
    });
    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', () => {
    createAtomModel();
    document.getElementById('hydrogen').addEventListener('click', () => setAtomType('hydrogen'));
    document.getElementById('carbon').addEventListener('click', () => setAtomType('carbon'));
    setAtomType('hydrogen'); // Default to hydrogen
});
