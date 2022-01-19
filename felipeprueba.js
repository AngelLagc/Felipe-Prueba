let carreritas = ["Lucia", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log(carreritas);

// 1er paso
carreritas.splice(4, 1);
carreritas.splice(2, 0, "Andrea"); // Andrea adelanta a María
console.log(carreritas);

carreritas.pop(); // José queda descalificado
console.log(carreritas);

carreritas.splice(1, 0, "Cristobal", "Fernanda", "Armando"); // Se clasifican tres nuevos corredores
console.log(carreritas);

carreritas.unshift("Federico"); // Toma el primer puesto
console.log(carreritas);
