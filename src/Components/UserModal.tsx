import React from 'react';
import { User } from '../Interfaces/User';

interface UserModalProps {
  user: User;
  closeModal: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="fixed top-0 left-0 z-0 bg-gray-800 bg-opacity-75 h-full w-full cursor-pointer" onClick={closeModal}></div>
      <div className="bg-white p-8 rounded-md relative z-10">
        <button onClick={closeModal} className="absolute top-4 right-4 text-2xl text-red-500 font-bold">&times;</button>
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="w-32 h-32 rounded-full mx-auto" />
        <h2 className="text-2xl font-bold text-center mt-4">{`${user.name.first} ${user.name.last}`}</h2>
        <p className="text-center">{user.email}</p>
        <p className="text-center">{new Date(user.dob.date).toLocaleDateString()}</p>
        <p className="text-center">{user.nat}</p>
      </div>
    </div>
  );
};

export default UserModal;
