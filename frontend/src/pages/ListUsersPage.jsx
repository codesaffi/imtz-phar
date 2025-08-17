import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackForwardNav from '../components/BackForwardNav';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ListUsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`${BACKEND_URL}/api/persons?type=user`);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 bg-[#172542] min-h-screen text-white">
  <BackForwardNav />
  <h2 className="text-2xl font-bold mb-4">List Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user._id}
            className={`border p-4 rounded-lg cursor-pointer bg-[#1f2d47] shadow hover:bg-[#282354] transition border-gray-600`}
            onClick={() => navigate(`/admin/user/${user._id}`)}
          >
            <h4 className="font-bold text-lg">{user.name}</h4>
            <p className="text-sm">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsersPage;
