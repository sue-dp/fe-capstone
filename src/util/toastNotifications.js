import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const messageSentToast = () => {
  toast.success(
    <div className="message-sent-toast">Your Message Has Been Sent</div>,
    {
      hideProgressBar: true,
      autoClose: 2000,
      position: "top-left",
    }
  );
};

export const successfulToast = (message) => {
  toast.success(<div className="successful-toast">{message}</div>, {
    hideProgressBar: true,
    autoClose: 2000,
    position: "top-left",
  });
};

export const errorToast = (message) => {
  toast.error(<div className="error-toast">{message}</div>, {
    hideProgressBar: true,
    autoClose: 3000,
    position: "top-left",
  });
};
