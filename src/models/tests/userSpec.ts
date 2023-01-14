import { usersType, Users } from '../users';

const user = new Users();

describe('User model ', () => {
  it('should be empty', async () => {
    const result = await user.index();
    expect(result).toEqual([]);
  });
  it('should be empty', async () => {
    const result = await user.show("1");
    expect(result).toEqual([]);
  });
  it('should be greater than 0',async()=> {
    const u: usersType = {
      firstName: "jay",
      lastName: "hommey",
      password: "here"
      }
      await user.create(u)
      const result = await user.index();
      expect(result.length).toBeGreaterThan(0)
  })
  it('should return a user',async () => {
    const U: usersType = {
      firstName: "jay",
      lastName: "hommey",
      password: "here"
      }
    const result = await user.authenticate(U)
    expect(result).toEqual(null)
  })
  it('should be empty', async () => {
    await user.delete('1')
    const result = await user.index();
    expect(result.length).toEqual(0)
  })
});
