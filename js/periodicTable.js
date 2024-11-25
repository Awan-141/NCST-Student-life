function createPeriodicTable() {
    const periodicTable = document.getElementById('periodic-table');
    periodicTable.innerHTML = ''; // Clear previous content
    periodicTableData.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category.replace(/\s+/g, '-').toLowerCase()}`;
        elementDiv.innerHTML = `
            <div class="symbol">${element.symbol}</div>
            <div class="atomic-number">${element.atomicNumber}</div>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        periodicTable.appendChild(elementDiv);
    });
}

function showElementDetails(element) {
    const detailsDiv = document.getElementById('element-details');
    detailsDiv.innerHTML = `
        <button id="close-details">X</button>
        <h3>${element.name}</h3>
        <div class="large-symbol">${element.symbol} (${element.atomicNumber})</div>
        <p>Atomic Mass: ${element.atomicMass} u</p>
        <p>Category: ${element.category}</p>
        <p>Melting Point: ${element.meltingPoint} °C / ${(element.meltingPoint + 273.15).toFixed(2)} K</p>
        <p>Boiling Point: ${element.boilingPoint} °C / ${(element.boilingPoint + 273.15).toFixed(2)} K</p>
        <p>Discovery Date: ${element.discoveryDate}</p>
        <p>Discoverer: ${element.discoverer}</p>
        <p>Wikipedia Excerpt: ${element.wikipediaExcerpt}</p>
        <a href="https://en.wikipedia.org/wiki/${element.name}" target="_blank">Read more on Wikipedia</a>
    `;
    detailsDiv.classList.remove('hidden');
    render3DModel(element); // Call to render 3D model
}

document.getElementById('close-details').addEventListener('click', () => {
    document.getElementById('element-details').classList.add('hidden');
});

// Function to render the 3D atomic model using Three.js
function render3DModel(element) {
    const container = document.getElementById('3d-model-container');
    container.innerHTML = ''; // Clear previous model

    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create nucleus (red sphere)
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Create electron orbits (gray rings)
    const orbitGeometry = new THREE.RingGeometry(1, 1.05, 32);
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbit.rotation.x = Math.PI / 2; // Rotate to horizontal
    scene.add(orbit);

    // Create electrons (small green spheres)
    const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const electron = new THREE.Mesh(electronGeometry, electronMaterial);
    electron.position.set(1, 0, 0); // Position on the orbit
    scene.add(electron);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        orbit.rotation.z += 0.01; // Rotate the orbit
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

// Initialize the periodic table on DOM content loaded
document.addEventListener('DOMContentLoaded', createPeriodicTable);