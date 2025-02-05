# Stripe Payment Integration Demo 💳

A simple React application demonstrating Stripe Elements integration for collecting payment method details. This project provides a clean, user-friendly interface for capturing credit card information using Stripe's secure elements.

## 🚀 Features

- Clean, modern UI for credit card input
- Real-time card validation
- Secure payment method creation using Stripe Elements
- Responsive design
- Error handling and loading states

## 🛠️ Technologies Used

- React
- Stripe Elements
- @stripe/stripe-js
- @stripe/react-stripe-js

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stripe-payment-demo.git
cd stripe-payment-demo
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Stripe publishable key:
```env
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

4. Start the development server:
```bash
npm start
```

## 🧪 Testing

You can test the payment form using Stripe's test card numbers:

- Card number: `4242 4242 4242 4242`
- Expiry date: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## 📝 Usage

The payment form component can be imported and used in any React application:

```jsx
import SubscriptionCheckout from './components/SubscriptionCheckout';

function App() {
  return (
    <div>
      <SubscriptionCheckout />
    </div>
  );
}
```

## 🔒 Security Notes

- Never commit your Stripe secret key
- Always use environment variables for sensitive data
- Process actual payments only on the server side
- Use HTTPS in production

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/otraasi/stripe-payment-demo/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

Your Name
- GitHub: [@vreddhi](https://github.com/otraasi)