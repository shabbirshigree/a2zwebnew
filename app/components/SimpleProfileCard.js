import React from 'react';

const SimpleProfileCard = () => {
  return (
    <div style={{
      border: '3px solid #D4AF37', 
      borderRadius: '8px',
      backgroundColor: '#fff', 
      fontFamily: 'Jameel Noori Nastaleeq, serif',
      direction: 'rtl',
      boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
      margin: '20px auto',
      lineHeight: '1.6',
      position: 'relative',
      maxWidth: '800px'
    }}>
      
      {/* Header Section - Urdu Wikipedia Style */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '15px 20px',
        borderBottom: '2px solid #D4AF37',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '28px', 
          color: '#1a472a', 
          margin: '0',
          fontWeight: 'bold'
        }}>
          حاجی شبیر احمد شگری
        </h1>
        <div style={{ 
          fontSize: '14px', 
          color: '#666', 
          marginTop: '5px'
        }}>
          از ویکیپیڈیا، آزاد دائرۃ المعارف
        </div>
      </div>

      {/* Content Section */}
      <div style={{ display: 'flex', padding: '20px' }}>
        
        {/* Left Side - Image and Info Box */}
        <div style={{ 
          width: '250px', 
          flexShrink: 0,
          marginRight: '20px'
        }}>
          {/* Profile Image - Fixed Size */}
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '8px',
            border: '3px solid #D4AF37',
            margin: '0 auto 15px',
            overflow: 'hidden',
            boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="https://res.cloudinary.com/dtqrziupt/image/upload/q_auto/f_auto/v1768281422/555555-pica_Copy_kawpaf.png" 
              alt="حاجی شبیر احمد شگری" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          
          {/* Info Box - Urdu */}
          <div style={{
            backgroundColor: '#f9f2d1',
            border: '1px solid #D4AF37',
            borderRadius: '6px',
            padding: '12px',
            fontSize: '13px',
            lineHeight: '1.4'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#1a472a' }}>
              حاجی شبیر احمد شگری
            </div>
            <div style={{ marginBottom: '4px' }}>
              <strong style={{ color: '#1a472a' }}>پیدائش:</strong> سکردو
            </div>
            <div style={{ marginBottom: '4px' }}>
              <strong style={{ color: '#1a472a' }}>قومیت:</strong> پاکستانی
            </div>
            <div style={{ marginBottom: '4px' }}>
              <strong style={{ color: '#1a472a' }}>پیشہ:</strong> صحافی
            </div>
            <div style={{ marginBottom: '4px' }}>
              <strong style={{ color: '#1a472a' }}>خدمت کی مدت:</strong> 45 سال
            </div>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div style={{ flex: 1 }}>
          
          {/* Summary - Urdu */}
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ 
              fontSize: '20px', 
              color: '#1a472a', 
              borderBottom: '2px solid #D4AF37',
              paddingBottom: '5px',
              marginBottom: '10px'
            }}>
              حاجی شبیر احمد شگری
            </h2>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.6',
              color: '#333',
              textAlign: 'justify',
              marginBottom: '15px'
            }}>
              حاجی شبیر احمد شگری ایک ممتاز پاکستانی صحافی، محقق، مصنف اور پروڈیوسر ہیں جن کی 45 سالوں کی تشیخصی خدمات میڈیا، ثقافتی سفارت کاری اور اسلامی اسکالرشپ میں ہیں۔ وہ آستان قدس رضوی (مشہد، ایران) کے پہلے باضابطہ نمائندے کی پہچان رکھتے ہیں۔
            </p>
          </div>

          {/* Religious Services - Urdu */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              color: '#1a472a', 
              borderBottom: '1px solid #D4AF37',
              paddingBottom: '3px',
              marginBottom: '10px'
            }}>
              **مذہبی خدمات**
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', textAlign: 'justify' }}>
              <strong>خادم امام رضا (مشہد، ایران)</strong> اور <strong>خادم حرم عباس (کربلا، عراق)</strong> کے اعزاز سے نوازے گئے ہیں۔ وہ پاکستان میں آستان قدس رضوی (مشہد، ایران) کے پہلے باضابطہ نمائندے ہونے کا اعزاز رکھتے ہیں۔
            </p>
          </div>

          {/* Education - Urdu */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              color: '#1a472a', 
              borderBottom: '1px solid #D4AF37',
              paddingBottom: '3px',
              marginBottom: '10px'
            }}>
              **تعلیم**
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', textAlign: 'justify' }}>
              گورنمنٹ ڈگری کالج سکردو سے تعلیم حاصل کی۔ ایم بی اے کی ڈگری اور الیکٹرانکس میں ڈپلومہ حاصل کیا۔
            </p>
          </div>

          {/* Career - Urdu */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              color: '#1a472a', 
              borderBottom: '1px solid #D4AF37',
              paddingBottom: '3px',
              marginBottom: '10px'
            }}>
              **خدمت اور کامیابیاں**
            </h3>
            
            {/* Bani Sadar Section */}
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ fontSize: '14px', color: '#1a472a', marginBottom: '5px' }}>
                **بانی اور صدر انجمن دوستی پاکستان ایران**
              </h4>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', textAlign: 'justify', marginBottom: '5px' }}>
                انجمن دوستی پاکستان ایران کے بانی اور صدر ہیں۔ ایرانی قونصلیٹ نے اس کو نامزد کیا ہے۔
              </p>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', textAlign: 'justify', marginBottom: '5px' }}>
                <strong>ریٹائرمنٹ:</strong> پبلک ریلیشن آفیسر خانہ فرہنگ ایران لاہور
              </p>
            </div>
            
            {/* Other Achievements */}
            <ul style={{ 
              fontSize: '14px', 
              lineHeight: '1.6', 
              color: '#333',
              paddingLeft: '20px',
              textAlign: 'justify'
            }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>بانی نور القرآن پروجیکٹ:</strong> دنیا کا پہلا ویژول قرآن پروجیکٹ
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>سی ای او:</strong> نور پروڈکشنز
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>تصنیف اور ادارت:</strong> 7 سے زائد علمی اور ادبی کتابوں کے مصنف، ایڈیٹر بین الاقوامی علمی مجلات اور اخبارات (حاوی، اکٹھ پنجابی، پرچار)
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>کالم نگاری:</strong> روزنامہ نوائے وقت پاکستان، مشرق (300 سے زائد کالمز، مضامین اور سفرنامے)
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>اعزازات:</strong> حامل "تقدیر نامہ" (آستان قدس رضوی)، صدائے غازی ایوارڈ، گولڈ میڈلسٹ، 50 سے زائد ملکی اور بین الاقوامی ایوارڈز
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>ثقافتی خدمات:</strong> ماہر امور فرہنگی (25 سالوں کی طویل خدمات، خانہ فرہنگ ایران لاہور)، ماہر ثقافتی اور سفارتی امور
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>سیاحت و ملی:</strong> نور القرآن پروجیکٹ، بانی پاک ایران زیارتی اور سیاحتی ٹورازم، مبلغ اتحاد امت اور وحدت اسلامی
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>میڈیا کیرئیر:</strong> سینئر ریڈیو براڈکاسٹر، ٹی وی اینکر پرسن اور پروڈیوسر
              </li>
            </ul>
          </div>

          {/* Publications - Urdu */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ 
              fontSize: '16px', 
              color: '#1a472a', 
              borderBottom: '1px solid #D4AF37',
              paddingBottom: '3px',
              marginBottom: '10px'
            }}>
              **تصنیف کی تعریف**
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#333', textAlign: 'justify' }}>
              حاجی شبیر احمد شگری نے 7 سے زائد علمی اور ادبی کتابیں لکھی ہیں جو ان کی ادبی اور علمی کامیابی کی دلیل ہیں۔ ان کی کتابوں میں اسلامی تاریخ، ثقافتی سفارت کاری اور کرنٹ افیئرز پر مکمل ریسرچ موجود ہے۔ وہ بین الاقوامی مجلات میں ریگولر کالم لکھتے ہیں۔
            </p>
          </div>

          {/* Contact - Urdu */}
          <div style={{ 
            backgroundColor: '#1a472a',
            color: 'white',
            padding: '15px',
            borderRadius: '6px',
            fontSize: '13px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
              خادم ثقلین | ثقافی ماہر (فرہنگی ماہر)
            </div>
            <div style={{ textAlign: 'center' }}>
              <div>ای میل: shigri51214@gmail.com</div>
              <div>ویب سائٹ: www.shabbirshigri.com</div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer - Urdu */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '10px',
        borderTop: '1px solid #D4AF37',
        textAlign: 'center',
        fontSize: '12px',
        color: '#666'
      }}>
        آخری اپ ڈیٹ: 2025 | یہ مضمون زندہ شخص کے بارے میں ہے
      </div>

    </div>
  );
};

export default SimpleProfileCard;
