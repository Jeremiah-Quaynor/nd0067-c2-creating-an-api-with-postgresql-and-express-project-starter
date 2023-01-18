import { usersType, Users } from '../users';


describe('Users class', () => {
  let users: Users;
  beforeEach(() => {
    users = new Users();
  });

  describe('index method', () => {
    it('should return an array of all users', async () => {
      const result = await users.index();
      expect(result).toBeDefined();
      expect(result instanceof Array).toBeTruthy();
    });
  });

  describe('show method', () => {
    it('should return an array with a single user object when a valid id is passed', async () => {
      const newUser:usersType = {
        firstName: 'John',
        lastName: 'Doe',
        password: 'password'
      }
      await users.create(newUser);

      const result = await users.show('1');
      expect(result).toBeDefined();
      expect(result instanceof Array).toBeTruthy();
      // expect(result.length).toEqual(0);
    });
  });

  describe('delete method', () => {
    it('should delete the user with the specified id', async () => {
      const newUser:usersType = {
        firstName: 'John',
        lastName: 'Doe',
        password: 'password'
      }
      await users.create(newUser);
      const result = await users.delete('1');
      expect(result).toBeDefined();
    });
  });

  describe('create method', () => {
    it('should create a new user and return the created user object', async () => {
      const newUser:usersType = {
        firstName: 'John',
        lastName: 'Doe',
        password: 'password'
      }
      const result = await users.create(newUser);
      expect(result).toBeDefined();
    });
  });

  describe('authenticate method', () => {
    it('should return the user object if the provided credentials are correct', async () => {
        const user:usersType = {
            firstName: 'John',
            lastName: 'Doe',
            password: 'password'
        }
        const result = await users.authenticate(user);
        expect(result).toBeDefined();
    });
    it('should return null if the provided credentials are incorrect', async () => {
        const user:usersType = {
            firstName: 'Jane',
            lastName: 'Doe',
            password: 'wrongpassword'
        }
        const result = await users.authenticate(user);
        expect(result).toBeNull();
    });
  });
});
