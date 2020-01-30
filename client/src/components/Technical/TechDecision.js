import React, { Fragment } from 'react';

const TechDecision = () => {
  return (
    <Fragment>
      <section className='techdecision'>
        <div className='landing-inner'>
          <h1 className='x-large'>MY TECHNICAL DECISIONS</h1>
          {/* <div className='pratikcontainer techdecisioncontent'> */}
          <textarea class='scrollabletextbox'>
            Each tab of the web app first shows a full-screen size image with
            some text on the image that explains either the purpose of the
            website or the purpose of the current page the user is on. I did
            this because I wanted to take advantage of the trend of full-screen
            background images in UI design. I incorporated some of Zappos’s
            color schemes from the Zappos website to include some similarities
            between the two sites. I put the fun facts in a carousel so the user
            can scroll through at either their own pace or the automated pace,
            while also keeping the layout clean. The picture in the carousel is
            purposefully lighter in color because I wanted to give a contrasting
            effect. I included the jokes in cards that are collapsible so the
            user can try to guess the answer to the joke first before viewing
            the answer. In the about me page, I wanted to give a little more
            information than what was on my resume by stating my passions and
            drive to become a better front-end developer. I wanted to display my
            work experience in a systematic way that includes the dates and
            details, so I used a timeline to let the user know more about my
            work experience. I included mobile responsive styles to allow the
            user to be able to view my website at any point in the day, whether
            it is on their phone, tablet, or computer. I also made this
            technical decision box mobile responsive by making it scrollable.

            
            The framework I used to develop this website was React. The reason
            why I chose to use React was in case I wanted to add anything to the
            website that could easily be rendered or update the UI. I have
            previous experience with React that allowed me to be able to easily
            add the elements from React Bootstrap and add my own styles. Given
            the time to complete the challenge, React also gave me the
            flexibility to be able to work faster and smarter. React provides
            many benefits to development such as component creation, faster
            rendering, and the numerous libraries I can incorporate within my
            React Web App.
          </textarea>
          {/* </div> */}
        </div>
      </section>
      {/* <div className='frontendreason'>
        <div id='pratikeducation'>
          <h2>My Technical Decisions</h2>
          <div className='pratikcontainer pratikeducationitem'>
            <p>
              Each tab of the web app first shows a full-screen size image with
              some text on the image that explains either the purpose of the
              website or the purpose of the current page the user is on. I did
              this because I wanted to take advantage of the trend of
              full-screen background images in UI design. I incorporated some of
              Zappos’s color schemes from the Zappos website to include some
              similarities between the two sites. I put the fun facts in a
              carousel so the user can scroll through at either their own pace
              or the automated pace, while also keeping the layout clean. The
              picture in the carousel is purposefully lighter in color because I
              wanted to give a contrasting effect. I included the jokes in cards
              that are collapsible so the user can try to guess the answer to
              the joke first before viewing the answer. In the about me page, I
              wanted to give a little more information than what was on my
              resume by stating my passions and drive to become a better
              front-end developer. I wanted to display my work experience in a
              systematic way that includes the dates and details, so I used a
              timeline to let the user know more about my work experience. I
              included mobile responsive styles to allow the user to be able to
              view my website at any point in the day, whether it is on their
              phone, tablet, or computer.
            </p>
            <p>
              Each tab of the web app first shows a full-screen size image with
              some text on the image that explains either the purpose of the
              website or the purpose of the current page the user is on. I did
              this because I wanted to take advantage of the trend of
              full-screen background images in UI design. I incorporated some of
              Zappos’s color schemes from the Zappos website to include some
              similarities between the two sites. I put the fun facts in a
              carousel so the user can scroll through at either their own pace
              or the automated pace, while also keeping the layout clean. The
              picture in the carousel is purposefully lighter in color because I
              wanted to give a contrasting effect. I included the jokes in cards
              that are collapsible so the user can try to guess the answer to
              the joke first before viewing the answer. In the about me page, I
              wanted to give a little more information than what was on my
              resume by stating my passions and drive to become a better
              front-end developer. I wanted to display my work experience in a
              systematic way that includes the dates and details, so I used a
              timeline to let the user know more about my work experience. I
              included mobile responsive styles to allow the user to be able to
              view my website at any point in the day, whether it is on their
              phone, tablet, or computer.
            </p>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
export default TechDecision;
