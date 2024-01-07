const assert = require('node:assert/strict');
const { mock, test, describe } = require('node:test');
const {MakeRequest} = require('./resquest')

// test('test',async (t) => {
//     const id = 3

//     mock.method(MakeRequest, 'fetchDataFromAPI').mock.mockImplementation((id) => ({
//         userId: 1,
//         id: id,
//         title: "delectus aut autem",
//         completed: false,
//     }))
//     const res = await MakeRequest.fetchDataFromAPI(id)
//     assert.deepEqual(res.id, id)

// })

const testFunc = () => {}

const tracker = new assert.CallTracker();

describe('opa', () => {
    test('teste', () => {
        testFunc()

        assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
    })
})