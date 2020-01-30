import React, { Fragment } from 'react';
const pratikphoto = require('./PratikNallamotu.jpg');
const computer = require('./code.jpg');

const AboutPratik = () => {
  return (
    <Fragment>
      <section className='aboutpratik'>
        <div className='landing-inner'>
          <h1 className='x-large'>PRATIK NALLAMOTU</h1>
          <h3>Student | Programmer</h3>
        </div>
      </section>
      <div id='aboutme'>
        <div className='container pratikcontainer' id='aboutmemargin'>
          <div className='row'>
            <div className='col-sm-4'>
              <h2 className='text-center'>About Me</h2>
              <img id='pratikimage' src={pratikphoto} alt='Pratik' />
            </div>
            <div className='col-sm-8'>
              <p>
                I am currently a third year Computer Science Major at Georgia
                Tech with concentrations in Intelligence and People. I chose to
                major in Computer Science because Computer Science is one big
                puzzle to me. Depending on the pieces used you can result in a
                different final result each time. Most of my experience comes
                from front-end development from the last two summers.
              </p>
              <p>
                Last Summer, I interned as an IT Programmer Intern at UPS
                working on two main projects. I was responsible for the design
                of the UPS Developer Portal. I also helped increase customer
                outreach by developing a Web App that allows customers to submit
                insurance claims directly online. I was responsible for the
                front-end development on this app and used Angular 7 throughout
                the project. I competed in the UPS Hackathon and developed an
                Android App that served two purposes. The first to minimize the
                number of misdelivered packages by using photo metadata and
                using reverse geocoding with the Google Maps API to verify that
                the package was dropped off at the correct location. The second
                purpose was to allow customers to view the location of their
                package in Google or Apple Maps. My results from this Hackathon
                was that I won Best Overall and Best Presentation. I was able to
                use software like Zeppelin that helped me design the web app as
                close as possible to the UI mockups that UX designer provided.
                Throughout the summer, I also practiced Agile and Scrum
                methodologies by participating in daily standups and using
                Microsoft TFS, which is a project management and collaborative
                software development tool.
              </p>
              <p>
                Two summers ago, I was able to combine my passions for
                Technology and Business. I was the Cofounder of a startup that
                was part of Georgia Tech’s Create-X program. The Create-X
                program is a startup accelerator that provides funding and
                mentoring to student led companies. I was responsible for front
                end design and Customer outreach. I gained a lot of experience
                from my time with the startup both technical and business. I was
                able to gauge feature and product specifications by talking to
                over 200 teachers that summer to understand the problems they
                face and the features they might want. In my time, I was able to
                understand what drives a business and how to adapt to certain
                challenges and situations that rise.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='pratikfrontendreason'>
        <h2 className='text-center '>
          Front-End Development and Why I love it...
        </h2>
        

        <div id="imagedivmargin"className='container pratikcontainer'>
          <div className='row'>
            <div className='col-md-4'>
              <img id='computerimage' src={computer} alt='Computer' />
            </div>
            <div className='col-md-8'>
              <p>
                One of the main reasons why I am passionate about front-end
                development is that it drives my need to be creative and
                constantly think with a new perspective. Depending on the user
                and target of the website, I am able to use different styles to
                appeal to a website’s user. Since front-end development is
                responsible for what the user sees and how they interact with
                the app, I enjoy being able to provide my own judgement and
                input as to what I think a user would enjoy and like to see.
                From my experience in a startup, I really enjoyed interacting
                with customers and understanding their perspective. That is why
                I enjoy front end development so much, as every decision made as
                a developer can impact the user/customer and help make their
                user experience smooth. With technologies like Npm, React, and
                Angular, GitHub it is much easier to be able to reuse and share
                code with team members. By using frameworks and libraries that
                are component-based development is accelerated and the user
                experience is more consistent. My goals are to become more
                experienced as a front-end developer, utilize my skillset to
                help build new products and solutions, and to deliver an
                organized and smooth user experience for customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='pratikexperience'>
        <div className='container pratikcontainer' id='experiencemargin'>
          <h2>
            Experience
          </h2>
          <div className='pratikexptimelinesection'>
            <div className='pratikexpicon'>
              <i className='fas fa-map-pin fa-2x mt-2'></i>
            </div>
            <span className='pratikexptimelinedate'>
              May 2019 - August 2019
            </span>
            <div className='pratikexptimelinecontent'>
              <h3>UPS Capital</h3>
              <h4>IT Programmer Intern</h4>
              <p>
                - Increased customer outreach by developing a Web App that
                allows customers to submit insurance claims directly online
              </p>
              <p>- Developed the UPS API developer portal using Azure</p>
              <p>
                - Engaged with managers and various code owners to design and
                develop a robust implementation of internship project
              </p>
              <p>
                - Worked in a collaborative team environment of 7 developers
                using many Agile and Scrum methodologies
              </p>
            </div>
          </div>
          <div className='pratikexptimelinesection'>
            <div className='pratikexpicon'>
              <i className='fas fa-map-pin fa-2x mt-2'></i>
            </div>
            <span className='pratikexptimelinedate'>
              Jan 2018 - August 2018
            </span>
            <div className='pratikexptimelinecontent'>
              <h3>Corbii</h3>
              <h4>Co-Founder/Developer</h4>
              <p>
                - Used Angular to develop a website that utilizes cognitive
                science to improve a student’s long-term retention of
                information
              </p>
              <p>
                - Managed a $20,000 budget given from Georgia Tech’s Create-X
                program
              </p>
              <p>
                - Met and discussed with over 200 teachers to help plan feature
                and product specifications
              </p>
              <p>
                - Built Client Relations by encouraging teachers to use the Beta
                version of Corbii
              </p>
              <p>- Led Market Strategy and Consumer Outreach</p>
              <p>
                - 1 of 30 startups to deliver pitch at Fox Theatre to potential
                investors
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='frontendreason'>
        <div id='pratikeducation'>
          <h2>
            Education
          </h2>
          <div className='pratikcontainer pratikeducationitem'>
            <h3 className='mt-3' id="edtextsmall">
              Georgia Institute of Technology <span>August 2017 - Present</span>
            </h3>
            <h4>Bachelor of Science in Computer Science</h4>
            <p>
              Threads: Intelligence and People
              <br />
              Relevant Courses:
              <br />
              - Intro to Computing
              <br />
              - Intro to Object-Oriented Programming
              <br />
              - Data Structures and Algorithms
              <br />
              - Objects and Design
              <br />
              - Computer Organization and Programming
              <br />
              - Intro to Artificial Intelligence
              <br />- Design and Analysis of Algorithms
            </p>
          </div>
        </div>
      </div>

      <div id='pratikskills'>
        <h2>Skills/Languages</h2>
        <ul>
          <li>Java</li>
          <li>Javascript</li>
          <li>Python</li>
          <li>Swift</li>
          <li>Node</li>
          <li>Angular</li>
          <li>React</li>
          <li>Android</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AboutPratik;
