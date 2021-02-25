const enhancer = require('./enhancer.js');
// test away!
it('check to see if it works', () => {
    expect(4).toBe(4)
})

describe('test items', ()=>{
    let newItem = { name: 'karla', durability: 19, enchancement: 19};
    
    it('restores durability back to 100', ()=>{

        const expected = { name: 'karla', durability: 100, enchancement: 19}
        const actual = enhancer.repair(newItem);
        expect(expected).toEqual(actual)
    })

    it('returns modified object', ()=>{
        const expected = { name: 'karla', durability: 100, enchancement: 20}
        const actual = enhancer.success(newItem)
        expect(expected).toEqual(actual)
    })
    it('enhancement fails', ()=>{
        const failItem = {name: 'karla', durability: 29, enchancement: 18}
        const actual = { name: 'karla', durability: 19, enchancement: 17}
        expect(enhancer.fail(failItem)).toEqual(actual)
    })
})