// app/gallery/galleryData.js

export const GALLERY_ITEMS = [
  // VIDEO
  { id: 'v1', type: 'video', category: 'video pak-iran', src: 'https://res.cloudinary.com/dlafcjt6z/video/upload/v1769702089/%D9%82%D9%88%D9%86%D8%B5%D9%84_%D8%AC%D9%86%D8%B1%D8%A7%D9%84_%D8%A7%D9%84%D9%88%D8%AF%D8%A7%D8%B9%DB%8C_%D8%AA%D9%82%D8%B1%DB%8C%D8%A8_vf8dzl.mp4', poster: 'https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto,f_auto/v1769633049/480735310_1718039805459919_1822898482514629043_n_pr1utp.jpg', tag: 'ویڈیو', desc: 'قونصل جنرل ایران کی الوداعی ملاقات۔' },
  { id: 'v2', type: 'yt', category: 'video abbas', id_yt: '9qV3XSFyTM0', tag: 'یوٹیوب', desc: 'محافظ حرم حضرت عباسؑ ہونے کا اعزاز۔' },

  // REZA
  { id: 'r1', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225159/IMG_20230520_121537_Copy_jvozl1.jpg', tag: 'خادمِ رضا', desc: 'مشہد مقدس میں حاضری۔' },
  { id: 'r2', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225155/IMG_20180303_171531_Copy_gdq2iq.jpg', tag: 'خادمِ رضا', desc: 'حرم مطہر میں خدمت۔' },
  { id: 'r3', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225149/Ag._Malaki_Head_of_Bunyad_pazohishay_e_Islamiastan_e_Qods_Mashad_Iran_Copy_corurb.jpg', tag: 'خادمِ رضا', desc: 'آستان قدس رضوی۔' },
  { id: 'r4', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225146/IMG_20230517_042122_Copy_dqbcon.jpg', tag: 'خادمِ رضا', desc: 'حرم امام رضاؑ۔' },
  { id: 'r5', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225139/IMG_20230523_044233_Copy_dkaozr.jpg', tag: 'خادمِ رضا', desc: 'خدمت کا شرف۔' },
  { id: 'r6', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225139/IMG_20230522_12353811_Copy_mmry9w.jpg', tag: 'خادمِ رضا', desc: 'خادم حرم۔' },
  { id: 'r7', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768225138/IMG_20230522_120802_Copy_swri5q.jpg', tag: 'خادمِ رضا', desc: 'مشہد یادگار۔' },
  { id: 'r8', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768219010/IMG_3717_v7m2cz.jpg', tag: 'خادمِ رضا', desc: 'صحن حرم۔' },
  { id: 'r9', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768155765/204253108_4147035308707027_9163406200972775385_n_wxfok2.jpg', tag: 'خادمِ رضا', desc: 'اعزاز۔' },
  { id: 'r10', type: 'img', category: 'reza', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768240807/IMG_20170918_093647_Copy_oj9d5k.jpg', tag: 'خادمِ رضا', desc: 'زیارت۔' },

  // ABBAS
  { id: 'a1', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241227/IMG_20240224_165422_Copy_ucfdz2.jpg', tag: 'خادمِ عباس', desc: 'خادم حرم حضرت عباسؑ۔' },
  { id: 'a2', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241224/IMG_20240224_165417_Copy_atvahw.jpg', tag: 'خادمِ عباس', desc: 'کربلا معلیٰ۔' },
  { id: 'a3', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241223/IMG_20240224_165411_Copy_ykamqy.jpg', tag: 'خادمِ عباس', desc: 'حرم کا اندرونی منظر۔' },
  { id: 'a4', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241221/IMG_20240224_165406_Copy_py1fo3.jpg', tag: 'خادمِ عباس', desc: 'ڈیوٹی کے دوران۔' },
  { id: 'a5', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241219/IMG_20240224_165332_Copy_gkrvpg.jpg', tag: 'خادمِ عباس', desc: 'ضریح مبارک۔' },
  { id: 'a6', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241217/IMG_20240224_165237_Copy_oweptz.jpg', tag: 'خادمِ عباس', desc: 'علمدارؑ کا در۔' },
  { id: 'a7', type: 'img', category: 'abbas', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768241216/IMG_20240226_060710_Copy_pcfrxg.jpg', tag: 'خادمِ عباس', desc: 'کربلا حاضری۔' },

  // PAK IRAN
  { id: 'p1', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246675/IMG_0763_Copy_g3mosm.jpg', tag: 'دوستی', desc: 'پاک ایران دوستی۔' },
  { id: 'p2', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246671/IMG_0717_Copy_f5dibh.jpg', tag: 'دوستی', desc: 'دوستی تقریب۔' },
  { id: 'p3', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246669/490360730_9598691253541378_9184779693586391885_n_sqyjz5.jpg', tag: 'دوستی', desc: 'وفد کے ساتھ۔' },
  { id: 'p4', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246664/490299730_9598691486874688_6499771407134088791_n_uod5vm.jpg', tag: 'دوستی', desc: 'یادگار لمحہ۔' },
  { id: 'p5', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246661/489820123_9598691450208025_5693196484914124541_n_pebdov.jpg', tag: 'دوستی', desc: 'ملاقات۔' },
  { id: 'p6', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246659/489790587_9598691433541360_294737167677155620_n_qjkkgb.jpg', tag: 'دوستی', desc: 'گروپ فوٹو۔' },
  { id: 'p7', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246655/489785251_9598691260208044_5520814393719173839_n_rfqr14.jpg', tag: 'دوستی', desc: 'سیمینار۔' },
  { id: 'p8', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246651/489756481_9598691460208024_633788866516866859_n_uopy2n.jpg', tag: 'دوستی', desc: 'تقریب۔' },
  { id: 'p9', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246646/489531847_9598691233541380_2817263780683122404_n_mvgups.jpg', tag: 'دوستی', desc: 'کانفرنس۔' },
  { id: 'p10', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246643/489353090_9598691243541379_8343447391348685143_n_xa3fap.jpg', tag: 'دوستی', desc: 'شرکاء۔' },
  { id: 'p11', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246642/IMG_20191221_201007_Copy_cxidmt.jpg', tag: 'دوستی', desc: 'دوستی۔' },
  { id: 'p12', type: 'img', category: 'pak-iran', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246641/IMG_20191221_201525_Copy_jg2t2g.jpg', tag: 'دوستی', desc: 'زندہ باد۔' },
  { id: 'd1', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dlafcjt6z/image/upload/q_auto,f_auto/v1769633680/IMG-20220522-WA0000-1024x731_d70pdp.webp', tag: 'سفارت', desc: 'مشترکہ تجارتی نمائش۔' },

  // AWARDS
  { id: 'aw1', type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768202472/2025_media_best_award_efywu4.jpg', tag: 'اعزاز', desc: 'بیسٹ میڈیا ایوارڈ 2025۔' },
  { id: 'aw2', type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223233/Ghalaf_e_Kaba_se_bani_Topi_pehnney_ka_sharaf_pnga4i.png', tag: 'اعزاز', desc: 'غلاف کعبہ ٹوپی کا تحفہ۔' },
  { id: 'aw3', type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768240165/567_Copy_qr0zix.jpg', tag: 'اعزاز', desc: 'ایوارڈ وصولی۔' },
  { id: 'aw4', type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768224440/IMG_20230608_193311_Copy_duqjr6.jpg', tag: 'اعزاز', desc: 'اعزازات۔' },
  { id: 'aw5', type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768214777/%DA%86%D9%81_snkljz.jpg', tag: 'اعزاز', desc: 'دستار بندی۔' },
  { id: 'aw6', type: 'img', category: 'awards', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768214711/11427210_860298097380781_7853481782485550208_n_ry85rw.jpg', tag: 'اعزاز', desc: 'خصوصی اعزاز۔' },

  // DIPLOMACY
  { id: 'd2', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768224696/ag_khazayee_raizaan_cultural_consolate_Iran_Islamabad_Copy_ybczow.jpg', tag: 'سفارت', desc: 'ثقافتی قونصلر کے ساتھ۔' },
  { id: 'd3', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768118325/meeting_with_safeer_Iran_islamabad_j86eei.jpg', tag: 'سفارت', desc: 'سفیر ایران سے ملاقات۔' },
  { id: 'd4', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768224020/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_k5u8ci.jpg', tag: 'سفارت', desc: 'سفارت خانہ۔' },
  { id: 'd5', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768224019/cultural_atashi_Iran_se_gift_letey_huwey_iz0ogw.jpg', tag: 'سفارت', desc: 'تحفہ وصولی۔' },
  { id: 'd6', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768224018/a_buisness_meeting_in_consulate_iran_hj16ru.jpg', tag: 'سفارت', desc: 'قونصلیٹ۔' },
  { id: 'd7', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768157276/65_riiska.jpg', tag: 'سفارت', desc: 'میٹنگ۔' },
  { id: 'd8', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768120326/diplomacy.jpg_kvisei.jpg', tag: 'سفارت', desc: 'سفارتی امور۔' },
  { id: 'd9', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768118877/ag_khazayee_raizaan_cultural_consolate_Iran_Islamabad_Copy_k3qujj.jpg', tag: 'سفارت', desc: 'رائزن فرہنگی۔' },
  { id: 'd10', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768118380/fida_Mohd_Nashad_speaker_GB_c.general_orr41w.jpg', tag: 'سفارت', desc: 'قونصل جنرل۔' },
  { id: 'd11', type: 'img', category: 'diplomacy', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768118218/ulma_mashaekh_wafad_sfeer_islamabad_2022_vdt3oh.jpg', tag: 'سفارت', desc: 'وفد۔' },

  // CULTURE
  { id: 'c1', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768155740/509419149_23918283134488951_7392766166972319498_n_j3f3ap.jpg', tag: 'ثقافت', desc: 'پبلک ریلیشنز آفیسر۔' },
  { id: 'c2', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768155742/508699317_23892628800387718_7502255543480385722_n_aqzeju.jpg', tag: 'ثقافت', desc: 'پی آر او (لاہور)۔' },
  { id: 'c3', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239457/DSC01387_Copy_tnpy1l.jpg', tag: 'ثقافت', desc: 'ثقافتی نمائش۔' },
  { id: 'c4', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239457/IMG_20170908_213053_Copy_t9vjzj.jpg', tag: 'ثقافت', desc: 'کلچرل ہال۔' },
  { id: 'c5', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239458/FIL1314_Copy_uavkr6.jpg', tag: 'ثقافت', desc: 'پروگرام آرگنائزر۔' },
  { id: 'c6', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239458/540709_463758637034731_1737868493_n_Copy_qmaenb.jpg', tag: 'ثقافت', desc: 'ثقافتی نمائش۔' },
  { id: 'c7', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239458/DSC01380_Copy_mje4hu.jpg', tag: 'ثقافت', desc: 'خانہ فرہنگ۔' },
  { id: 'c8', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239458/DSC01382_Copy_tbkklj.jpg', tag: 'ثقافت', desc: 'کلچرل ایکٹیوٹی۔' },
  { id: 'c9', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239459/IMG_20170908_213104_Copy_rngyil.jpg', tag: 'ثقافت', desc: 'ایرانی آرٹ۔' },
  { id: 'c10', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768240885/photo_2017-03-22_12-42-02_Copy_wwqxl7.jpg', tag: 'ثقافت', desc: 'گروپ فوٹو۔' },
  { id: 'c11', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768247092/_SC_4958_Copy_vljwnt.jpg', tag: 'ثقافت', desc: 'PRO Services' },
  { id: 'c12', type: 'img', category: 'culture', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768247090/_SC_4956_Copy_sxis9t.jpg', tag: 'ثقافت', desc: 'تقریب۔' },

  // MEDIA
  { id: 'm1', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768274449/radio_Pakistan_yjpqbj.jpg', tag: 'میڈیا', desc: 'ریڈیو پاکستان (FM 93)۔' },
  { id: 'm2', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223350/IMG-20180530-WA0025_Copy_lwoczg.jpg', tag: 'میڈیا', desc: 'ٹی وی ٹاک شو۔' },
  { id: 'm3', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223348/IMG_20190213_195100_Copy_frq8eu.jpg', tag: 'میڈیا', desc: 'میڈیا ڈسکشن۔' },
  { id: 'm4', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223346/IMG_20190213_194625_Copy_shfrwe.jpg', tag: 'میڈیا', desc: 'لائیو پروگرام۔' },
  { id: 'm5', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223344/IMG_20210209_180402_Copy_za3wfc.jpg', tag: 'میڈیا', desc: 'اسٹوڈیو۔' },
  { id: 'm6', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223341/IMG_20190213_194900_Copy_sjezqh.jpg', tag: 'میڈیا', desc: 'گفتگو۔' },
  { id: 'm7', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223339/IMG_20171205_141053_Copy_aokqfd.jpg', tag: 'میڈیا', desc: 'ریکارڈنگ۔' },
  { id: 'm8', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223337/111111_Copy_kbx5op.jpg', tag: 'میڈیا', desc: 'پروگرام۔' },
  { id: 'm9', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223335/1111_Copy_syqemh.jpg', tag: 'میڈیا', desc: 'میزبانی۔' },
  { id: 'm10', type: 'img', category: 'media', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768223333/00000_Copy_kbjmzv.jpg', tag: 'میڈیا', desc: 'چینل۔' },

  // MEETINGS
  { id: 'me1', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232646/wazir_betalmaal_k_saath_dr5qjc.jpg', tag: 'ملاقات', desc: 'وزیر بیت المال۔' },
  { id: 'me2', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232645/tahir_raza_bukhari_secretory_oqaf_Copy_fdqjai.jpg', tag: 'ملاقات', desc: 'سیکرٹری اوقاف۔' },
  { id: 'me3', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232644/sabiq_wazir_alaa_wa_senior_sahafi_Hassan_askari_cyaulr.jpg', tag: 'ملاقات', desc: 'حسن عسکری۔' },
  { id: 'me4', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232643/sabiq_wazir_ala_wa_speeker_punjab_manzoor_watoo_muh2ni.jpg', tag: 'ملاقات', desc: 'منظور وٹو۔' },
  { id: 'me5', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232643/sabiq_wazeer_taleem_wa_v.chansler_south_asia_university_j1bvov.jpg', tag: 'ملاقات', desc: 'سابق وزیر تعلیم۔' },
  { id: 'me6', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232641/Mosin_ali_Najafi_ki_Mazar_par_Qurani_videos_k_Iftitah_k_moqah_pr_afhing.jpg', tag: 'ملاقات', desc: 'محسن نجفی مزار۔' },
  { id: 'me7', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232641/irani_consul_general_aor_speeker_GB_yn0vod.jpg', tag: 'ملاقات', desc: 'اسپیکر جی بی۔' },
  { id: 'me8', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232641/IMG_20191107_141016_Copy_hnvmqc.jpg', tag: 'ملاقات', desc: 'ملاقات۔' },
  { id: 'me9', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232640/IMG_20191106_142828_Copy_hxufdv.jpg', tag: 'ملاقات', desc: 'میٹنگ۔' },
  { id: 'me10', type: 'img', category: 'meetings', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768232640/IMG_20170418_110304_Copy_zxsojx.jpg', tag: 'ملاقات', desc: 'یادگار۔' },

  // PLACES
  { id: 'pl1', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246940/486418377_9483967141680457_557358092856100957_n_vn84j1.jpg', tag: 'زیارت', desc: 'حج بیت اللہ۔' },
  { id: 'pl2', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768246939/473056338_9080950045315504_2084902005593648656_n_ag9h7i.jpg', tag: 'زیارت', desc: 'مدینہ منورہ۔' },
  { id: 'pl3', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239586/IMG_20170920_180927_Copy_nmnq4c.jpg', tag: 'سفر', desc: 'ایران کا سفر۔' },
  { id: 'pl4', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239586/22222_Copy_vzgbre.jpg', tag: 'سفر', desc: 'تاریخی مقام۔' },
  { id: 'pl5', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239585/IMG_20170920_175631_Copy_bxtlcq.jpg', tag: 'سفر', desc: 'سیاحت۔' },
  { id: 'pl6', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239579/IMG_20170920_115343_Copy_gdtytq.jpg', tag: 'سفر', desc: 'خوبصورت نظارہ۔' },
  { id: 'pl7', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768239578/IMG_20170919_225720_Copy_bgammb.jpg', tag: 'سفر', desc: 'رات کا منظر۔' },
  { id: 'pl8', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768218910/DSC09270_t2bsy8.jpg', tag: 'سفر', desc: 'امام خمینیؒ ہاؤس۔' },
  { id: 'pl9', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768215720/11220128_861325250611399_8058500885378346582_n_Copy_t7rd62.jpg', tag: 'سفر', desc: 'طبیعت پل۔' },
  { id: 'pl10', type: 'img', category: 'places', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768215675/10275537_756208274456431_8990279500455587178_o_Copy_fjpqlu.jpg', tag: 'سفر', desc: 'اقبالؒ کی جائے پیدائش۔' },

  // UNITY
  { id: 'u1', type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768201705/bwn_al_mazahib_meeting_pcxv3a.jpg', tag: 'اتحاد', desc: 'بین المذاہب ہم آہنگی۔' },
  { id: 'u2', type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768201705/benalmazahib_ham_ahangi_meetin_cutural_embassy_iran_Islamabad_w7inmn.jpg', tag: 'اتحاد', desc: 'وحدت میٹنگ۔' },
  { id: 'u3', type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768201705/ben_almasalik_hamahangi_par_mulaqat_otrbvr.jpg', tag: 'اتحاد', desc: 'بین المسالک اتحاد۔' },
  { id: 'u4', type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768201704/Milad_e_Mustaf_Muslim_leag_house_lahore_2023_Copy_gr6ciz.jpg', tag: 'اتحاد', desc: 'میلاد مصطفیٰؐ۔' },
  { id: 'u5', type: 'img', category: 'unity', src: 'https://res.cloudinary.com/dtqrziupt/image/upload/q_auto,f_auto/v1768118218/Ulma_wa_Mashaekh_khana_farhang_2021_rlgk2d.jpg', tag: 'اتحاد', desc: 'علمائے کرام کا اتحاد۔' },
];


export const CATEGORIES = [
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