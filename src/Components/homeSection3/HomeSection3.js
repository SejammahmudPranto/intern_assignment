import React from 'react'
import Steps from '../steps/Steps'
import "./homeSection3.css";
import icon1 from "../../assets/iconAccount.png";
import icon2 from "../../assets/iconBrand.png";
import icon3 from "../../assets/iconTask.png";
import icon4 from "../../assets/iconPaid.png";
import TransparentButton from '../transparentButton/TransparentButton';

const HomeSection3 = () => {
  return (
    <div className='collaboration'>
            <h2>Collaborate with Brands & Get Paid</h2>
            <p className='collaboration_p'>4 Simple Steps</p>
            <div className='steps'>
                <Steps image={icon1} alttext={"account icon"} header={"Create an Acount"} para={"Click on the Get Started button above to sign up for a free account"}/>
                <Steps image={icon2} alttext={"brand icon"} header={"Collab with Brands"} para={"Participate from availaible campaigns, find the brands relevant to your niche"}/>
                <Steps image={icon3} alttext={"Task icon"} header={"Submit Tasks"} para={"After participating in a campaign, submit the report from your dashboard "}/>
                <Steps image={icon4} alttext={"Paid icon"} header={"Get Paid!"} para={"After the Brand verifies your task, you will be paid  on the next disbursment date "}/>
            </div>
            <TransparentButton text={"Join as Influencer"}/>
    </div>
  )
}

export default HomeSection3;