import { Noto_Nastaliq_Urdu } from 'next/font/google';

const alvi = Noto_Nastaliq_Urdu({
    subsets: ['arabic', 'latin'],
    weight: ['400', '700'],
    display: 'swap',
});

const urduFonts = {
    alvi,
};

export default urduFonts;