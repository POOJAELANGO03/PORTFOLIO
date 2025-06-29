import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title text-gradient">Get In Touch</h2>
          <p className="section-subtitle">Big ideas often start small—like a simple 'Hi'</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <motion.div className="contact-card glass glow">
              <h3>Let's Connect</h3>
              <p>Whether it’s shaping bold ideas or geeking out on design, I’m just one message away.</p>
              <div className="contact-methods">
                {[{
                  title: 'Email',
                  value: 'poojaelango03@gmail.com',
                  link: 'mailto:poojaelango03@gmail.com',
                  icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                }, {
                  title: 'Phone',
                  value: '+919363090781',
                  link: 'tel:+919363090781',
                  icon: <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                }, {
                  title: 'Location',
                  value: 'Thindal, Erode',
                  link: '',
                  icon: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                }].map((method) => (
                  <div key={method.title} className="contact-method">
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">{method.icon}</svg>
                    </div>
                    <div className="method-info">
                      <h4>{method.title}</h4>
                      {method.link ? (
                        <a href={method.link}>{method.value}</a>
                      ) : (
                        <span>{method.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <form className="contact-form glass glow" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              {['name', 'email', 'subject', 'message'].map((field) => (
                <div className="form-group" key={field}>
                  <label htmlFor={field}>
                    {field === 'name' ? 'Full Name' :
                      field === 'email' ? 'Email Address' :
                        field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={(formData as any)[field]}
                      onChange={handleInputChange}
                      required
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    />
                  ) : (
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                    ></textarea>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <div className="status-message success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="status-message error">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
