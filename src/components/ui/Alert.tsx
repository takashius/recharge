import React from 'react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  return (
    <div
      className={`${type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'
        } border px-4 py-3 my-4 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">{type === 'success' ? 'Success! ' : 'Error! '}</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;
