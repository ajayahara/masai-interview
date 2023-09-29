import React from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div>
      {/* Add input for bill */}
      {/* Add buttons for % of tip */}
      {/* Add input for no.of peoples */}
      <div>
        <p>Bill</p>
        <input type="number" className="bill_input" onChange={(e)=>{
          handleBill(+e.target.value);
        }}/>
      </div>
      <div>
        <button onClick={()=>{
        handleTip(5)
        }} >5%</button>
        <button onClick={()=>{
        handleTip(10)
        }} >10%</button>
        <button onClick={()=>{
        handleTip(20)
        }} >20%</button>
        <button onClick={()=>{
        handleTip(50)
        }} >50%</button>
        <input type="number" className="custom" placeholder="Custom" onChange={(e)=>{
          handleTip(+e.target.value)
        }}/>
      </div>
      <div>
        <p>Number of people</p>
        <input type="number" className="people" onChange={()=>{
          handlePeople(+e.target.value)
        }}/>
      </div>
    </div>
  );
};

export default LeftBox;
