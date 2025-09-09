import React from 'react';

const About = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About the Digital Guidance Platform</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <p>
          This platform was created to address a significant challenge: the decline in student enrollment in government degree colleges. Many students lack awareness about the importance of graduation, the variety of courses available, and the career opportunities that follow.
        </p>
        <p>
          Our mission is to provide clear, accessible, and comprehensive guidance to students after Class 10 and 12. We aim to empower them to make informed decisions about their future.
        </p>
        <h2 className="text-2xl font-bold pt-4">How to Contribute</h2>
        <p>
          This is an open-source project, and we welcome contributions from the community. Whether you're a developer, a designer, or an education expert, you can help us improve the platform.
        </p>
        <p>
          To contribute, please visit our GitHub repository, check the open issues, and feel free to submit a pull request. We believe that with a collaborative effort, we can build a tool that makes a real difference in students' lives.
        </p>
      </div>
    </div>
  );
};

export default About;
