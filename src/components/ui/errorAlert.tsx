import { Alert, AlertTitle } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Alert
        severity="error"
        icon={<ErrorOutlineIcon fontSize="inherit" />}
        className="w-full max-w-md"
      >
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </div>
  );
};

export default ErrorAlert;