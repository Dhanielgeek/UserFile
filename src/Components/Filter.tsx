import React from 'react';
import { User } from './User';

interface FilterProps {
  users: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const Filter: React.FC<FilterProps> = ({ setFilteredUsers, users }) => {
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value;
    if (gender) {
      setFilteredUsers(users.filter(user => user.gender === gender));
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <div className=' Filter w-[10%] h-[90%] flex justify-center items-center'>
      <select onChange={handleGenderChange} className='w-[90%] h-[90%] rounded-md shadow-md'>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      
    </div>
  );
};

export default Filter;
