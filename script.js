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