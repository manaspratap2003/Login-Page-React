import { useLocation, useNavigate } from 'react-router-dom';

function Details() {
  const location = useLocation();
  const navigate  = useNavigate();
  const { name, email } = location.state || {};

  if (!name || !email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <p className="text-red-500 mb-4">No user data found. Please login first.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>

        <div className="mb-4">
          <span className="block text-sm font-medium text-gray-600">Name</span>
          <span className="block text-lg font-semibold">{name}</span>
        </div>

        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-600">Email</span>
          <span className="block text-lg font-semibold">{email}</span>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Details;
