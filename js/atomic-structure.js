import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class AtomicStructure {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.controls = null;
        this.nucleus = null;
        this.electrons = [];
        this.electronOrbitals = [];
        this.currentElement = null;

        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = 15;

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        this.scene.add(ambientLight, pointLight);

        // Start animation
        this.animate();

        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }

    createNucleus(protons, neutrons) {
        if (this.nucleus) {
            this.scene.remove(this.nucleus);
        }

        const nucleusGroup = new THREE.Group();
        const particleGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        
        // Create protons (red)
        const protonMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        for (let i = 0; i < protons; i++) {
            const proton = new THREE.Mesh(particleGeometry, protonMaterial);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 0.5 + Math.random() * 0.5;
            proton.position.setFromSpherical(new THREE.Spherical(radius, phi, theta));
            nucleusGroup.add(proton);
        }

        // Create neutrons (blue)
        const neutronMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
        for (let i = 0; i < neutrons; i++) {
            const neutron = new THREE.Mesh(particleGeometry, neutronMaterial);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const radius = 0.5 + Math.random() * 0.5;
            neutron.position.setFromSpherical(new THREE.Spherical(radius, phi, theta));
            nucleusGroup.add(neutron);
        }

        this.nucleus = nucleusGroup;
        this.scene.add(this.nucleus);
    }

    createElectrons(electronConfiguration) {
        // Remove existing electrons and orbitals
        this.electrons.forEach(electron => this.scene.remove(electron));
        this.electronOrbitals.forEach(orbital => this.scene.remove(orbital));
        this.electrons = [];
        this.electronOrbitals = [];

        const shells = this.parseElectronConfiguration(electronConfiguration);
        const electronGeometry = new THREE.SphereGeometry(0.1, 32, 32);
        const electronMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });

        shells.forEach((electronCount, shellIndex) => {
            const shellRadius = (shellIndex + 1) * 2;
            
            // Create orbital path
            const orbitalGeometry = new THREE.TorusGeometry(shellRadius, 0.02, 16, 100);
            const orbitalMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, transparent: true, opacity: 0.3 });
            const orbital = new THREE.Mesh(orbitalGeometry, orbitalMaterial);
            orbital.rotation.x = Math.PI / 2;
            this.electronOrbitals.push(orbital);
            this.scene.add(orbital);

            // Add electrons to shell
            for (let i = 0; i < electronCount; i++) {
                const electron = new THREE.Mesh(electronGeometry, electronMaterial);
                const angle = (i / electronCount) * Math.PI * 2;
                electron.position.x = Math.cos(angle) * shellRadius;
                electron.position.z = Math.sin(angle) * shellRadius;
                electron.userData = { shellRadius, angle, speed: 0.001 * (shellIndex + 1) };
                this.electrons.push(electron);
                this.scene.add(electron);
            }
        });
    }

    parseElectronConfiguration(config) {
        const shells = [0, 0, 0, 0, 0, 0, 0]; // 7 possible shells
        const parts = config.replace(/\[.*?\]/, '').split(' ');
        parts.forEach(part => {
            if (part) {
                const shell = parseInt(part[0]) - 1;
                const electrons = parseInt(part.slice(-1));
                shells[shell] += electrons;
            }
        });
        return shells;
    }

    updateElement(element) {
        this.currentElement = element;
        this.createNucleus(element.atomicNumber, Math.round(element.atomicMass - element.atomicNumber));
        this.createElectrons(element.electronConfiguration);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate nucleus
        if (this.nucleus) {
            this.nucleus.rotation.x += 0.005;
            this.nucleus.rotation.y += 0.005;
        }

        // Animate electrons
        this.electrons.forEach(electron => {
            const { shellRadius, angle, speed } = electron.userData;
            electron.userData.angle += speed;
            electron.position.x = Math.cos(electron.userData.angle) * shellRadius;
            electron.position.z = Math.sin(electron.userData.angle) * shellRadius;
        });

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}