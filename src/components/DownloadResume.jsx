import { FaDownload } from "react-icons/fa";
import resume from "../assets/2024 Sarah Bankole IT resume.docx.pdf"

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
  <a href={resume} download="Sarah Bankole_Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume