import React from "react";
import "./Certificates.css";

const certificates = [
          {
    title: "Cerification of completion to intership",
    issuedBy: "BlackBucks",
    date: "july-aug  2024",
    image: "/ceritificates/intership.png", 
    link: "https://drive.google.com/file/d/1JCFE4lT2KMMRrXDRJqUvNlScuxhH9tol/view?usp=sharing"
  },
      {
    title: "Python for DataScience",
    issuedBy: "Nptel",
    date: "jan - feb 2024",
    image: "/ceritificates/Nptel.png", 
    link: "https://drive.google.com/file/d/1fd28ZOseh4vpcMPVXvJHlBwQaiCXcvd6/view?usp=sharing"
  },
  {
    title: "AWS Cloud Foundations",
    issuedBy: "AWS Academy",
    date: "March 19 2025",
    image: "/ceritificates/aws-cloud-foundations.png", 
    link: "https://drive.google.com/file/d/1uAauVDOGwjPxHHI26-gCXxQ4Ycj9zSeF/view?usp=sharing"
  },
  {
    title: "AWS Data Enginnering",
    issuedBy: "AWS Academy",
    date: "March 19 2025",
    image: "/ceritificates/aws-data-enginnering.png",
    link: "https://drive.google.com/file/d/1qUDIMlXEmbXzJ3jTEbRBeXIv0GLb4GEx/view?usp=sharing"
  },
  {
    title: "Introduction to DataScience",
    issuedBy: "EDX",
    date: "July 20 2024",
    image: "/ceritificates/introduction-DS.png", 
    link: "https://drive.google.com/file/d/10KIM4UALVlbDhZIXAp2jLZwNkb_6sn7w/view?usp=sharing"
  },
    {
    title: "Battle of Wits",
    issuedBy: "Language Nest club",
    date: "May 2 2024",
    image: "/ceritificates/battle-of-wits.png", 
    link: "https://drive.google.com/file/d/1JAWrVFsKkzle-4R6is2R0qZ8VUYpo0x0/view?usp=sharing"
  },
    {
    title: "Machine Learning Connect",
    issuedBy: "Association of Computer Enginners",
    date: "feb 2 2024",
    image: "/ceritificates/ml-connect.png", 
    link: "https://drive.google.com/file/d/1fauDJ0Ld2IN8kKb3BSMZUGTIq4F8Fk8P/view?usp=sharing"
  },
      {
    title: "Java fundamentals",
    issuedBy: "EDX",
    date: "july 20 2024",
    image: "/ceritificates/java-fundamentals.png", 
    link: "https://drive.google.com/file/d/1BmDJ9eZ-dQtI2CL8v2TYS86SG_iUWOyQ/view?usp=sharing"
  },
];

const Certificates = () => {
  return (
    <div className="certificates-section">
      <h2 className="section-title">My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-img" />
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p><strong>Issued by:</strong> {cert.issuedBy}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <a href={cert.link} className="btn" target="_blank" rel="noreferrer">
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
