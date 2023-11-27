import './InspireVideoList.scss';
import inspireData from "../../data/inspire.json"
import InspireVideo from '../InspireVideo/InspireVideo';
import { sortBy } from '../../util/formatter';
import { useEffect, useState } from 'react';

// Create the Header Component


const InspireVideoList = ({selectedIngredient}) => {

    for (let i = 0; i < inspireData.length; i++){
        inspireData[i]["currCount"] = 0;
        inspireData[i]["stillNeeds"] = "";
    }
    const [sortedVideos, setSortedVideos] = useState(inspireData)

    function findMissingItem(){

        let inspireData2 = structuredClone(inspireData);

        for (let i = 0; i < inspireData.length; i++){
            let currCount = 0
            let stillNeeds = []
            for (let j = 0; j < inspireData[i].ingredients.length; j++){
                if (selectedIngredient.includes(inspireData[i].ingredients[j])){
                    currCount += 1;
                } else {
                    stillNeeds.push(`${inspireData[i].icons[j]} ${inspireData[i].ingredients[j]}`)
                }
            }
            inspireData2[i]["currCount"] = currCount;
            inspireData2[i]["stillNeeds"] = stillNeeds;
        }

        return sortBy(inspireData2, "currCount", false);
    }

    useEffect(()=>{
        setSortedVideos(findMissingItem())
    }, [selectedIngredient])


    if (selectedIngredient.length > 0){
        console.log(sortedVideos)
        return (
            <div className="container">
                {sortedVideos.map((item) => (
                    <InspireVideo videoData={item} stillNeed={`${item["stillNeeds"][0]} ${item["stillNeeds"][1]}`}/>
                ))}
            </div>
        );
    } else {
        return <></>
    }

    
};
  
export default InspireVideoList;