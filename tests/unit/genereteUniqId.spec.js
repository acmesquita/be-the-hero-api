const generateUniqId = require('../../src/utils/generateUniqId')

describe('Generate Unique ID', () => {
  it('should generate an unique id', () => {
    let id = generateUniqId()

    expect(id).toHaveLength(8)
  })
})