import SubscriptionCheckout from './components/SubscriptionCheckout';

function App() {
  return (
    <div className="App" style={{ 
      padding: '20px',
      minHeight: '100vh',
      backgroundColor: '#f7f8f9'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Add Payment Method</h1>
      <SubscriptionCheckout />
    </div>
  );
}

export default App; 