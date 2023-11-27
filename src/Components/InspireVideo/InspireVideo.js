import './InspireVideo.scss';
// import videoData from "../../data/inspire.json"

// Create the Header Component
const InspireVideo = ({videoData, stillNeed}) => {

    const imgSrc = `https://img.youtube.com/vi/${videoData.video}/mqdefault.jpg`

    // const stillNeed = "🧈margarine, 🍞white bread"

    return (
        <a className='inspireVideo' href={videoData.link}>
            <img src={imgSrc} className='inspireVideo__image'></img>

            <div className='inspireVideo__content'>
                <span className='inspireVideo__title'>{videoData.food}</span>
                
                <span>You might also need...</span>
                <span>{stillNeed}</span>
            </div>
            
        </a>
    );
};
  
export default InspireVideo;