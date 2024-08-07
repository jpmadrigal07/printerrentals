import * as React from "react";
// If you want to customize the html tags, we need to use https://react.email/docs/introduction package

interface EmailTemplateProps {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  comment: string;
  website: string;
}

export const EmailTemplate = ({
  name,
  email,
  phoneNumber,
  message,
  comment,
  website,
}: EmailTemplateProps) => (
  <div>
    {name && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Name:</span> {name}
      </h3>
    )}
    {email && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Email:</span> {email}
      </h3>
    )}
    {phoneNumber && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Phone Number:</span>{" "}
        {phoneNumber}
      </h3>
    )}
    {message && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Message:</span> {message}
      </h3>
    )}
    {comment && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Comment:</span> {comment}
      </h3>
    )}
    {website && (
      <h3>
        <span style={{ fontWeight: "normal" }}>Website:</span> {website}
      </h3>
    )}
  </div>
);