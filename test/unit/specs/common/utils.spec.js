import { add } from '../../../../src/common/utils'

describe('#utils.js', () => {

  describe('#add()', () => {

    it('1加1应该等于2', () => {
      expect(add(1, 1)).to.equal(2);
    })

  })

})