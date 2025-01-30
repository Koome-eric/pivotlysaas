import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pivotly",
  description: "This is Contact Page for Pivotly",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get In Touch"
        description="Your feedback, inquiries, and suggestions matter to us. Whether you're seeking more information about our services, have an issue to report, or simply want to chat, we’re here to listen."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
