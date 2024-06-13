import React, { useState } from 'react';
import { User } from './User';
import { debounce } from 'lodash';

interface SearchProps {
  users: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const Search: React.FC<SearchProps> = ({ users, setFilteredUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = debounce((term: string) => {
    const trimmedTerm = term.trim().toLowerCase();
    setFilteredUsers(users.filter(user =>
      user.login.username.toLowerCase().includes(trimmedTerm) ||
      user.email.toLowerCase().includes(trimmedTerm)
    ));
  }, 300);

  return (
    <div className="Search w-[50%] h-[90%] flex justify-center items-center">
      <input
        type="text"
        placeholder="Search by username or email"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        className='w-[90%] h-[90%] px-4 rounded-md'
      />
    </div>
  );
};

export default Search;
