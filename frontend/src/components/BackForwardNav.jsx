import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const BackForwardNav = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6 px-2 py-2">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-[#1f2d47] hover:bg-[#282354] text-white px-4 py-2 rounded-lg shadow transition"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Back</span>
      </button>
      <button
        onClick={() => navigate(1)}
        className="flex items-center gap-2 bg-[#1f2d47] hover:bg-[#282354] text-white px-4 py-2 rounded-lg shadow transition"
      >
        <span className="hidden sm:inline">Forward</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default BackForwardNav;
