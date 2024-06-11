import React from 'react';
import { User } from '../Interfaces/User';

interface UserCardProps {
  user: User;
  openModal: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, openModal }) => {
  return (
    <div
      className="Card w-[24%] h-[45%] mb-4 bg-[#4086c7] rounded-md flex justify-around items-center flex-col cursor-pointer"
      onClick={() => openModal(user)}
    >
      <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
      <h2 className='text-xl font-medium text-white'>{`${user.name.first} ${user.name.last}`}</h2>
      <p className='text-gray-400'>{user.email}</p>
      <p>{new Date(user.dob.date).toLocaleDateString()}</p>
      <p className=' font-medium text-yellow-500'>{user.nat}</p>
    </div>
  );
};

export default UserCard;
