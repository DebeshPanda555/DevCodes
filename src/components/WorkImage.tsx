import React from "react";

interface WorkImageProps {
  image: string;
  alt: string;
}

const WorkImage: React.FC<WorkImageProps> = ({ image, alt }) => {
  return <img src={image} alt={alt} className="work-image" />;
};

export default WorkImage;