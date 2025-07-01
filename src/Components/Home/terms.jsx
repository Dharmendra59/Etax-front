import React from "react";
// import "./TermsAndPolicy.css";
 // Optional: For your custom styles

export default function TermsAndPolicy() {
  return (
    <main className="terms-container" style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "2.4rem", marginBottom: "20px", color: "#0052cc" }}>
        Terms and Privacy Policy
      </h1>

      <p>
        Welcome to Quick Financial Services (“we”, “us”, or “our”). By accessing or using our website and services related to GST registration, income tax filing, and other financial solutions, you agree to comply with the following terms and policies.
      </p>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>1. Use of Services</h2>
        <p>
          You agree to use our services solely for lawful purposes. You must not use our platform to engage in any fraudulent or unlawful activity. All information you provide must be accurate, complete, and current.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>2. Confidentiality & Data Privacy</h2>
        <p>
          We respect your privacy. All personal and financial data shared with us, including PAN, Aadhaar, GST details, and contact information, is handled securely. We do not sell or share your information with third parties, except when required by law or to process your requests.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>3. Payment & Refund Policy</h2>
        <p>
          All fees for our services must be paid in full before processing begins. Refunds are considered only in cases of technical errors or non-delivery of services, subject to our review and approval.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>4. Limitation of Liability</h2>
        <p>
          Quick Financial Services will not be held liable for any incidental or consequential damages arising out of the use or inability to use our services. It is your responsibility to ensure that the information you provide is correct and submitted on time.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>5. Cookies & Tracking</h2>
        <p>
          Our website may use cookies to enhance user experience and track usage patterns. By using our website, you consent to our use of cookies.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>6. Changes to This Policy</h2>
        <p>
          We reserve the right to update or change these terms at any time. Changes will be posted on this page, and continued use of the website constitutes acceptance of the updated terms.
        </p>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#28a745" }}>7. Contact Us</h2>
        <p>
          For any questions about these terms or our privacy practices, please contact us at:
          <br />
          <strong>Email:</strong> etax@quickfinancialservices.org
          <br />
          <strong>Phone:</strong> +91-7905876982 
        </p>
      </section>
    </main>
  );
}
