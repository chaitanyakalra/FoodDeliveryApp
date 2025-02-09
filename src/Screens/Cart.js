// import React from 'react'
// import DeleteIconIcon from '@material-ui/icons/DeleteIcon';
// // import DeleteIcon from '@material-ui/icons/DeleteIcon'
// import { useCart, useDispatchCart } from '../Components/ContextReducer';


// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }

//   const handleCheckOut = async () => {
//     let userEmail = localStorage.getItem("userEmail");

//     let response = await fetch("http://localhost:4900/api/auth/orderData", {

//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       })
//     });
//     console.log("JSON RESPONSE:::::", response.status)
//     if (response.status === 200) {
//       dispatch({ type: "DROP" })
//     }
//   }

//   let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div>

//       {console.log(data)}
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col' >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Quantity</th>
//               <th scope='col' >Option</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{food.name}</td>
//                 <td>{food.qty}</td>
//                 <td>{food.size}</td>
//                 <td>{food.price}</td>
//                 <td ><button type="button" className="btn p-0"><DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//         </div>
//       </div>



//     </div>
//   )
// }

// import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { useCart, useDispatchCart } from '../Components/ContextReducer';
// // const orderDataRouter = require('./');
// // app.use('/api/auth', orderDataRouter);


// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();

//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     );
//   }

//   const handleCheckOut = async () => {
//     let userEmail = localStorage.getItem("userEmail");
//     console.log("Fetch start");
//     let response = await fetch("http://localhost:4900/api/orderData", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
      
//       body: JSON.stringify({
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       })
//     });
//     console.log("Order Response:",response.status);
//     if (response.status === 200) {
//       dispatch({ type: "DROP" });
//     }
//   };
  
  
//   let totalPrice = data.reduce((total, food) => total + food.price, 0);

//   return (
//     <div>
//       <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
//         <table className='table table-hover'>
//           <thead className='text-success fs-4'>
//             <tr>
//               <th scope='col' style={{ color: 'white' }}>#</th>
//               <th scope='col' style={{ color: 'white' }}>Name</th>
//               <th scope='col' style={{ color: 'white' }}>Quantity</th>
//               <th scope='col' style={{ color: 'white' }}>Option</th>
//               <th scope='col' style={{ color: 'white' }}>Amount</th>
//               <th scope='col' style={{ color: 'white' }}></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr key={index} className='table-content' style={{ color: 'gray' }}>
//                 <th scope='row'style={{ color: 'gray' }}>{index + 1}</th>
//                 <td style={{ color: 'gray' }}>{food.name}</td>
//                 <td style={{ color: 'gray' }}>{food.qty}</td>
//                 <td style={{ color: 'gray' }}>{food.size}</td>
//                 <td style={{ color: 'gray' }}>{food.price}</td>
//                 <td>
//                   <button
//                     type="button"
//                     className="btn p-0">
//                       <DeleteIcon
//                     onClick={() => {
//                       dispatch({ type: "REMOVE", index: index })
//                     }}
//                   />
                   
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div>
//           <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
//         </div>
//         <div>
//           <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../Components/ContextReducer';

export default function Cart() {
  const [checkoutMessage, setCheckoutMessage] = useState('');
  let data = useCart();
  let dispatch = useDispatchCart();

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    console.log("Fetch start");
    let response = await fetch("http://localhost:4900/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    console.log("Order Response:", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
      setCheckoutMessage('Items checked out');
    } else {
      setCheckoutMessage('Checkout failed. Please try again.');
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>{checkoutMessage || 'The Cart is Empty!'}</div>
      </div>
    );
  }

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col' style={{ color: 'white' }}>#</th>
              <th scope='col' style={{ color: 'white' }}>Name</th>
              <th scope='col' style={{ color: 'white' }}>Quantity</th>
              <th scope='col' style={{ color: 'white' }}>Option</th>
              <th scope='col' style={{ color: 'white' }}>Amount</th>
              <th scope='col' style={{ color: 'white' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index} className='table-content' style={{ color: 'gray' }}>
                <th scope='row' style={{ color: 'gray' }}>{index + 1}</th>
                <td style={{ color: 'gray' }}>{food.name}</td>
                <td style={{ color: 'gray' }}>{food.qty}</td>
                <td style={{ color: 'gray' }}>{food.size}</td>
                <td style={{ color: 'gray' }}>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn p-0">
                    <DeleteIcon
                      onClick={() => {
                        dispatch({ type: "REMOVE", index: index })
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>
    </div>
  );
}

