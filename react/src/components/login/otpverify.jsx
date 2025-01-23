import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ResetOTP() {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [showResendButton, setShowResendButton] = useState(false);
  const navigate = useNavigate();

  const storedEmail = sessionStorage.getItem("email");
  const bearerToken = "your_bearer_token_here"; // Replace with your actual token

  useEffect(() => {
    if (storedEmail) {
      setEmail(storedEmail); // Automatically set the email if it's stored
    }

    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowResendButton(true);
    }
  }, [timer, storedEmail]);

  const handleKeyUp = (event, index) => {
    const key = event.key;
    if (key === "Backspace" || key === "ArrowLeft") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (/^[0-9a-zA-Z]$/.test(key) || key === "ArrowRight") {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleOtpChange = () => {
    const value = inputRefs.current.map((input) => input.value).join("");
    setOtp(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    // Define new API endpoints for resetPassword
    const candidateUrl = `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/resetPassword`;
    const adminUrl = `${import.meta.env.VITE_BASE_API_URL1}/api/admin/resetPassword`;
    const employerUrl = `${import.meta.env.VITE_BASE_API_URL1}/api/employer/resetPassword`;

    try {
        // Send both requests simultaneously for password reset
        const [adminResponse, candidateResponse,employerResponse] = await Promise.allSettled([
            axios.post(adminUrl, {
                email: email,
                otp: otp,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            }, {
                headers: { "Content-Type": "application/json" },
            }),
            axios.post(candidateUrl, {
                email: email,
                otp: otp,
                newPassword: newPassword,
                confirmPassword: confirmPassword,
            }, {
                headers: { "Content-Type": "application/json" },
            }),
            axios.post(employerUrl, {
              email: email,
              otp: otp,
              newPassword: newPassword,
              confirmPassword: confirmPassword,
          }, {
              headers: { "Content-Type": "application/json" },
          }),
        ]);

        // Handle admin response
        if (adminResponse.status === "fulfilled" && adminResponse.value.data.success) {
            toast.success("Admin password reset successfully!");
        } else if (adminResponse.status === "rejected") {
            toast.error("Admin password reset failed.");
        }

        // Handle candidate response
        if (candidateResponse.status === "fulfilled" && candidateResponse.value.data.success) {
            toast.success("Candidate password reset successfully!");
        } else if (candidateResponse.status === "rejected") {
            toast.error("Candidate password reset failed.");
        }
         // Handle candidate response
         if (employerResponse.status === "fulfilled" && employerResponse.value.data.success) {
          toast.success("employer password reset successfully!");
      } else if (employerResponse.status === "rejected") {
          toast.error("employer password reset failed.");
      }


        // Navigate to /success if at least one request succeeds
        if (
            (adminResponse.status === "fulfilled" && adminResponse.value.data.success) ||
            (candidateResponse.status === "fulfilled" && candidateResponse.value.data.success) ||
            (employerResponse.status === "fulfilled" && employerResponse.value.data.success)

        ) {
            navigate("/success");
        }

    } catch (error) {
        if (error.response && error.response.data) {
            const errorData = error.response.data;
            const errorMessage = errorData.message;

            setErrors(errorData.errors || {});
            toast.error(errorMessage);
        } else {
            console.error("Error occurred:", error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    } finally {
        setLoading(false);
    }
};


  const handleResendOTP = async () => {
    setLoading(true);
    setShowResendButton(false);
    setTimer(60);

    const isAdmin = sessionStorage.getItem("role") === "admin"; // Check if the role is admin
    const apiEndpoint = isAdmin
      ? `${import.meta.env.VITE_BASE_API_URL1}/api/admin/resendOtp`
      : `${import.meta.env.VITE_BASE_API_URL1}/api/candidate/resendOtp`
      || `${import.meta.env.VITE_BASE_API_URL1}/api/employer/resendOtp`;


    try {
      await axios.post(
        apiEndpoint,
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );

      toast.success("OTP resent successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        setErrors(error.response.data.errors || {});
        toast.error(errorMessage);
      } else {
        console.error("Error occurred:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="nk-body bg-white npc-default pg-auth">
      <div className="nk-app-root">
        <div className="nk-wrap nk-wrap-nosidebar">
          <div className="nk-content">
            <div className="nk-split nk-split-page nk-split-lg">
              <div className="nk-split-content nk-auth-container bg-white w-lg-45">
                <div className="nk-auth-body mt-4">
                  <div className="brand-logo justify-center pb-5">
                    <Link to="/" className="logo-link">
                      <img className="logo-img logo-img-lg" src={logo} alt="logo" />
                    </Link>
                  </div>
                  <h5 className="nk-block-title">OTP Verification</h5>
                  <p>Enter the OTP sent to your email/phone number.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="digit-group">
                      {[...Array(6)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          ref={(el) => (inputRefs.current[index] = el)}
                          onKeyUp={(e) => handleKeyUp(e, index)}
                          onChange={handleOtpChange}
                        />
                      ))}
                    </div>
                    <div className="form-group mt-4">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">
                      {loading ? "Submitting..." : "Confirm"}
                    </button>
                  </form>
                  {showResendButton && (
                    <button
                      className="btn btn-secondary mt-3"
                      onClick={handleResendOTP}
                      disabled={loading}
                    >
                      Resend OTP
                    </button>
                  )}
                  <p className="form-note-s2 pt-5">
                    <Link to="/">Return to login</Link>
                  </p>
                </div>
              </div>
              <div className="nk-split-stretch  bg-abstract"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetOTP;
