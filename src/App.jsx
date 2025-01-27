// import { useState } from 'react';
// import InputBox from './components/InputBox';
// import useCurrencyInfo from './hooks/useCurrencyInfo';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const currencyInfo = useCurrencyInfo(from);

//   const options = Object.keys(currencyInfo);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setConvertedAmount(amount);
//     setAmount(convertedAmount);
//   };

//   const convert = () => {
//     setConvertedAmount(amount * (currencyInfo[to] || 0));
//   };

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://img.freepik.com/premium-vector/global-currency-background_115579-800.jpg')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-4">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                 onCurrencyChange={setFrom}
//                 selectCurrency={from}
//                 onAmountChange={setAmount}
//               />
//             </div>
//             <div className="relative w-full h-0.5 mb-4">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-pink-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 Swap
//               </button>
//             </div>
//             <div className="w-full mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={setTo}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>
//             <button type="submit" className="w-full bg-green-600 text-white px-4 py-3 rounded-lg">
//               Convert
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 0));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/global-currency-background_115579-800.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmountChange={setAmount}
              />
            </div>
            <div className="relative w-full h-0.5 mb-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white 
                px-2 py-0.5 hover:bg-red-800 active:bg-green-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
  type="submit"
  className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-red-800 active:bg-green-800 focus:ring-2 focus:ring-black-400 focus:outline-none"
>
  Convert
</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
