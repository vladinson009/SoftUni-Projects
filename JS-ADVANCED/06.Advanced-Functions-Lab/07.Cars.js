function cars(arr) {
    const result = {}
    const actions = {
        create,
        set,
        print
    }
    for (let each of arr) {
        let [func, ...rest] = each.split(' ');
        const action = actions[func];
        action(...rest)
    }

    function create(name, inherits, parentName) {
        if (inherits == undefined) {
            result[name] = {};
        } else {
            result[name] = Object.create(result[parentName]);
        }
    }

    function set(name, key, value) {
        result[name][key] = value;
    }

    function print(name) {
        const description = [];
        for (let key in result[name]) {
            description.push(`${key}:${result[name][key]}`)
        }
        console.log(description.join(','));
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])