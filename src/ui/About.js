import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    
    const images = require.context('../img/team/', false, /\.(png|jpe?g|svg)$/);

    const imagePaths = images.keys().reduce((paths, path) => {
      const imageName = path.replace('./', ''); // Remove './' from the key
      paths[imageName] = images(path); // Add the image to the object
      return paths;
    }, {});

    const teamMembers = [
      {
        name: 'Dr. Jyoti Rao',
        designation: 'Co-Founder & CEO',
        description: 'null',
        linkedin: 'https://www.linkedin.com/in/dr-jyoti-dongre-rao-11520726/',
        image: imagePaths['Jyoti.png'],
      },
      {
        name: 'Ms. Marilyn Olivera',
        designation: 'Director Clinical Education and Operations',
        description: 'null',
        linkedin: 'https://www.linkedin.com/in/janesmith',
        image: imagePaths['Marilyn.jpeg'],
      },
      {
        name: 'Mr. Poornesh Shetty',
        designation: 'Associate Director-Health and Wellbeing',
        description: 'null',
        linkedin: 'https://www.linkedin.com/in/marktaylor',
        image: imagePaths['Poornesh.jpeg'],
      },
      {
         name: 'Mr. Dinesh Kamble',
         designation: 'Board of Director',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/dinesh-k-a409a06b/',
         image: imagePaths['Dinesh.jpeg'],
       },
       {
         name: 'Mr. Pravin Nimbolkar',
         designation: 'Board of Director',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Pravin.jpeg'],
       },
       {
         name: 'Ms. Vinita Deopurkar',
         designation: 'Associate - Clinical Education',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Vinita.jpeg'],
       },
       {
         name: 'Mr. Vishnu Thangaraj',
         designation: 'Associate - Social Media and Branding',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Vishnu.jpeg'],
       },
       {
         name: 'Mr. Sajin Santhosh',
         designation: 'Businesss Development Analyst',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Sajin.jpeg'],
       },
       {
         name: 'Mr. Abdul Sheikh',
         designation: 'Businesss Development Analyst',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/abdul-sheikh-203522a5/',
         image: imagePaths['Abdul.jpeg'],
       },
       {
         name: 'Mr. Sahil Choure',
         designation: 'Businesss Development Analyst',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/sahil-choure-11o02/',
         image: imagePaths['no-image.jpeg'],
       },
       {
         name: 'Mr. Huzaif Shaikh',
         designation: 'Businesss Development Analyst',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Huzaif.jpg'],
       },
       {
         name: 'Ms. Aryaa Praseed',
         designation: 'Businesss Development Analyst',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Aryaa.jpeg'],
       },
       {
         name: 'Mr. Shradha Mishra',
         designation: 'Businesss Development Analyst',
         description: 'null',
         linkedin: 'https://www.linkedin.com/in/marktaylor',
         image: imagePaths['Shradha.jpeg'],
       }
    ];

    const collaboratorMembers = [
      {
        name: 'Mr. Bipinkumar Rathod',
        designation: 'Independent Director',
        description: 'null',
        linkedin: 'https://www.linkedin.com/in/bipinkumar-rathod-b900b414/',
        image: imagePaths['Bipin.jpeg'],
      },
      {
        name: 'Mrs. Madhavi Chikhale',
        designation: 'Independent Director',
        description: 'null',
        linkedin: 'https://www.linkedin.com/in/madhavi-chikhale-914a1224/',
        image: imagePaths['Madhavi.jpeg'],
      },
    ];

  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Our Story</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p>At JVEDTECH, we are dedicated to advancing the standards of healthcare through our tailored educational services and cutting-edge solutions. Our commitment to learning and development drives</p>
                  <p>our mission to adapt and excel in the dynamic healthcare landscape. JVEDTECH started with the vision of bringing high-quality medical services directly to individuals within the comfort of their homes.</p>
                  <p>This focus on home healthcare reflects our core value of accessibility and patient-centric care.</p>
                  <p>JVEDTECH has successfully served a wide range of clients, including healthcare institutions, professionals, and individuals. Our client-focused approach has enabled us to build lasting relationships and make a meaningful impact in the industry.</p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>To Enabling innovative solutions.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>Provide need based healthcare solutions and medical education</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p> We Focus on Quality and Innovation</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Meet Our Talented Team</h2>
               <p>Our passionate and dedicated team brings together a diverse range of skills and expertise to deliver exceptional results. From creative visionaries to meticulous strategists, we work seamlessly together to meet and exceed our clients’ expectations.</p>
            </div>
           
            <div className="row team-section ">
               {teamMembers.map((member, index) => (
               <div className="col-md-4 text-center d-flex flex-column align-items-center mb-4" key={index}>
                  <div className="pic mb-3">
                     <img src={member.image} className="img-fluid rounded-circle" alt={member.name} style={{ width: '250px', height: '250px' }} />
                  </div>
                  <div className="member-info">
                     <h4>{member.name}</h4>
                     <span>{member.designation}</span>
                     <div className="social mt-2">
                     <Link to={member.linkedin} target="_blank" className="mx-2">
                        <i className="bi bi-linkedin"></i>
                     </Link>
                     </div>
                  </div>
               </div>
               ))}
            </div>
         </div>
      </section>
      {/* external Collaborator section */}
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Independent Directors</h2>
               <p>Guiding us with their vast experience and strategic insights, our independent directors provide invaluable leadership and governance. Their expertise ensures our commitment to excellence, integrity, and sustainable growth.</p>
            </div>
           
            <div className="row team-section ">
               {collaboratorMembers.map((member, index) => (
               <div className="col-md-4 text-center d-flex flex-column align-items-center mb-4" key={index}>
                  <div className="pic mb-3">
                     <img src={member.image} className="img-fluid rounded-circle" alt={member.name} style={{ width: '250px', height: '250px' }} />
                  </div>
                  <div className="member-info">
                     <h4>{member.name}</h4>
                     <span>{member.designation}</span>
                     <div className="social mt-2">
                     <Link to={member.linkedin} target="_blank" className="mx-2">
                        <i className="bi bi-linkedin"></i>
                     </Link>
                     </div>
                  </div>
               </div>
               ))}
            </div>
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About