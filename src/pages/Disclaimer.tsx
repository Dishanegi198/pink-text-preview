
import Layout from "@/components/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Disclaimer</h1>
          
          <div className="prose prose-sm md:prose max-w-none">
            <h2>Website Disclaimer</h2>
            <p>
              The information provided by Barbie Font Generator on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            
            <h2>External Links Disclaimer</h2>
            <p>
              The site may contain links to external websites that are not provided or maintained by or in any way affiliated with Barbie Font Generator. Please note that Barbie Font Generator does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
            
            <h2>Errors and Omissions Disclaimer</h2>
            <p>
              The information given by Barbie Font Generator is for general guidance on matters of interest only. Even if Barbie Font Generator takes every precaution to ensure that the content of the website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the website.
            </p>
            
            <h2>Fair Use Disclaimer</h2>
            <p>
              Barbie Font Generator may use copyrighted material which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            <p>
              We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law. If you wish to use copyrighted material from this site for your own purposes that go beyond "fair use", you must obtain permission from the copyright owner.
            </p>
            
            <h2>Logos and Trademarks Disclaimer</h2>
            <p>
              All logos and trademarks of third parties referenced on the website are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of Barbie Font Generator by such owners.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us through the information provided on the website.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
