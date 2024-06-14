import React from 'react';
import { User } from './User';

interface UserModalProps {
  user: User;
  closeModal: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md">
        <button onClick={closeModal} className="absolute top-4 right-4 text-xl font-bold">&times;</button>
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
