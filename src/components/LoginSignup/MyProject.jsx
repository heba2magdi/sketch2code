import React, { useState, useEffect } from "react";
import "./MyProject.css";

const MyProject = () => {
  const [image, setImage] = useState(null);

  // Load image from local storage on component mount
  useEffect(() => {
    const storedImage = localStorage.getItem("projectImage");
    if (storedImage) {
      setImage(storedImage);
    }

    // Cleanup function to remove image from local storage on unmount
    return () => {
      localStorage.removeItem("projectImage");
    };
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setImage(imageData);
      // Store image data in local storage
      localStorage.setItem("projectImage", imageData);
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="projectContent">
      <h1>My Project</h1>
      <div className="display">
        
          <input type="file" onChange={handleImageUpload} />
          {image && <img src={image} alt="Uploaded" width="400" height="400" />}
          {image && (
            <button onClick={handleDownload} className="downloadButton">
              Download Code
            </button>
          )}

      </div>
      
    </div>
  );
};

export default MyProject;


///////////////////////////////////////////////////
// // MyProject.jsx
// import React, { useState } from "react";
// import "./MyProject.css";

// const MyProject = () => {

//     const [image, setImage] = useState(null);

//     const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//         setImage(reader.result);
//         };
//     reader.readAsDataURL(file);
//     };

//     return (
//         <div className="projectContent">

//             <h1>My Project</h1>
//             <input type="file" onChange={handleImageUpload} />
//             {image && <img src={image} alt="Uploaded" />}
//         </div>
//     );
// };

// export default MyProject;
