import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Replace with your Stripe publishable key
const stripePromise = loadStripe('publishable_key_here');

// Add styling options for the card element
// Adding a dummy line
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      // Create PaymentMethod
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      // Log or use the paymentMethod.id as needed
      console.log('PaymentMethod ID:', paymentMethod.id);
      alert(`Payment Method created! ID: ${paymentMethod.id}`);
      
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <div style={{ 
        padding: '10px', 
        border: '1px solid #ccc', 
        borderRadius: '4px',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px 0 #e6ebf1',
        marginBottom: '20px'
      }}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      
      {errorMessage && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          {errorMessage}
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={!stripe || isLoading}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          width: '100%'
        }}
      >
        {isLoading ? 'Processing...' : 'Add Payment Method'}
      </button>
    </form>
  );
}

function SubscriptionCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default SubscriptionCheckout; 