import React from 'react';

const BeautifulProfileCard = () => {
  return (
    <div style={{
      border: '4px solid #D4AF37', 
      borderRadius: '12px',
      backgroundColor: '#fff', 
      fontFamily: 'Jameel Noori Nastaleeq, serif',
      direction: 'rtl',
      boxShadow: '0px 15px 40px rgba(212,175,55,0.25)',
      margin: '20px auto',
      lineHeight: '1.7',
      position: 'relative',
      maxWidth: '900px'
    }}>
      
      {/* Header Section - Beautiful Design */}
      <div style={{
        background: 'linear-gradient(135deg, #D4AF37 0%, #B38728 100%)',
        padding: '20px 30px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Pattern */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          opacity: '0.3'
        }}></div>
        
        <h1 style={{ 
          fontSize: '32px', 
          color: '#fff', 
          margin: '0',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          zIndex: 2
        }}>
          حاجی شبیر احمد شگری
        </h1>
        <div style={{ 
          fontSize: '16px', 
          color: '#fff', 
          marginTop: '8px',
          opacity: '0.9'
        }}>
          سینیئر صحافی، محقق، مصنف اور پروڈیوسر
        </div>
      </div>

      {/* Content Section */}
      <div style={{ display: 'flex', padding: '30px' }}>
        
        {/* Left Side - Profile Image */}
        <div style={{ 
          width: '280px', 
          flexShrink: 0,
          marginRight: '30px'
        }}>
          {/* Profile Image with Frame */}
          <div style={{
            position: 'relative',
            marginBottom: '25px'
          }}>
            {/* Decorative Corner */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #D4AF37, #B38728)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              zIndex: 10
            }}>
              45
            </div>
            
            <div style={{
              width: '240px',
              height: '240px',
              borderRadius: '12px',
              border: '4px solid #D4AF37',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              background: '#fff',
              padding: '4px'
            }}>
              <img 
                src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1768281422/555555-pica_Copy_kawpaf.png" 
                alt="حاجی شبیر احمد شگری" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
          
          {/* Quick Info Cards */}
          <div style={{ spaceY: '15px' }}>
            {/* Education Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
              border: '2px solid #D4AF37',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ 
                fontSize: '16px', 
                color: '#1a472a', 
                marginBottom: '8px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                🎓 تعلیم
              </h4>
              <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
                <div style={{ marginBottom: '5px' }}>
                  <strong>گورنمنٹ ڈگری کالج سکردو</strong>
                </div>
                <div style={{ marginBottom: '5px' }}>
                  <strong>ایم بی اے</strong>
                </div>
                <div>
                  <strong>ڈپلومہ ان الیکٹرانکس</strong>
                </div>
              </div>
            </div>

            {/* Religious Services Card */}
            <div style={{
              background: 'linear-gradient(135deg, #fff5f5, #ffe6e6)',
              border: '2px solid #D4AF37',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ 
                fontSize: '16px', 
                color: '#8b0000', 
                marginBottom: '8px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                🕌 مذہبی خدمات
              </h4>
              <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
                <div style={{ marginBottom: '5px', fontWeight: 'bold', color: '#8b0000' }}>
                  خادمِ امام رضا (علیہ السلام)
                </div>
                <div style={{ marginBottom: '5px', fontWeight: 'bold', color: '#8b0000' }}>
                  خادمِ حرمِ حضرت عباس (علیہ السلام)
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  پاکستان میں آستانِ قدس رضوی کے پہلے باقاعدہ نمائندے
                </div>
              </div>
            </div>

            {/* Recognition Card */}
            <div style={{
              background: 'linear-gradient(135deg, #f0f8ff, #e6f3ff)',
              border: '2px solid #D4AF37',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ 
                fontSize: '16px', 
                color: '#1a472a', 
                marginBottom: '8px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                🏆 اعزازات
              </h4>
              <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#333' }}>
                <div style={{ marginBottom: '5px' }}>
                  <strong>تقدیر نامہ</strong> (آستانِ قدس رضوی)
                </div>
                <div style={{ marginBottom: '5px' }}>
                  <strong>صدائے غازی ایوارڈ</strong>
                </div>
                <div>
                  <strong>50+ ملکی و بین الاقوامی ایوارڈز</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div style={{ flex: 1 }}>
          
          {/* Professional Summary */}
          <div style={{ 
            marginBottom: '25px',
            padding: '20px',
            background: 'linear-gradient(135deg, #fafafa, #f5f5f5)',
            border: '2px solid #D4AF37',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontSize: '22px', 
              color: '#1a472a', 
              marginBottom: '15px',
              fontWeight: 'bold',
              borderBottom: '3px solid #D4AF37',
              paddingBottom: '10px'
            }}>
              📋 پیشہ اور کیریئر
            </h2>
            
            <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>بانی اور صدر:</span> انجمنِ دوستی پاکستان و ایران (نامزد: ایرانی قونصلیٹ)
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>بانی:</span> نور القرآن پروجیکٹ (دنیا کا پہلا ویژول قرآن)
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>سی ای او:</span> نور پروڈکشنز
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>ریٹائرمنٹ:</span> پبلک ریلیشن آفیسر، خانہ فرہنگ ایران لاہور
              </div>
            </div>
          </div>

          {/* Literary Works */}
          <div style={{ 
            marginBottom: '25px',
            padding: '20px',
            background: 'linear-gradient(135deg, #fff9e6, #fef5e7)',
            border: '2px solid #D4AF37',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontSize: '22px', 
              color: '#1a472a', 
              marginBottom: '15px',
              fontWeight: 'bold',
              borderBottom: '3px solid #D4AF37',
              paddingBottom: '10px'
            }}>
              📚 تصانیف و ادارت
            </h2>
            
            <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>مصنف:</span> 7 سے زائد علمی و ادبی کتب
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>ایڈیٹر:</span> بین الاقوامی علمی مجلات و اخبارات
              </div>
              
              <div>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>جرائد:</span> حاوی، اکٹھ پنجابی، پرچار
              </div>
            </div>
          </div>

          {/* Media Career */}
          <div style={{ 
            marginBottom: '25px',
            padding: '20px',
            background: 'linear-gradient(135deg, #e8f5e8, #f0e6e8)',
            border: '2px solid #D4AF37',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontSize: '22px', 
              color: '#1a472a', 
              marginBottom: '15px',
              fontWeight: 'bold',
              borderBottom: '3px solid #D4AF37',
              paddingBottom: '10px'
            }}>
              🎙 میڈیا کیرئیر
            </h2>
            
            <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>کالم نگاری:</span> روزنامہ نوائے وقت، پاکستان، مشرق
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>کالمز:</span> 300 سے زائد کالمز، مضامین اور سفرنامے
              </div>
              
              <div>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>پیشہ:</span> سینیئر ریڈیو براڈکاسٹر، ٹی وی اینکر پرسن اور پروڈیوسر
              </div>
            </div>
          </div>

          {/* Cultural Services */}
          <div style={{ 
            marginBottom: '25px',
            padding: '20px',
            background: 'linear-gradient(135deg, #fff3cd, #fef9c3)',
            border: '2px solid #D4AF37',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <h2 style={{ 
              fontSize: '22px', 
              color: '#1a472a', 
              marginBottom: '15px',
              fontWeight: 'bold',
              borderBottom: '3px solid #D4AF37',
              paddingBottom: '10px'
            }}>
              🌍 ثقافتی و سفارتی خدمات
            </h2>
            
            <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>ثقافتی ماہر:</span> 25 سالہ طویل خدمات
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>سیاحتی ماہر:</span> ماہرِ ثقافتی و سفارتی امور
              </div>
              
              <div>
                <span style={{ fontWeight: 'bold', color: '#1a472a' }}>بانی:</span> پاک ایران زیارتی و سیاحتی ٹورازم
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1a472a, #2d5a3c)',
        padding: '25px 30px',
        textAlign: 'center',
        borderTop: '3px solid #D4AF37'
      }}>
        <div style={{ 
          fontSize: '20px', 
          color: '#fff', 
          fontWeight: 'bold',
          marginBottom: '15px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          خادمِ ثقلین | ثقافی ماہر
        </div>
        
        <div style={{ 
          fontSize: '16px', 
          color: '#fff',
          lineHeight: '1.8',
          marginBottom: '15px'
        }}>
          45 سالہ کی طویل خدمات میں صحافت، تحقیق، تصنیف، اور ثقافتی سفارت کاری میں نمایاں حاصل کیں۔
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.3)',
          paddingTop: '15px',
          fontSize: '14px'
        }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>📧</span> shigri51214@gmail.com
          </div>
          <div>
            <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>🌐</span> www.shabbirshigri.com
          </div>
        </div>
      </div>

    </div>
  );
};

export default BeautifulProfileCard;
