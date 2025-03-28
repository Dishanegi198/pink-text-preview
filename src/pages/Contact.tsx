
import Layout from '@/components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Contact Us</h1>
          
          <div className="mb-8">
            <p className="text-muted-foreground mb-4">
              Have questions, feedback, or suggestions about our Barbie Font Generator? We'd love to hear from you!
            </p>
            <p className="text-muted-foreground">
              Please reach out to us at <span className="text-primary font-medium">support@barbiefontgenerator.online</span> and our team will get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-accent/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-primary">Email</h3>
                <p className="text-muted-foreground">support@barbiefontgenerator.online</p>
              </div>
              
              <div>
                <h3 className="font-medium text-primary">Our Response Time</h3>
                <p className="text-muted-foreground">We typically respond to inquiries within 24-48 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
