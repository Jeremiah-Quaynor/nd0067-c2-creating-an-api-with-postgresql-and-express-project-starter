import { usersType, Users } from '../users';

const user = new Users();

describe('Product model ', () => {
  describe('Index method suite', () => {
    it('should have an index method', () => {
      expect(user.index()).toBeDefined();
    });

    it('should return a list of products', async () => {

      const result = await user.index();
      expect(result).toEqual([]);
    });
  });

  describe('Show method suite', () => {
    it('should have an show method', () => {
      expect(user.show(1)).toBeDefined();
    });

    it('should return a list of products', async () => {
      const result = await user.show(1);

      expect(result).toEqual([]);
    });
  });

  describe('Create method suite', ()=> {
    it('should have a Create method',async()=> {
      const u: usersType = {
        id: 1,
        firstName: "jay",
        lastName: "hommey",
        password: "here"
        }
      expect(user.create(u)).toBeDefined();
    })
  })
});
