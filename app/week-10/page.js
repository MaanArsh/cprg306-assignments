"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const HomePage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out of GitHub:", error);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      {user ? (
        <div>
          <h1 className="text-3xl font-bold">Welcome to the Shopping List</h1>
          <p className="mt-4">Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
          <Link href="/week-8/shopping-list">
            <div className="block mt-4 text-blue-500 hover:underline font-bold">Go to the Shopping List</div>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to the Shopping List</h1>
          <p className="mb-4">Please sign in to continue:</p>
          <button onClick={handleSignIn} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Sign in with GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;