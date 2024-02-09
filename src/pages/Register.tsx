import React, { useState } from "react";
import Navbar from "../components/Navbar";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  jobRole: string;
}

interface Errors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  jobRole?: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    jobRole: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined });

    if (name === "password") {
      if (value.length < 8) {
        setPasswordStrength("Weak");
      } else if (value.length >= 8 && value.length < 12) {
        setPasswordStrength("Medium");
      } else {
        setPasswordStrength("Strong");
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle registration API call here
      console.log("Submitted Form Data:", formData);
    }
  };

  const validateForm = (data: FormData): Errors => {
    const errors: Errors = {};

    if (!data.username) {
      errors.username = "Username is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } // Add more robust email validation if needed
    if (!data.password) {
      errors.password = "Password is required";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.jobRole) {
      errors.jobRole = "Job role is required";
    }

    return errors;
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register Now</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ... Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Choose a username" // Added placeholder
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            {/* ... Other Input Fields (email, name, jobRole - similar with placeholders) */}

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-gray-500 hover:text-blue-500"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
              {passwordStrength && (
                <p
                  className={`text-sm mt-1 ${
                    passwordStrength === "Weak"
                      ? "text-red-500"
                      : passwordStrength === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Password Strength: {passwordStrength}
                </p>
              )}
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
