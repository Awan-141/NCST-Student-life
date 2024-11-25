function createBondingModels() {
    const bondingModels = document.getElementById('bonding-models');
    const atom1 = createDraggableAtom('red', 100, 100);
    const atom2 = createDraggableAtom('blue', 200, 100);
    bondingModels.appendChild(atom1);
    bondingModels.appendChild(atom2);

    bondingModels.addEventListener('mousemove', onMouseMove);
    bondingModels.addEventListener('mouseup', onMouseUp);
}

function createDraggableAtom(color, left, top) {
    const atom = document.createElement('div');
    atom.className = 'atom';
    atom.style.backgroundColor = color;
    atom.style.left = `${left}px`;
    atom.style.top = `${top}px`;
    atom.addEventListener('mousedown', onMouseDown);
    return atom;
}

let isDragging = false;
let currentAtom = null;

function onMouseDown(e) {
    isDragging = true;
    currentAtom = e.target;
}

function onMouseMove(e) {
    if (isDragging) {
        const bondingModels = document.getElementById('bonding-models');
        currentAtom.style.left = `${e.clientX - bondingModels.offsetLeft}px`;
        currentAtom.style.top = `${e.clientY - bondingModels.offsetTop}px`;
    }
}

function onMouseUp() {
    isDragging = false;
}

document.addEventListener('DOMContentLoaded', createBondingModels);

