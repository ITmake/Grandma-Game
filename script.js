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