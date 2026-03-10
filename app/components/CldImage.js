import Image from 'next/image';

// 🔴 ہم نے یہاں 'isColumn' کو باقی props سے الگ کر لیا ہے
const CldImage = ({ src, isColumn, ...props }) => {
    let imageUrl = src;

    // اگر تصویر کلاؤڈنری کی ہے، تو چیک کریں کہ وہ کالم ہے یا عام تصویر
    if (typeof imageUrl === 'string' && imageUrl.includes("cloudinary")) {
        if (isColumn) {
            // اگر کالم ہے تو لکھائی کے لیے بہترین کوالٹی (best) رکھیں
            imageUrl = imageUrl.replace("/upload/", "/upload/f_auto,q_auto:best/");
        } else {
            // اگر کوئی اور تصویر ہے تو اسے عام طریقے سے کمپریس کریں
            imageUrl = imageUrl.replace("/upload/", "/upload/f_auto,q_auto/");
        }
    }

    // اب props کے اندر isColumn نہیں ہے، اس لیے ری ایکٹ کوئی وارننگ نہیں دے گا
    return <Image {...props} src={imageUrl} unoptimized={true} />;
};

export default CldImage;