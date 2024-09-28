import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ModuleCard from './ModuleCard';
import Progress from './Progress';

const Dashboard = ({ modules, user }) => {
  return (
    <div>
      <h1 className="text-center">Welcome, {user.name}!</h1>
      <Progress progress={user.progress} />
      <h2 className="mt-5">Available Modules:</h2>
      <Row>
        {modules.map(module => (
          <Col md={4} key={module._id} className="mb-4">
            <ModuleCard module={module} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
