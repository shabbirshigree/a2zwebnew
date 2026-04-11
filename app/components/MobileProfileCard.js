import React from 'react';

const MobileProfileCard = () => {
  return (
    <div style={{
      border: '3px solid #D4AF37', 
      borderRadius: '15px',
      backgroundColor: '#fff', 
      fontFamily: 'Jameel Noori Nastaleeq, serif',
      direction: 'rtl',
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
            alt="حاجی شبیر احمد شگری" 
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
          حاجی شبیر احمد شگری
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#666', 
          margin: '0',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          سینیئر صحافی، محقق، مصنف اور پروڈیوسر
        </p>
      </div>

      {/* Main Content - Single Line Layout */}
      <div style={{
        background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '15px'
      }}>
        
        {/* اعزازات */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            اعزازات:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            خادمِ امام رضا (علیہ السلام) مشہد، اور خادمِ حرمِ حضرت عباس (علیہ السلام) کربلا۔
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            پاکستان میں آستانِ قدس رضوی (مشہد، ایران) کے پہلے باقاعدہ نمائندے ہونے کا منفرد اعزاز۔
          </span>
        </div>

        {/* تعلیم */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            تعلیم:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            گورنمنٹ ڈگری کالج سکردو۔ MBA (ڈپلومہ بزنس ایڈمنسٹریشن) اور ڈپلومہ ان الیکٹرانکس۔
          </span>
        </div>

        {/* عہدے */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            عہدے:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            بانی و صدر: انجمنِ دوستی پاکستان و ایران (نامزد کردہ: ایرانی قونصلیٹ)۔
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            ریٹائرمنٹ: پبلک ریلیشن آفیسر،خانہ فرہنگ ایران۔لاہور
          </span>
        </div>

        {/* تصانیف */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            تصانیف:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            7 سے زائد علمی و ادبی کتب کے مصنف۔
          </span>
        </div>
        
        {/* ادارت */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ادارت:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            ملکی و غیر ملکی علمی مجلات کے ایڈیٹر ، اخبارات روزنامہ حاوی، اکٹھ (پنجابی) اور پرچار کے ڈپٹی ایڈیٹر۔
          </span>
        </div>

        {/* کالم نگاری */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            کالم نگاری:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            روزنامہ نوائے وقت، پاکستان اور مشرق میں 300 سے زائد کالمز، مضامین اور سفرنامے شائع ہو چکے ہیں۔
          </span>
        </div>
        
        {/* بانی */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            بانی:
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            بانی نور القرآن پروجیکٹ۔سی ای او (CEO): نور پروڈکشنز۔
          </span>
          <span style={{ fontSize: '14px', color: '#333', display: 'block', marginTop: '2px' }}>
            بانی پاک ایران زیارتی و سیاحتی ٹورازم۔
          </span>
        </div>
        
        {/* میڈیا کیرئیر */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            میڈیا کیرئیر:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            سینیئر ریڈیو براڈکاسٹر، ٹی وی اینکر پرسن اور پروڈیوسر۔
          </span>
        </div>

        {/* ثقافتی و سفارتی خدمات */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ثقافتی و سفارتی خدمات:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            ماہرِ امورِ فرہنگی: خانہ فرہنگِ ایران، لاہور میں 25 سالہ طویل علمی و ثقافتی خدمات۔
          </span>
        </div>

        {/* ایوارڈز */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            ایوارڈز:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            "تقدیر نامہ" (آستانِ قدس رضوی)، صدائے غازی ایوارڈ، گولڈ میڈلسٹ، اور 50 سے زائد ملکی و بین الاقوامی ایوارڈز۔
          </span>
        </div>
        
        {/* القاب */}
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontWeight: 'bold', color: '#1a472a', fontSize: '16px' }}>
            القاب:
          </span>
          <span style={{ fontSize: '14px', color: '#333' }}>
            خادمِ ثقلین، کار شناسِ فرہنگی (Cultural Expert)۔
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
          <div style={{ marginBottom: '5px' }}>
            <span style={{ color: '#D4AF37', marginRight: '5px' }}>•</span>
            <a 
              href="mailto:shigri51214@gmail.com" 
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              ای میل: shigri51214@gmail.com
            </a>
          </div>
          <div>
            <span style={{ color: '#D4AF37', marginRight: '5px' }}>•</span>
            <a 
              href="http://www.shabbirshigri.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              ویب سائٹ: www.shabbirshigri.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MobileProfileCard;
