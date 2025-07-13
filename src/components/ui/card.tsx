import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white rounded shadow">{children}</div>
);

export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => <div className={className}>{children}</div>;
