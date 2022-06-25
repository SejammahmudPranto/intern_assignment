import React from 'react';
import SuccessStory from '../successStory/SuccessStory';
import "./homeSection4.css";
import pathaoimg from "../../assets/pathaopic.png";
import pathaoicon from "../../assets/pathaoicon.png";
import feludapic from "../../assets/feludapic.png";
import feludaicon from "../../assets/feludaicon.png";
import edithpic from "../../assets/edithpic.png";
import edithicon from "../../assets/edithicon.png";

const HomeSection4 = () => {
  return (
    <div className='success-stories'>
        <p className='success-stories_p'>SUCCESS STORIES</p>
        <h3>How Brands are Collaborating with Influencers on HypeScout</h3>
        <div className='stories'>
            <SuccessStory image={pathaoimg} icon={pathaoicon} para={"Content creators got access to Pathao through HypeScout, and with a data-driven approach it was a win win for everyone. "}/>

            <SuccessStory image={feludapic} icon={feludaicon} para={"50 micor-influencers collaboratedwith Addatimes Bangladesh to provide authetic review on FeludaPherot web series"}/>

            <SuccessStory image={edithpic} icon={edithicon} para={"Content creators got access to Pathao through HypeScout, and with a data-driven approach it was a win win for everyone."}/>
        </div>
    </div>
  )
}

export default HomeSection4;