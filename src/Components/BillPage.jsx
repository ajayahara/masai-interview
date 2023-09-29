import LeftBox from "./LeftBox";
import RightBox from "./RightBox";
import {useState} from "react"
const BillPage = () => {
  const [bill,setBill]=useState()
  const [tip,setTip]=useState(15);
  const [people,setPeople]=useState(1);
  const [tipAmount,setTipAmount]=useState(0);
  const [total,setTotal]=useState(0);


  const handleBill=(data)=>{
    setBill(data);
  }
  const handlePeople=(data)=>{
    setPeople(data);
  }
  const handleTip=(data)=>{
    setTip(data);
  }
  useEffect(()=>{
    const calTip=0;
    const total=0;
  },[bill,people,tip])
  return (
    <div className="billbox">
      {/* Add LeftBox and RightBox component here */}
      <LeftBox handleBill={handleBill} handlePeople={handlePeople} handleTip={handleTip} bill={bill} people={people}/>
      <RightBox handleBill={handleBill} handlePeople={handlePeople} handleTip={handleTip} tipAmount={tipAmount} total={total} people={people}/>
    </div>
  );
};

export default BillPage;
