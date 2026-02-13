'use client';
import { useState, useEffect } from 'react';
import { FaSearch, FaPlay } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Navbar, HeroSlider } from '../components/Header';
import Footer from '../components/Footer';

const GALLERY_ITEMS = [
  // VIDEO
  { type: 'video', category: 'video pak-iran', src: 'https://res.cloudinary.com/dlafcjt6z/video/upload/v1769702089/%D9%82%D9%88%D9%86%D8%B5%D9%84_%D8%AC%D9%86%D8%B1%D8%A7%D9%84_%D8%A7%D9%84%D9%88%D8%AF%D8%A7%D8%B9%DB%8C_%D8%AA%D9%82%D8%B1%DB%8C%D8%A8_vf8dzl.mp4', poster: 'https://res.cloudinary.com/dlafcjt6z/image/upload/v1769633049/480735310_1718039805459919_1822898482514629043_n_pr1utp.jpg', tag: 'ویڈیو', desc: 'قونصل جنرل ایران کی الوداعی ملاقات۔' },
  { type: 'yt', category: 'video abbas', id: '9qV3XSFyTM0', tag: 'یوٹیوب', desc: 'محافظ حرم حضرت عباسؑ ہونے کا اعزاز۔' },

  // REZA (11 items)
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225159/IMG_20230520_121537_Copy_jvozl1.jpg', tag: 'خادمِ رضا', desc: 'مشہد مقدس میں حاضری۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225155/IMG_20180303_171531_Copy_gdq2iq.jpg', tag: 'خادمِ رضا', desc: 'حرم مطہر میں خدمت۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225149/Ag._Malaki_Head_of_Bunyad_pazohishay_e_Islamiastan_e_Qods_Mashad_Iran_Copy_corurb.jpg', tag: 'خادمِ رضا', desc: 'آستان قدس رضوی۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225146/IMG_20230517_042122_Copy_dqbcon.jpg', tag: 'خادمِ رضا', desc: 'حرم امام رضاؑ۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225139/IMG_20230523_044233_Copy_dkaozr.jpg', tag: 'خادمِ رضا', desc: 'خدمت کا شرف۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225139/IMG_20230522_12353811_Copy_mmry9w.jpg', tag: 'خادمِ رضا', desc: 'خادم حرم۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768225138/IMG_20230522_120802_Copy_swri5q.jpg', tag: 'خادمِ رضا', desc: 'مشہد یادگار۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768219010/IMG_3717_v7m2cz.jpg', tag: 'خادمِ رضا', desc: 'صحن حرم۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768155765/204253108_4147035308707027_9163406200972775385_n_wxfok2.jpg', tag: 'خادمِ رضا', desc: 'اعزاز۔' },
  { type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768240807/IMG_20170918_093647_Copy_oj9d5k.jpg', tag: 'خادمِ رضا', desc: 'زیارت۔' },

  // ABBAS (7 items)
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241227/IMG_20240224_165422_Copy_ucfdz2.jpg', tag: 'خادمِ عباس', desc: 'خادم حرم حضرت عباسؑ۔' },
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241224/IMG_20240224_165417_Copy_atvahw.jpg', tag: 'خادمِ عباس', desc: 'کربلا معلیٰ۔' },
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241223/IMG_20240224_165411_Copy_ykamqy.jpg', tag: 'خادمِ عباس', desc: 'حرم کا اندرونی منظر۔' },
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241221/IMG_20240224_165406_Copy_py1fo3.jpg', tag: 'خادمِ عباس', desc: 'ڈیوٹی کے دوران۔' },
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241219/IMG_20240224_165332_Copy_gkrvpg.jpg', tag: 'خادمِ عباس', desc: 'ضریح مبارک۔' },
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241217/IMG_20240224_165237_Copy_oweptz.jpg', tag: 'خادمِ عباس', desc: 'علمدارؑ کا در۔' },
  { type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768241216/IMG_20240226_060710_Copy_pcfrxg.jpg', tag: 'خادمِ عباس', desc: 'کربلا حاضری۔' },

  // PAK IRAN (13 items)
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246675/IMG_0763_Copy_g3mosm.jpg', tag: 'دوستی', desc: 'پاک ایران دوستی۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246671/IMG_0717_Copy_f5dibh.jpg', tag: 'دوستی', desc: 'دوستی تقریب۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246669/490360730_9598691253541378_9184779693586391885_n_sqyjz5.jpg', tag: 'دوستی', desc: 'وفد کے ساتھ۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246664/490299730_9598691486874688_6499771407134088791_n_uod5vm.jpg', tag: 'دوستی', desc: 'یادگار لمحہ۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246661/489820123_9598691450208025_5693196484914124541_n_pebdov.jpg', tag: 'دوستی', desc: 'ملاقات۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246659/489790587_9598691433541360_294737167677155620_n_qjkkgb.jpg', tag: 'دوستی', desc: 'گروپ فوٹو۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246655/489785251_9598691260208044_5520814393719173839_n_rfqr14.jpg', tag: 'دوستی', desc: 'سیمینار۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246651/489756481_9598691460208024_633788866516866859_n_uopy2n.jpg', tag: 'دوستی', desc: 'تقریب۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246646/489531847_9598691233541380_2817263780683122404_n_mvgups.jpg', tag: 'دوستی', desc: 'کانفرنس۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246643/489353090_9598691243541379_8343447391348685143_n_xa3fap.jpg', tag: 'دوستی', desc: 'شرکاء۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246642/IMG_20191221_201007_Copy_cxidmt.jpg', tag: 'دوستی', desc: 'دوستی۔' },
  { type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246641/IMG_20191221_201525_Copy_jg2t2g.jpg', tag: 'دوستی', desc: 'زندہ باد۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dlafcjt6z/image/upload/v1769633680/IMG-20220522-WA0000-1024x731_d70pdp.webp', tag: 'سفارت', desc: 'مشترکہ تجارتی نمائش۔' },

  // AWARDS (6 items)
  { type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768202472/2025_media_best_award_efywu4.jpg', tag: 'اعزاز', desc: 'بیسٹ میڈیا ایوارڈ 2025۔' },
  { type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223233/Ghalaf_e_Kaba_se_bani_Topi_pehnney_ka_sharaf_pnga4i.png', tag: 'اعزاز', desc: 'غلاف کعبہ ٹوپی کا تحفہ۔' },
  { type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768240165/567_Copy_qr0zix.jpg', tag: 'اعزاز', desc: 'ایوارڈ وصولی۔' },
  { type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768224440/IMG_20230608_193311_Copy_duqjr6.jpg', tag: 'اعزاز', desc: 'اعزازات۔' },
  { type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768214777/%DA%86%D9%81_snkljz.jpg', tag: 'اعزاز', desc: 'دستار بندی۔' },
  { type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg', tag: 'اعزاز', desc: 'خصوصی اعزاز۔' },

  // DIPLOMACY (13)
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768224696/ag_khazayee_raizaan_cultural_consolate_Iran_Islamabad_Copy_ybczow.jpg', tag: 'سفارت', desc: 'ثقافتی قونصلر کے ساتھ۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768118325/meeting_with_safeer_Iran_islamabad_j86eei.jpg', tag: 'سفارت', desc: 'سفیر ایران سے ملاقات۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768224020/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_k5u8ci.jpg', tag: 'سفارت', desc: 'سفارت خانہ۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768224019/cultural_atashi_Iran_se_gift_letey_huwey_iz0ogw.jpg', tag: 'سفارت', desc: 'تحفہ وصولی۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768224018/a_buisness_meeting_in_consulate_iran_hj16ru.jpg', tag: 'سفارت', desc: 'قونصلیٹ۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768157276/65_riiska.jpg', tag: 'سفارت', desc: 'میٹنگ۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768120326/diplomacy.jpg_kvisei.jpg', tag: 'سفارت', desc: 'سفارتی امور۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768118877/ag_khazayee_raizaan_cultural_consolate_Iran_Islamabad_Copy_k3qujj.jpg', tag: 'سفارت', desc: 'رائزن فرہنگی۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768118380/fida_Mohd_Nashad_speaker_GB_c.general_orr41w.jpg', tag: 'سفارت', desc: 'قونصل جنرل۔' },
  { type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768118218/ulma_mashaekh_wafad_sfeer_islamabad_2022_vdt3oh.jpg', tag: 'سفارت', desc: 'وفد۔' },

  // CULTURE (12)
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768155740/509419149_23918283134488951_7392766166972319498_n_j3f3ap.jpg', tag: 'ثقافت', desc: 'پبلک ریلیشنز آفیسر۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768155742/508699317_23892628800387718_7502255543480385722_n_aqzeju.jpg', tag: 'ثقافت', desc: 'پی آر او (لاہور)۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239457/DSC01387_Copy_tnpy1l.jpg', tag: 'ثقافت', desc: 'ثقافتی نمائش۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239457/IMG_20170908_213053_Copy_t9vjzj.jpg', tag: 'ثقافت', desc: 'کلچرل ہال۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239458/FIL1314_Copy_uavkr6.jpg', tag: 'ثقافت', desc: 'پروگرام آرگنائزر۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239458/540709_463758637034731_1737868493_n_Copy_qmaenb.jpg', tag: 'ثقافت', desc: 'ثقافتی نمائش۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239458/DSC01380_Copy_mje4hu.jpg', tag: 'ثقافت', desc: 'خانہ فرہنگ۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239458/DSC01382_Copy_tbkklj.jpg', tag: 'ثقافت', desc: 'کلچرل ایکٹیوٹی۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239459/IMG_20170908_213104_Copy_rngyil.jpg', tag: 'ثقافت', desc: 'ایرانی آرٹ۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768240885/photo_2017-03-22_12-42-02_Copy_wwqxl7.jpg', tag: 'ثقافت', desc: 'گروپ فوٹو۔' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768247092/_SC_4958_Copy_vljwnt.jpg', tag: 'ثقافت', desc: 'PRO Services' },
  { type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768247090/_SC_4956_Copy_sxis9t.jpg', tag: 'ثقافت', desc: 'تقریب۔' },

  // MEDIA (10)
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768274449/radio_Pakistan_yjpqbj.jpg', tag: 'میڈیا', desc: 'ریڈیو پاکستان (FM 93)۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223350/IMG-20180530-WA0025_Copy_lwoczg.jpg', tag: 'میڈیا', desc: 'ٹی وی ٹاک شو۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223348/IMG_20190213_195100_Copy_frq8eu.jpg', tag: 'میڈیا', desc: 'میڈیا ڈسکشن۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223346/IMG_20190213_194625_Copy_shfrwe.jpg', tag: 'میڈیا', desc: 'لائیو پروگرام۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223344/IMG_20210209_180402_Copy_za3wfc.jpg', tag: 'میڈیا', desc: 'اسٹوڈیو۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223341/IMG_20190213_194900_Copy_sjezqh.jpg', tag: 'میڈیا', desc: 'گفتگو۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223339/IMG_20171205_141053_Copy_aokqfd.jpg', tag: 'میڈیا', desc: 'ریکارڈنگ۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223337/111111_Copy_kbx5op.jpg', tag: 'میڈیا', desc: 'پروگرام۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223335/1111_Copy_syqemh.jpg', tag: 'میڈیا', desc: 'میزبانی۔' },
  { type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768223333/00000_Copy_kbjmzv.jpg', tag: 'میڈیا', desc: 'چینل۔' },

  // MEETINGS (10)
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232646/wazir_betalmaal_k_saath_dr5qjc.jpg', tag: 'ملاقات', desc: 'وزیر بیت المال۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232645/tahir_raza_bukhari_secretory_oqaf_Copy_fdqjai.jpg', tag: 'ملاقات', desc: 'سیکرٹری اوقاف۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232644/sabiq_wazir_alaa_wa_senior_sahafi_Hassan_askari_cyaulr.jpg', tag: 'ملاقات', desc: 'حسن عسکری۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232643/sabiq_wazir_ala_wa_speeker_punjab_manzoor_watoo_muh2ni.jpg', tag: 'ملاقات', desc: 'منظور وٹو۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232643/sabiq_wazeer_taleem_wa_v.chansler_south_asia_university_j1bvov.jpg', tag: 'ملاقات', desc: 'سابق وزیر تعلیم۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232641/Mosin_ali_Najafi_ki_Mazar_par_Qurani_videos_k_Iftitah_k_moqah_pr_afhing.jpg', tag: 'ملاقات', desc: 'محسن نجفی مزار۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232641/irani_consul_general_aor_speeker_GB_yn0vod.jpg', tag: 'ملاقات', desc: 'اسپیکر جی بی۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232641/IMG_20191107_141016_Copy_hnvmqc.jpg', tag: 'ملاقات', desc: 'ملاقات۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232640/IMG_20191106_142828_Copy_hxufdv.jpg', tag: 'ملاقات', desc: 'میٹنگ۔' },
  { type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768232640/IMG_20170418_110304_Copy_zxsojx.jpg', tag: 'ملاقات', desc: 'یادگار۔' },

  // PLACES (10)
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246940/486418377_9483967141680457_557358092856100957_n_vn84j1.jpg', tag: 'زیارت', desc: 'حج بیت اللہ۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768246939/473056338_9080950045315504_2084902005593648656_n_ag9h7i.jpg', tag: 'زیارت', desc: 'مدینہ منورہ۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239586/IMG_20170920_180927_Copy_nmnq4c.jpg', tag: 'سفر', desc: 'ایران کا سفر۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239586/22222_Copy_vzgbre.jpg', tag: 'سفر', desc: 'تاریخی مقام۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239585/IMG_20170920_175631_Copy_bxtlcq.jpg', tag: 'سفر', desc: 'سیاحت۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239579/IMG_20170920_115343_Copy_gdtytq.jpg', tag: 'سفر', desc: 'خوبصورت نظارہ۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768239578/IMG_20170919_225720_Copy_bgammb.jpg', tag: 'سفر', desc: 'رات کا منظر۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768218910/DSC09270_t2bsy8.jpg', tag: 'سفر', desc: 'امام خمینیؒ ہاؤس۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768215720/11220128_861325250611399_8058500885378346582_n_Copy_t7rd62.jpg', tag: 'سفر', desc: 'طبیعت پل۔' },
  { type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768215675/10275537_756208274456431_8990279500455587178_o_Copy_fjpqlu.jpg', tag: 'سفر', desc: 'اقبالؒ کی جائے پیدائش۔' },

  // UNITY (5)
  { type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768201705/bwn_al_mazahib_meeting_pcxv3a.jpg', tag: 'اتحاد', desc: 'بین المذاہب ہم آہنگی۔' },
  { type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768201705/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_w7inmn.jpg', tag: 'اتحاد', desc: 'وحدت میٹنگ۔' },
  { type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768201705/ben_almasalik_hamahangi_par_mulaqat_otrbvr.jpg', tag: 'اتحاد', desc: 'بین المسالک اتحاد۔' },
  { type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768201704/Milad_e_Mustaf_Muslim_leag_house_lahore_2023_Copy_gr6ciz.jpg', tag: 'اتحاد', desc: 'میلاد مصطفیٰؐ۔' },
  { type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/v1768118218/Ulma_wa_Mashaekh_khana_farhang_2021_rlgk2d.jpg', tag: 'اتحاد', desc: 'علمائے کرام کا اتحاد۔' },
];

const CATEGORIES = [
  { value: 'all', label: 'سب (All)' },
  { value: 'reza', label: 'خادمِ امام رضاؑ' },
  { value: 'abbas', label: 'خادمِ غازی عباسؑ' },
  { value: 'pak-iran', label: 'پاک ایران دوستی' },
  { value: 'awards', label: 'ایوارڈز' },
  { value: 'diplomacy', label: 'سفارتی تعلقات' },
  { value: 'culture', label: 'پبلک ریلیشنز' },
  { value: 'media', label: 'میڈیا و صحافت' },
  { value: 'meetings', label: 'ملاقاتیں' },
  { value: 'places', label: 'حج و زیارات' },
  { value: 'unity', label: 'اتحادِ بین المسلمین' },
  { value: 'video', label: 'ویڈیوز' },
];

export default function GalleryPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filtered, setFiltered] = useState(GALLERY_ITEMS);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    let result = GALLERY_ITEMS;
    if (activeCategory !== 'all') {
      result = result.filter(item => item.category.split(' ').includes(activeCategory));
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(item => 
        item.desc.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q)
      );
    }
    setFiltered(result);
  }, [query, activeCategory]);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const currentItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  const goNext = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filtered.length);
    }
  };

  const goPrev = (e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!currentItem) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, currentItem, filtered.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Navbar />
      <HeroSlider />

      <section className="bg-gradient-to-r from-[#0f4c75] via-[#1a6a96] to-[#0f4c75] py-16 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] font-serif mb-2">گیلری</h1>
        <p className="text-white text-lg md:text-xl">یادوں کے جھروکوں سے</p>
      </section>

      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center bg-white border-2 border-[#D4AF37] rounded-full px-6 py-3 shadow-lg max-w-2xl mx-auto">
          <FaSearch size={20} className="text-[#0f4c75] mr-4" />
          <input
            type="text"
            placeholder="تصویریں تلاش کریں..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 outline-none text-gray-800 placeholder-gray-500 bg-transparent"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full font-bold transition duration-300 whitespace-nowrap text-sm sm:text-base ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] text-white shadow-lg'
                  : 'bg-gradient-to-r from-[#D4AF37] to-[#c8a165] text-[#0f4c75] hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 relative z-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full bg-black aspect-video">
                    <video
                      poster={item.poster}
                      className="w-full h-full object-cover"
                      onClick={e => e.stopPropagation()}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <FaPlay size={40} className="text-white" />
                    </div>
                  </div>
                ) : item.type === 'yt' ? (
                  <div className="relative w-full bg-black aspect-video flex items-center justify-center">
                    <FaPlay size={40} className="text-white absolute z-10" />
                    <iframe src={`https://www.youtube.com/embed/${item.id}`} className="w-full h-full rounded" allowFullScreen />
                  </div>
                ) : (
                  <img src={item.src} alt={item.desc} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
                )}
                <div className="p-4">
                  <span className="inline-block bg-[#0f4c75] text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {item.tag}
                  </span>
                  <p className="text-[#0f4c75] font-semibold text-sm line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600 font-serif">کوئی تصویر نہیں ملی</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {currentItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition z-60"
          >
            <FaXmark size={40} />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] hover:from-[#D4AF37] hover:to-[#c8a165] hover:text-[#0f4c75] p-6 rounded-full z-60 text-6xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            ‹
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-[#0f4c75] to-[#1a6a96] hover:from-[#D4AF37] hover:to-[#c8a165] hover:text-[#0f4c75] p-6 rounded-full z-60 text-6xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            ›
          </button>

          <div className="flex-1 flex items-center justify-center w-full max-w-5xl">
            {currentItem.type === 'img' && (
              <img
                src={currentItem.src}
                alt={currentItem.desc}
                className="max-h-[70vh] max-w-4xl rounded-lg border-4 border-[#D4AF37] shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            )}
            {currentItem.type === 'video' && (
              <video
                autoPlay
                controls
                src={currentItem.src}
                className="max-h-[70vh] max-w-4xl rounded-lg border-4 border-[#D4AF37] shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            )}
            {currentItem.type === 'yt' && (
              <iframe
                src={`https://www.youtube.com/embed/${currentItem.id}?autoplay=1`}
                className="w-full max-w-5xl aspect-video rounded-lg border-4 border-[#D4AF37] shadow-2xl"
                allowFullScreen
              />
            )}
          </div>

          <div className="mt-6 text-center text-white">
            <div className="text-[#D4AF37] font-bold">{currentItem.tag}</div>
            <div className="mt-2">{currentItem.desc}</div>
            <div className="text-xs mt-2 text-white/70">{selectedIndex + 1} of {filtered.length}</div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
