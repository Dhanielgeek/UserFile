import React from 'react';
import UserCard from './UserCard';
import { User } from '../Interfaces/User';

interface UserListProps {
  users: User[];
  openModal: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, openModal }) => {
  return (
    <div className="w-[100%] h-[100%] flex justify-around items-center flex-wrap scrollbar-thin overflow-y-scroll">
      {users.map(user => (
        <UserCard key={user.login.uuid} user={user} openModal={openModal} />
      ))}
    </div>
  );
};

export default UserList;
