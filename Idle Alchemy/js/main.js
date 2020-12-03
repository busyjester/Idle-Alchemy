var game = new Vue({
    el: '#game',
    data: {
        resource: {
            gold: 0,
            ingredients: 0
        },
        gathering: {
            progress: 0,
            required: 600,
            speed: 10,
            yield: 1
        },
        brewery: {
            progress: 0,
            required: 1200,
            speed: 10,
            level: 1
        },
        inventory: {
            capacity: 10,
            filled: 0,
            potions: [],
        }
    },
    methods: {
        
    }
})
