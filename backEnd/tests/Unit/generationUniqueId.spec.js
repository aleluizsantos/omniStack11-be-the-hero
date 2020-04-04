const generateUniqueId = require('../../src/utils/generetionUniqueId');

describe('Generation Unique Id', () => {
    it('should generate an unique ID', () => {
        const id =  generateUniqueId();
        expect(id).toHaveLength(8);
    });
});