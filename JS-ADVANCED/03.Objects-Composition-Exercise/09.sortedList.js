function createSortedList() {
    const list = {
        add,
        remove,
        get,
        list: [],
        size: 0
    };

    function add(element) {
        this.size++;
        this.list.push(Number(element));
        this.list.sort((a, b) => a - b)
    }

    function remove(index) {
        index = Number(index);
        if (index >= 0 && index < this.list.length) {
            this.size--
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b)
        }
    }

    function get(index) {
        index = Number(index);
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }

    return list;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);