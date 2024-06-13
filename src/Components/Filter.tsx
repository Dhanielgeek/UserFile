import React, { useState } from 'react';
import { User } from './User';
import { filterUsersByDOB } from './Utils';

interface FilterProps {
  users: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
  nationalities: string[];
}

const Filter: React.FC<FilterProps> = ({ setFilteredUsers, users, nationalities }) => {
  const [gender, setGender] = useState<string>('');
  const [nat, setNat] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newGender = event.target.value;
    setGender(newGender);
    filterUsers(newGender, nat, startDate, endDate);
  };

  const handleNatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newNat = event.target.value;
    setNat(newNat);
    filterUsers(gender, newNat, startDate, endDate);
  };

  const handleDateChange = (field: 'start' | 'end', value: string) => {
    if (field === 'start') {
      setStartDate(value);
      filterUsers(gender, nat, value, endDate);
    } else {
      setEndDate(value);
      filterUsers(gender, nat, startDate, value);
    }
  };

  const filterUsers = (gender: string, nat: string, start: string, end: string) => {
    let filtered = users;

    if (gender) {
      filtered = filtered.filter(user => user.gender === gender);
    }

    if (nat) {
      filtered = filtered.filter(user => user.nat === nat);
    }

    if (start && end) {
      filtered = filterUsersByDOB(filtered, new Date(start), new Date(end));
    }

    setFilteredUsers(filtered);
  };

  return (
    <div className='Filter w-[90%] flex justify-around items-center'>
      <select value={gender} onChange={handleGenderChange} className='w-[20%] h-[90%] rounded-md shadow-md'>
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select value={nat} onChange={handleNatChange} className='w-[20%] h-[90%] rounded-md shadow-md'>
        <option value="">All Nationalities</option>
        {nationalities.map((nat, index) => (
          <option key={index} value={nat}>{nat}</option>
        ))}
      </select>
      <input
        type="date"
        value={startDate}
        onChange={(e) => handleDateChange('start', e.target.value)}
        className='w-[20%] h-[90%] rounded-md shadow-md'
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => handleDateChange('end', e.target.value)}
        className='w-[20%] h-[90%] rounded-md shadow-md'
      />
    </div>
  );
};

export default Filter;
