// import React from "react";
// import Cards from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";
// import HeaderDown from "../Header/HeaderDown";

// export default class PaymentForm extends React.Component {
//   state = {
//     cvc: "",
//     expiry: "",
//     focus: "",
//     name: "",
//     number: "",
//   };

//   handleInputFocus = e => {
//     this.setState({ focus: e.target.name });
//   };

//   handleInputChange = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div>
//         <HeaderDown />
//         {/* // //       <h1
//       // //         style={{
//       // //           position: "absolute",
//       // //           width: "637px",
//       // //           height: "41px",
//       // //           left: "101px",
//       // //           top: "197px",
//       // //         }}>
//       // //         Оформление заказа
//       // //       </h1> */}

//         <div id="PaymentForm">
//           <Cards
//             cvc={this.state.cvc}
//             expiry={this.state.expiry}
//             focused={this.state.focus}
//             name={this.state.name}
//             number={this.state.number}
//           />
//           <form>
//             <input
//               type="tel"
//               name="number"
//               placeholder="Card Number"
//               onChange={this.handleInputChange}
//               onFocus={this.handleInputFocus}
//             />
//
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// // import "./payment.css";

// //   return (
// //     <div className="main">
// //       <HeaderDown />
// //       <h1
// //         style={{
// //           position: "absolute",
// //           width: "637px",
// //           height: "41px",
// //           left: "101px",
// //           top: "197px",
// //         }}>
// //         Оформление заказа
// //       </h1>
// //     </div>
// //   );

// // export default Payment;
