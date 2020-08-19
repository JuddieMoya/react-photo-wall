import React, { useState,useEffect } from "react";
import "./App.css";

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";


function App(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(PHOTO_LIST_URL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPhotos(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }  
 
  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received

    return (
      <React.Fragment>
        <header>
          <h1>Photo Wall</h1>

        </header>
        <div className="collage">
        
          {photos.map(photo => (
            <img
            alt={`${photo.filename}`}
            key={`${photo.id}`}
            src={PHOTO_URL(photo.id)}

            />
          ))}
        </div>
      </React.Fragment>
    );
  }


export default App;
