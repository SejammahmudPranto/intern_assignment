import React from 'react'
import "./homeSection2.css";
import story from "../../assets/storygif.gif";
import vector from "../../assets/Vector.png";
import storyimg from "../../assets/storyimage.png";

const HomeSection2 = () => {
  return (
    <div className='story'>
        <div className='story_img'>
            <img src={story} alt='story'/>
        </div>
        <div className='story_content'>
            <div className='story_innerdiv'>
                <div className='stars'>
                    <img src={vector} alt="vector"/>
                    <img src={vector} alt="vector"/>
                    <img src={vector} alt="vector"/>
                    <img src={vector} alt="vector"/>
                    <img src={vector} alt="vector"/>
                </div>
                <div className='story_innerdiv_content'>
                    <p>Beacuase of HypeScout I got brand works like Addatimes Bangladesh, Pathao, Cococart and so on.
                    </p>
                    <div className='story_innerdiv_details'>
                        <img src={storyimg} alt='Nodi Chowdhury'/>
                        <div className='story_innerdiv_details_div'>
                            <h4>Nodi Chowdhury</h4>
                            <p>Fashion Content Creator</p>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection2;

