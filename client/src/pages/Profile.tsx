import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Harshitha N",
    email: "harshitha@example.com",
    phone: "+91 98765 43210",
    initials: "HN",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-10 space-y-8 text-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-pink-500 text-white flex items-center justify-center text-3xl font-bold shadow-md">
            {user.initials}
          </div>
        </div>

        {/* User Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Details Card */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-4 text-left">
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-base font-medium text-gray-800">{user.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-base font-medium text-gray-800">{user.email}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => alert("Edit feature coming soon!")}
            className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Edit Profile
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 text-sm text-gray-600 hover:underline"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
