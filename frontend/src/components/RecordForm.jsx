// // --- RecordForm.jsx ---
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const RecordForm = ({ customerId }) => {
//   const [type, setType] = useState('purchase');
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');
//   const [date, setDate] = useState('');
//   const [remainingAmount, setRemainingAmount] = useState('');
//     const [transactions, setTransactions] = useState([]);


//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const { data } = await axios.get(`${BACKEND_URL}/api/transactions/person/${customerId}`);
//         setTransactions(data);
//       } catch (err) {
//         console.error('Error fetching transactions:', err);
//       }
//     };
    
//     if (customerId) {
//       fetchTransactions();
//     }
//   }, [customerId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BACKEND_URL}/api/transactions`, {
//   person: customerId,
//   transactionType: 'buy',
//   products: [{
//     name: productName,
//     quantity: 1,
//     price: Number(productPrice),
//   }],
//   totalAmount: Number(productPrice),
//   paidAmount: Number(productPrice) - Number(remainingAmount),
//   date,
// });
//       setProductName('');
//       setProductPrice('');
//       setDate('');
//       setRemainingAmount('');
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//             <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-4">
//       <h3 className="text-lg font-semibold mb-2">Add Record</h3>
//       <select
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//         className="w-full p-2 border mb-2"
//       >
//         <option value="purchase">Purchase</option>
//         <option value="sale">Sale</option>
//       </select>
//       <input
//         type="text"
//         placeholder="Product Name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//         className="w-full p-2 border mb-2"
//         required
//       />
//       <input
//         type="number"
//         placeholder="Product Price"
//         value={productPrice}
//         onChange={(e) => setProductPrice(e.target.value)}
//         className="w-full p-2 border mb-2"
//         required
//       />
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//         className="w-full p-2 border mb-2"
//         required
//       />
//       <input
//         type="number"
//         placeholder="Remaining Amount"
//         value={remainingAmount}
//         onChange={(e) => setRemainingAmount(e.target.value)}
//         className="w-full p-2 border mb-2"
//       />
//       <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Record</button>
//     </form>

//               <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
//         {transactions.map(transaction => (
//           <div key={transaction._id} className="bg-gray-50 p-3 rounded mb-2">
//             <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
//             <p>Total: ${transaction.totalAmount}</p>
//             <p>Paid: ${transaction.paidAmount}</p>
//             <p>Remaining: ${transaction.remainingAmount}</p>
//             <p>Total: {transaction.transactionType}</p>
//             <p>Product:             <ul>
//               {transaction.products.map((product, index) => (
//                 <li key={index}>
//                   {product.name}
//                 </li>
//               ))}
//             </ul></p>


//           </div>
//         ))}
//       </div>
//     </div>

    
//   );
// };

// export default RecordForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const RecordForm = ({ customerId, userType = 'customer', onCustomerCreated, hideHistory = false }) => {
  // Determine allowed transaction type(s)
  let allowedTypes = [];
  if (userType === 'customer') allowedTypes = ['sale'];
  else if (userType === 'vendor') allowedTypes = ['purchase'];
  else allowedTypes = ['purchase', 'sale'];

  const [type, setType] = useState(allowedTypes[0]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [date, setDate] = useState('');
  const [remainingAmount, setRemainingAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/transactions/person/${customerId}`);
        setTransactions(data);
      } catch (err) {
        console.error('Error fetching transactions:', err);
      }
    };

    if (customerId) {
      fetchTransactions();
    }
  }, [customerId]);

  // Removed auto-save logic. Only submit on form submit.

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_URL}/api/transactions`, {
        person: customerId,
        transactionType: type === 'purchase' ? 'buy' : 'sell',
        products: [
          {
            name: productName,
            quantity: 1,
            price: Number(productPrice),
          },
        ],
        totalAmount: Number(productPrice),
        paidAmount: Number(productPrice) - Number(remainingAmount),
        date,
      });
      setProductName('');
      setProductPrice('');
      setDate('');
      setRemainingAmount('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={async (e) => {
        await handleSubmit(e);
        if (onCustomerCreated) onCustomerCreated();
      }} className="bg-[#1f2d47] p-4 rounded-lg shadow mt-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Add Record</h3>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 mb-3 bg-[#172542] border border-gray-600 rounded text-white"
          disabled={allowedTypes.length === 1}
        >
          {allowedTypes.includes('purchase') && <option value="purchase">Purchase</option>}
          {allowedTypes.includes('sale') && <option value="sale">Sale</option>}
        </select>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 mb-3 bg-[#172542] border border-gray-600 rounded text-white placeholder-gray-400"
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full p-2 mb-3 bg-[#172542] border border-gray-600 rounded text-white placeholder-gray-400"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-3 bg-[#172542] border border-gray-600 rounded text-white"
          required
        />
        <input
          type="number"
          placeholder="Remaining Amount"
          value={remainingAmount}
          onChange={(e) => setRemainingAmount(e.target.value)}
          className="w-full p-2 mb-3 bg-[#172542] border border-gray-600 rounded text-white placeholder-gray-400"
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded">
          Add Record
        </button>
      </form>
      {!hideHistory && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-white">Transaction History</h3>
          {transactions.map((transaction) => (
            <div key={transaction._id} className="bg-[#1f2d47] p-4 rounded mb-3 text-white">
              <p>Date: {new Date(transaction.date).toLocaleDateString()}</p>
              <p>Total: ${transaction.totalAmount}</p>
              <p>Paid: ${transaction.paidAmount}</p>
              <p>Remaining: ${transaction.remainingAmount}</p>
              <p>Type: {transaction.transactionType}</p>
              <p>Product(s):</p>
              <ul className="list-disc list-inside">
                {transaction.products.map((product, index) => (
                  <li key={index}>{product.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordForm;
