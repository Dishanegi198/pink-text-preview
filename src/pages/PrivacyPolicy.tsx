
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
          
          <div className="prose prose-sm md:prose max-w-none">
            <p>
              Welcome to the Barbie Font Generator Privacy Policy. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              When you visit the website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information that we collect generally to:
            </p>
            <ul>
              <li>Provide and maintain our website's functionality</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
            </ul>

            <h2>Sharing Your Personal Information</h2>
            <p>
              We do not share your Personal Information with third parties except as described in this Privacy Policy. We may share your Personal Information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.
            </p>
            
            <h2>Do Not Track</h2>
            <p>
              We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              When you use our website, we will maintain your data for our records unless and until you ask us to delete this information.
            </p>
            
            <h2>Changes</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail or by using the contact information provided on the website.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
