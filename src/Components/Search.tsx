import React, { useState } from 'react';
import { User } from '../Interfaces/User';

interface SearchProps {
  users: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const Search: React.FC<SearchProps> = ({ users, setFilteredUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredUsers(users.filter(user =>
      user.login.username.toLowerCase().includes(term.trim()) ||
      user.email.toLowerCase().includes(term.trim())
    ));
  };

  return (
    <div className="Search w-[50%] h-[90%]  flex justify-center items-center">
      <input
        type="text"
        placeholder="Search by username or email"
        value={searchTerm}
        onChange={handleSearch}
        className='w-[90%] h-[90%] px-4 rounded-md'
      />
    </div>
  );
};

export default Search;
