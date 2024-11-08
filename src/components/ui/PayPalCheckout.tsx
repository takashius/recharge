import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Alert from './Alert';

interface PayPalCheckoutProps {
  amount: string;
}

const PayPalCheckout: React.FC<PayPalCheckoutProps> = ({ amount }) => {
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const initialOptions = {
    'clientId': import.meta.env.PAYPAL_CLIENT_ID,
    currency: 'USD'
  };

  return (
    <div className=" flex-col items-center justify-center bg-transparent">
      <PayPalScriptProvider options={initialOptions}>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {alert && <Alert type={alert.type} message={alert.message} />}
          <PayPalButtons
            createOrder={(data, actions) => {
              console.log(data)
              return actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                  {
                    amount: {
                      currency_code: 'USD',
                      value: amount,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              if (actions && actions.order) {
                return actions.order.capture().then(details => {
                  setAlert({ type: 'success', message: 'Payment approved successfully!' });
                  console.log('Payment approved:', details, data);
                });
              } else {
                setAlert({ type: 'error', message: 'An error occurred during payment capture.' });
                return Promise.reject(new Error('actions.order is undefined'));
              }
            }}
            onError={(error) => {
              setAlert({ type: 'error', message: 'An error occurred during the transaction.' });
              console.error('Error:', error);
            }}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalCheckout;

