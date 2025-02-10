import React from "react";

interface CardPropsInterface extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardParagraphPropsInterface
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardPropsInterface> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const CardTitle: React.FC<CardParagraphPropsInterface> = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return <p {...props}>{children}</p>;
};

const CardContent: React.FC<CardPropsInterface> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const CardFooter: React.FC<CardPropsInterface> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
export { Card, CardTitle, CardContent, CardFooter };
