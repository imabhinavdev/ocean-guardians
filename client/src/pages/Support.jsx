// src/DonatePage.js
import  { useEffect,useState } from 'react';
import { gsap } from 'gsap';
import "./styles/support.css";

const Support = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  // useEffect(() => {
  //   gsap.fromTo(
  //     '.submit-btn',
  //     { scale: 1 },
  //     { scale: 1.1, duration: 0.3, ease: 'power1.inOut', repeat: -1, yoyo: true }
  //   );
  // }, []);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount if a predefined amount is selected
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(''); // Clear selected amount if a custom amount is entered
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    alert(`Donated Amount: ${amount}`);
    // Here you can handle the form submission logic, such as sending the data to a server
  };

  return (
    <div className="support flex items-center justify-center "style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", height:"100vh" }}>
      <div className=" p-10 rounded-md  w-full max-w-lg gmorph">
        <h1 className="text-3xl font-bold text-center mb-6">DONATE</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-11">
            <div className=" grid  grid-cols-3 gap-3">
              {['£5', '£10', '£25', '£50', '£100'].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`p-2 border rounded-md hover:bg-gray-200 text-centre ${
                    selectedAmount === amount ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleAmountClick(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Enter your own"
              className="border px-4 py-2 rounded-md text-2xl w-1/2 font-extrabold placeholder-slate-300 gmorph-field"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>
          <div className="space-y-4">
            <div className= "grid gap-3">
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                placeholder="Address Line 1"
                className="border px-4 py-2 rounded-md w-full gmorph-field placeholder-black"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="border px-4 py-2 rounded-md w-full mt-2 gmorph-field placeholder-black"
              />
              <input
                type="text"
                placeholder="State / County"
                className="border px-4 py-2 rounded-md w-full mt-2 gmorph-field placeholder-black"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="border px-4 py-2 rounded-md w-full mt-2 gmorph-field placeholder-black"
              />
              
            </div>
            <div className="grid gap-3">
              <label className="block text-sm font-medium">Enter your email address</label>
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-2 rounded-md w-full gmorph-field"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="border rounded-md mr-2"
              />
              <label className="text-sm">Gift Aid</label>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-sky-400 text-black font-bold px-4 py-2 rounded-md w-full "
          >
            DONATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;


 