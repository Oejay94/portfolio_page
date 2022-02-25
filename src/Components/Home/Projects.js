import React from "react";
import { Card } from "react-bootstrap";

const CSharpApp = () => {
  return (
    <Card>
      <Card.Header as="h3">C# App</Card.Header>
      <Card.Title>
        <a
          href="https://github.com/Oejay94/Console_Calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Console Calculator
        </a>
      </Card.Title>
    </Card>
  );
}

const PythonApp = () => {
  return (
    <Card>
      <Card.Header as="h3">Python App</Card.Header>
      <Card.Title>
        <a
          href="https://github.com/Oejay94/dirwatcher"
          target="_blank"
          rel="noopener noreferrer"
        >
          DirWatcher
        </a>
      </Card.Title>
    </Card>
  );
}

const ReactApp = () => {
  return (
    <Card>
      <Card.Header as="h3">React App</Card.Header>
      <Card.Title>
        <a
          href="https://oejay94.github.io/todo-app-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ToDo App
        </a>
      </Card.Title>
    </Card>
  );
}

export {CSharpApp, PythonApp, ReactApp };