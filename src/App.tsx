import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './Components/UserList';
import Search from './Components/Search';
import Filter from './Components/Filter';
import UserModal from './Components/UserModal';
import { User } from './Interfaces/User';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=50')
      .then(response => {
        setUsers(response.data.results);
        setFilteredUsers(response.data.results);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center flex-col">
      <div className='w-[100%] h-[10%] bg-yellow-500 flex justify-center items-center'>
        <Search users={users} setFilteredUsers={setFilteredUsers} />
      </div>
      <div className='w-[100%] h-[9%] flex justify-start items-center px-5'>
        <Filter users={users} setFilteredUsers={setFilteredUsers} />
      </div>
      <div className='w-[100%] h-[80%] flex justify-center items-center'>
        <UserList users={filteredUsers} openModal={openModal} />
      </div>
      {isModalOpen && selectedUser && (
        <UserModal user={selectedUser} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
