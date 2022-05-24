import React from "react";
import Card from "react-bootstrap/Card";

import "../../Styles/WorkHistory.css";

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
            Kenzie Academy | Indianapolis, IN | 07/2020-03/2021
            <br />
            Southern New Hampshire University | Indianapolis, IN | 03/21-Present
          </Card.Subtitle>
          <br />
          <Card.Text as="div">
            <ul>
              <li>
                Provided assistance and leadership in planning integrations for
                programming curriculums across multiple teams
              </li>
              <li>
                Planned, scheduled, and instructed workshops and demonstrations
                regarding current topics from the curriculum
              </li>
              <li>
                Always demonstrated best practices for programming and skills
                needed in the technology industry
              </li>
              <li>
                Assisted individuals on an as-needed basis who felt like they
                needed further assistance
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
                <p>
                  Collaborated with the full time Software Engineering team
                  while working entirely remote.
                </p>
              </li>
              <li>
                <p>
                  Primary focus was backend development using Node.js and
                  Javascript
                </p>
              </li>
              <li>
                <p>
                  Created the process that allowed Docket to access Google
                  Calendars and add the link to a virtual meeting to the users
                  meeting agenda.
                </p>
              </li>
              <li>
                <p>
                  By the end of the internship, Docket was able to grab links
                  from BlueJeans, GoToMeetings, Microsoft Teams, and more where
                  as before they were only able to grab Zoom and Google Hangout
                  links.
                </p>
              </li>
              <li>
                <p>Internship was done concurrent with other jobs.</p>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export { CurrentJob, PreviousJob };
