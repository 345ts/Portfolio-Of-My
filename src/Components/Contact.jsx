import React, { useState, useRef } from 'react';
import Section from './Section';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_cyjh1rc', // Service ID
        'template_84icvkj', // Template ID
        formRef.current,
        'iySXl-DEYuMB7guNv' // Public Key
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus({
            type: 'success',
            msg: 'Intelligence Received. I will reach out shortly.',
          });
          e.target.reset();
          setTimeout(() => setStatus({ type: '', msg: '' }), 5000);
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error);
          setStatus({
            type: 'error',
            msg: `Transmission failed: ${error.text}`,
          });
        }
      ); // One closing brace for .then
  }; // One closing brace for sendEmail

  const socialCls =
    'p-3 rounded-xl bg-[#f0f0f0] border border-[#b0b0b0] text-[#707070] hover:text-[#333333] hover:border-[#333333] transition-all';
  const fieldCls =
    'w-full p-4 bg-[#f0f0f0] border border-[#b0b0b0] rounded-xl text-[#333333] focus:border-[#333333] transition-all outline-none';
  const labelCls =
    'text-[10px] uppercase font-bold tracking-widest text-[#707070] ml-1';

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact"
      side={
        <div className="flex gap-4">
          <a href="https://github.com/345ts" className={socialCls}>
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tsionfk30"
            className={socialCls}
          >
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:tsionfikre385@gmail.com" className={socialCls}>
            <FaEnvelope size={20} />
          </a>
        </div>
      }
    >
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6 max-w-2xl">
        <div className="space-y-2">
          <label className={labelCls}>Name</label>
          <input
            type="text"
            name="tsion" // Must match EmailJS Template {{from_name}}
            required
            className={fieldCls}
          />
        </div>

        <div className="space-y-2">
          <label className={labelCls}>Email</label>
          <input
            type="email"
            name="tsionfikre385@gmail.com" // Must match EmailJS Template {{from_email}}
            required
            className={fieldCls}
          />
        </div>

        <div className="space-y-2">
          <label className={labelCls}>Message</label>
          <textarea
            name="message " // Must match EmailJS Template {{message}}
            rows="5"
            required
            className={`${fieldCls} resize-none`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`px-10 py-4 font-black uppercase tracking-[0.2em] text-xs rounded-xl transition-all ${
            loading
              ? 'bg-[#b0b0b0] text-[#707070]'
              : 'tile-solid hover:shadow-[0_8px_24px_rgba(51,51,51,0.25)]'
          }`}
        >
          {loading ? 'Transmitting...' : 'Send Message'}
        </button>

        {status.msg && (
          <p
            className={`text-[10px] uppercase tracking-widest font-bold ${
              status.type === 'success' ? 'text-[#333333]' : 'text-red-600'
            }`}
          >
            {status.msg}
          </p>
        )}
      </form>
    </Section>
  );
};

export default Contact;