import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';

const EnglishProfileCard = () => {
  return (
    <div style={{
      border: '3px solid #D4AF37', 
      borderRadius: '15px',
      backgroundColor: '#fff', 
      fontFamily: 'Arial, sans-serif',
      direction: 'ltr',
      boxShadow: '0px 15px 40px rgba(212,175,55,0.2)',
      margin: '20px auto',
      lineHeight: '1.7',
      position: 'relative',
      maxWidth: '600px',
      padding: '20px'
    }}>
      
      {/* Profile Image at Top */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: '4px solid #D4AF37',
          margin: '0 auto',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
          padding: '3px',
          position: 'relative'
        }}>
          {/* Ripple Effect */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, rgba(212,175,55,0.3) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(26,71,42,0.2) 0%, transparent 35%)',
            animation: 'ripple 3s ease-in-out infinite',
            pointerEvents: 'none'
          }}></div>
          
          <img 
            src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1768281422/555555-pica_Copy_kawpaf.png" 
            alt="Haji Shabbir Ahmed Shigri" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
          />
        </div>
        
        {/* CSS for Ripple Animation */}
        <style jsx>{`
          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.4;
            }
            100% {
              transform: scale(1);
              opacity: 0.8;
            }
          }
        `}</style>
        
        {/* Name and Title */}
        <h1 style={{ 
          fontSize: '28px', 
          color: '#1a472a', 
          margin: '15px 0 5px 0',
          fontWeight: 'bold'
        }}>
          Haji Shabbir Ahmed Shigri
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          margin: '0',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          Senior Journalist, Researcher, Author and Producer
        </p>
      </div>

      {/* Main Content - Single Line Layout */}
      <div style={{
        background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '15px'
      }}>
        
        {/* Name */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Name:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Haji Shabbir Ahmed Shigri
          </span>
        </div>

        {/* Identity */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Identity:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Senior Journalist, Researcher, Author and Producer
          </span>
        </div>

        {/* Honors */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Honors:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            Khadim-e-Imam Reza (AS) Mashhad, and Khadim-e-Haram-e-Abbas (AS) Karbala.
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            Unique honor of being the first official representative of Astan Quds Razvi (Mashhad, Iran) in Pakistan.
          </span>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Education:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Government Degree College Skardu. MBA (Diploma in Business Administration) and Diploma in Electronics.
          </span>
        </div>

        {/* Positions */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Positions:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            Founder and President: Anjuman-e-Dosti Pakistan Iran (Nominated: Iranian Consul).
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            Retirement: Public Relation Officer, Khana Farhang Iran Lahore
          </span>
        </div>

        {/* Publications */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Publications:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Author of 7+ scholarly and literary books.
          </span>
        </div>
        
        {/* Editorship */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Editorship:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Editor of national and international academic journals, newspapers Daily Havi, Akth (Punjabi) and Prachar as Deputy Editor.
          </span>
        </div>

        {/* Column Writing */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Column Writing:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            300+ columns, articles and travelogues published in Daily Nawa-e-Waqt, Pakistan and Mashriq.
          </span>
        </div>
        
        {/* Founder */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Founder:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            Founder Noor-ul-Quran Project.CEO (CEO): Noor Productions.
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            Founder Pak Iran Ziyarati and Siyahi Tourism.
          </span>
        </div>
        
        {/* Media Career */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Media Career:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Senior Radio Broadcaster, TV Anchor Person and Producer.
          </span>
        </div>

        {/* Cultural and Diplomatic Services */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Cultural and Diplomatic Services:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Expert in Cultural Affairs: 25 years of long academic and cultural services at Khana Farhang Iran, Lahore.
          </span>
        </div>

        {/* Awards */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Awards:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            "Taqdeer Nama" (Astan Quds Razvi), Sada-e-Ghazi Award, Gold Medalist, and 50+ national and international awards.
          </span>
        </div>
        
        {/* Titles */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            Titles:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            Khadim-e-Saqalain, Cultural Expert.
          </span>
        </div>

      </div>

      {/* Footer Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1a472a, #2d5a3c)',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center'
      }}>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          paddingTop: '10px',
          fontSize: '14px'
        }}>
          <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <FaEnvelope style={{ color: '#D4AF37', flexShrink: 0 }} size={18} aria-hidden />
            <a 
              href="mailto:shigri51214@gmail.com" 
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => { e.target.style.textDecoration = 'underline'; }}
              onMouseOut={(e) => { e.target.style.textDecoration = 'none'; }}
            >
              shigri51214@gmail.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <FaGlobe style={{ color: '#D4AF37', flexShrink: 0 }} size={18} aria-hidden />
            <a 
              href="http://www.shabbirshigri.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => { e.target.style.textDecoration = 'underline'; }}
              onMouseOut={(e) => { e.target.style.textDecoration = 'none'; }}
            >
              www.shabbirshigri.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EnglishProfileCard;
