function createAtomModel(element) {
    const container = document.getElementById('3d-model-container');
    container.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Create nucleus
    const nucleusGeometry = new THREE.SphereGeometry(1, 32, 32);
    const nucleusMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Create electron shells
    const electronCount = element.atomicNumber;
    const shellRadii = [2, 3, 4];
    
    for (let i = 0; i < Math.min(3, Math.ceil(electronCount / 8)); i++) {
        const shellGeometry = new THREE.TorusGeometry(shellRadii[i], 0.02, 16, 100);
        const shellMaterial = new THREE.MeshPhongMaterial({ color: 0x0088ff, transparent: true, opacity: 0.3 });
        const shell = new THREE.Mesh(shellGeometry, shellMaterial);
        scene.add(shell);

        // Add electrons to shell
        const electronsInShell = Math.min(8, electronCount - i * 8);
        for (let j = 0; j < electronsInShell; j++) {
            const angle = (j / electronsInShell) * Math.PI * 2;
            const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
            const electronMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
            const electron = new THREE.Mesh(electronGeometry, electronMaterial);
            electron.position.set(
                Math.cos(angle) * shellRadii[i],
                Math.sin(angle) * shellRadii[i],
                0
            );
            scene.add(electron);
        }
    }

    camera.position.z = 10;

    function animate() {
        requestAnimationFrame(animate);
        nucleus.rotation.x += 0.01;
        nucleus.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}