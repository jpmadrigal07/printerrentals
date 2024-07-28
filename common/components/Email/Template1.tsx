import * as React from 'react';
// If you want to customize the html tags, we need to use https://react.email/docs/introduction package

interface EmailTemplateProps {
  firstName: string;
}

const Template1: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export default Template1;