class UsersService {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    console.log('getAllUsers fired');
    console.log('this.users: ' + this.users);
    return this.users;
  }

  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }

  addUser(user) {
    this.users = [user, ...this.users];
  }

  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }

}
module.exports = UsersService;
