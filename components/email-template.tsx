import * as React from "react";

// interface EmailTemplateProps {
//   fullName: string;
//   email: string;
//   subject?: string;
//   phonenumber: string;
//   message?: string;
// }
///: React.FC<Readonly<EmailTemplateProps>>
export const EmailTemplate = ({
  fullName,
  email,
  subject,
  phonenumber,
  message,
}) => (
  <div>
    <div className=" flex flex-col">
      <h1>Hello Mr. Solomon Rufus Jeffrey,</h1>
      <h3>Someone tried to contact you through your official website.</h3>
      <h3>Here is the Details.</h3>
      <p className="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">
        Full Name: {fullName}
      </p>
      <p className="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">
        Email: {email}
      </p>
      <p className="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">
        Phone Number: {phonenumber}
      </p>
      {subject != null ? (
        <p className="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">
          Subject: {subject}
        </p>
      ) : null}

      {message != null ? (
        <p className="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">
          Message: {message}
        </p>
      ) : null}
    </div>
  </div>
);
