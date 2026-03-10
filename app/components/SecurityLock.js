"use client";
import { useEffect } from 'react';

export default function SecurityLock() {
    useEffect(() => {
        // رائٹ کلک اور کاپی کو روکنے کا فنکشن
        const blockContextMenu = (e) => e.preventDefault();
        const blockCopy = (e) => e.preventDefault();

        // پوری ویب سائٹ پر یہ پابندی لاگو کرنا
        document.addEventListener('contextmenu', blockContextMenu);
        document.addEventListener('copy', blockCopy);

        return () => {
            // صفائی (Cleanup)
            document.removeEventListener('contextmenu', blockContextMenu);
            document.removeEventListener('copy', blockCopy);
        };
    }, []);

    return null; // یہ سکرین پر کچھ نہیں دکھائے گا، بس خاموشی سے کام کرے گا
}