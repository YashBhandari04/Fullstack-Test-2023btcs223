import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const ContactContext = createContext();
export const UseContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const submitContact = async (formData) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/contact", formData);
      toast.success("Message sent successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider value={{ submitContact, loading }}>
      {children}
    </ContactContext.Provider>
  );
};
