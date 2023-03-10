import React from 'react'
import "./JoinMe.css";
import { FaGlobe, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
function JoinMe() {
  return (
    <>
      <div className='join-me-container'>
        <a href='https://github.com/Shivam-Katare' target="_blank" style={{ color: "white" }}><FaGithub /></a>
        <a href='https://www.linkedin.com/in/shivam-katare/' target="_blank" style={{ color: "#4b8ae3" }}><FaLinkedin /></a>
        <a href='https://www.showwcase.com/shivam-katare' target="_blank" style={{ color: "white" }}><FaGlobe /></a>
        <a href='https://mobile.twitter.com/Shivamkatare_27' target="_blank" style={{ color: "#19c9ff" }}><FaTwitter /></a>
      </div>
    </>
  )
}

export default JoinMe