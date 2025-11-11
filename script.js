let scene, camera, renderer, grandma, apples = [], oranges = [], stones = [];
let score = 0;

function createGrandma() {
    // Create grandma group
    grandma = new THREE.Group();
        
    // Body (dress)
    const dressGeometry = new THREE.ConeGeometry(1, 2, 8);
    const dressMaterial = new THREE.MeshPhongMaterial({ color: 0x800080 }); // Purple dress
    const dress = new THREE.Mesh(dressGeometry, dressMaterial);
    dress.position.y = 1;
        
    // Head
    const headGeometry = new THREE.SphereGeometry(0.5);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xFFE4B5 }); // Skin color
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2.5;

     // Hair (grey bun)
    const hairGeometry = new THREE.SphereGeometry(0.4);
    const hairMaterial = new THREE.MeshPhongMaterial({ color: 0x808080 }); // Grey hair
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 2.7;
    hair.position.z = -0.2;
     
    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1.5);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0x800080 });

    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-1, 1.8, 0);
    leftArm.rotation.z = Math.PI / 3;
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(1, 1.8, 0);
    rightArm.rotation.z = -Math.PI / 3;

    // Add all parts to grandma group
    grandma.add(dress);
    grandma.add(head);
    grandma.add(hair);
    grandma.add(leftArm);
    grandma.add(rightArm);

     // Position grandma
    grandma.position.y = -4;

    scene.add(grandma);
    return grandma;
}