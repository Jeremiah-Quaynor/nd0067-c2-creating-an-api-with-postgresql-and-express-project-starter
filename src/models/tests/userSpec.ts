import { usersType, Users } from '../users';

const user = new Users();

describe('User model ', () => {
  it('should be greater than 0 (create)',async()=> {
    let u: usersType = {
      firstName: "jay",
      lastName: "hommey",
      password: "here"
      }
      await user.create(u)
      const result = await user.index();
      expect(result.length).toBeGreaterThan(0)
  })
  it('should be 1 (index)', async () => {
    const result = await user.index();
    expect(result.length).toEqual(1);
  });

  it('should be 1 (show)', async () => {
    const result = await user.show("1");
    expect(result.length).toBe(1);
  });

  it('should return a user (authenticate)',async () => {
    const U: usersType = {
      firstName: "jay",
      lastName: "hommey",
      password: "here"
      }
      const Ures: usersType = {
        firstName: "jay",
        lastName: "hommey",
        password: '$2b$10$lWfJNFNYymp.pJhNzzgvsORf47G3Ir/FhE2wwrEuoENNkgnwRgiPa'
      }
    const result = await user.authenticate(U)
    // console.log(result)
    expect(result).toEqual(null)    
  })
  it('should be empty (delete)', async () => {
    await user.delete('1')
    const result = await user.index();
    expect(result.length).toEqual(0)
  })
});
