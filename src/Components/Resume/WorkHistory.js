import React from "react";
import Card from "react-bootstrap/Card";

import "../../Styles/WorkHistory.css"

const CurrentJob = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <a
              href="https://www.kenzie.academy/community/team-kenzie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Software Engineer Facilitator
            </a>
          </Card.Title>
          <Card.Subtitle>
            Kenzie Academy | Indianapolis | 07/2020-03/2021
            <br />
            Southern New Hampshire University | Indianapolis, IN | 03/21-Present
          </Card.Subtitle>
          <br />
          <Card.Text as="div">
            <ul>
              <li>
                In March of 2021,{" "}
                <a
                  href="https://www.snhu.edu/about-us/newsroom/2021/03/kenzie-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kenzie Academy of acquired by Southern New Hampshire
                  University
                </a>
              </li>
              <li>
                Roles and duties did not change but more responsibilities were
                added to make this process smooth for the students and Kenzie
                Academy as a whole.
              </li>
              <li>
                Responsibilities include taking in students from other
                facilitators as they were moved to different roles and providing
                insight and ideas for changes within the curriculum.
              </li>
              <li>
                Worked on a various teams to instruct a cohort of 100 students
                across the country.
              </li>
              <li>
                Primary focus was mentoring and guiding students through the
                topics of HTML, CSS, Javascript, Node.js, React.js, the
                Terminal, Git/Github, Python, and Django
              </li>
              <li>
                Helped students overcome various technical issues in both
                Windows and Mac OS
              </li>
              <li>
                Provided coding demos and walkthroughs to better explain the
                topics that students were struggling which were done either as
                1-1 or in front of my entire block of students.
              </li>
              <li>
                Daily tasks consisted of grading, attendance taking, daily
                stand-ups, debugging, and as well code reviews.
              </li>
              <li>
                Received feedback from students and engaged in curriculum
                planning for the coming weeks.
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const PreviousJob = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <a
              href="https://www.dockethq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineer Internship
            </a>
          </Card.Title>
          <Card.Subtitle>Docket | Indianapolis | 06/2020-07/2020</Card.Subtitle>
          <br />
          <Card.Text>
            <ul>
              <li>
                <p>Collaborated with the full time Software Engineering team while
                working entirely remote.</p>
              </li>
              <li>
                <p>Primary focus was backend development using Node.js and
                Javascript</p>
              </li>
              <li>
                <p>Created the process that allowed Docket to access Google
                Calendars and add the link to a virtual meeting to the users
                meeting agenda.</p>
              </li>
              <li>
                <p>By the end of the internship, Docket was able to grab links from
                BlueJeans, GoToMeetings, Microsoft Teams, and more where as
                before they were only able to grab Zoom and Google Hangout
                links.</p>
                
              </li>
              <li>
                <p>Internship was done concurrent with other part time jobs as a package Handling job at
                UPS as well as a Coaching job at Kenzie Academy.</p>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export {CurrentJob, PreviousJob};