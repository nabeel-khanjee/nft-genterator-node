const layersOrder = [
    { name: 'background', number: 5 },
    { name: 'character', number: 2 },
    { name: 'shirts', number: 8 },
    { name: 'glasses', number: 8 },
    // { name: 'shine', number: 1 },
    { name: 'cig', number: 2 },
    { name: 'chain', number: 3 },
    // { name: 'top lid', number: 3 },
];
  
const format = {
    width: 2000,
    height: 2000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 50;

export  { layersOrder, format, rarity, defaultEdition };