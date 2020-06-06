const users = [];
const addusers = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: 'username is taken' };
  }
  const user = { id, name, room };
  users.push(user);
};
const removeUsers = () => {};
const getUsers = () => {};
const getUsersInRoom = () => {};
