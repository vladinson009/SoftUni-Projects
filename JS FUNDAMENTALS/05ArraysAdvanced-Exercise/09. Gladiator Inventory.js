function gladiatorInventory(input) {
    let equipments = input.shift();
    let currentEquipment = equipments.split(' ')
    for (let string of input) {
        let currentString = string.split(' ');
        let command = currentString[0];
        let item = currentString[1];
        switch (command) {
            case 'Buy':
                if (!currentEquipment.includes(item)) {
                    currentEquipment.push(item)
                }
                break;
            case 'Trash':
                if (currentEquipment.includes(item)) {
                    let idx = currentEquipment.indexOf(item)
                    currentEquipment.splice(idx, 1)
                }
                break;
            case 'Repair':
                let idx = currentEquipment.indexOf(item);
                let repaired = currentEquipment.splice(idx, 1)
                currentEquipment.push(repaired)
                break;
            case 'Upgrade':
                item = item.split('-')
                if (currentEquipment.includes(item[0])) {
                    let idx = currentEquipment.indexOf(item[0]);
                    currentEquipment.splice(idx + 1, 0, `${item[0]}:${item[1]}`);
                }
                break;
        }
    }
    console.log(currentEquipment.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
])