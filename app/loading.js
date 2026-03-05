export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b314d] bg-opacity-95 backdrop-blur-md">
      
      {/* گولڈن اینیمیٹڈ دائرہ (Golden Spinner) */}
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#D4AF37] rounded-full border-t-transparent animate-spin"></div>
        
        {/* درمیان میں ایک چمکتا ہوا نقطہ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse shadow-[0_0_15px_#D4AF37]"></div>
      </div>
      
      {/* خوبصورت اردو تحریر */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-bold urdu-text tracking-wider animate-pulse text-center drop-shadow-lg">
          انتظار فرمائیے ... 
        </h2>
        
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-1"></div>
        
        <h3 className="text-white/90 text-xl md:text-2xl font-bold urdu-text tracking-wide text-center drop-shadow-md">
          حاجی شبیر احمد شگری
        </h3>
      </div>

    </div>
  );
}