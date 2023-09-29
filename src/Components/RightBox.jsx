import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  return <div>
    {/* Add tip Amount and total here */}
    {/* Add button to RESET */}
    <div>
      <p>Tip amount <span>/person</span></p>
      <p className="tipAmount">{tipAmount}</p>
    </div>
    <div>
      <p className="TotalAmount">{total}</p>
    </div>
    <button className="Reset" onClick={()=>{
      handleBill(0);
      handlePeople(1);
      handleTip(0);
    }}>RESET</button>
  </div>;
};

export default RightBox;
