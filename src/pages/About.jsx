import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Sarah';
const jobTitle = 'FullStack Developer and Software QA Engineer';
const company = 'Google';
const mainDuty = 'Quality Assurance Analyst';
const jobLocation = 'NY, New York';
const briefJobDescription = 'Executing best practices in software test case development and requirement analysis.';
const careerObjective = 'To obtain an exciting and rewarding position in a dynamic organization where I can utilize my skills and experience to contribute to the growth and success of the company.';
const personalLife = 'I am passionate about the intersection of Tech, Real Estate and Wellness. This passion has led to hobbies where I get to explore these various interests.';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;