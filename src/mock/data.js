import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christina | UX Researcher', // e.g: 'Name | Developer'
  lang: 'zh-TW', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Christina',
  subtitle: 'UX Researcher',
  cta: 'My project',
};

// ABOUT DATA
export const aboutData = {
  img: 'christina.png',
  paragraphOne:
    '目前就讀國立交通大學傳播研究所，個性開朗、做事細心且認真負責，與人相處融洽，善於團隊合作，且做事充滿積極的態度，樂於接受各種挑戰。',
  paragraphTwo:
    '專攻使用者經驗與設計，在課程中學習如何做一名站在使用者角度思考的UX設計師，專為他們設計能夠改善他們需求的人機介面，也學習如何當一名UX研究員，透過訪談與分析評估，洞悉他們在情境中的感受與欲傳達的內在需求及其價值。',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '托特簡介',
    info: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0本專案與「托特 thoth」合作。托特主要是一個尋找學習夥伴的網站，透過技能交換、讀書會、家教結交新朋友、學習新知識，目標群眾是任何想進行知識交流的人。',
    info2:
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0因此，專案目的在於協助托特網站拓展其目標（增加托特網站的深度及廣度），即改善現有使用者反映的問題，並提升平台的易用性，增加用戶黏著度。',
    tab: '',
    info3: '',
    url: '/thoth',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '6 個 UX 研究方法',
    info: '根據研究目的分為兩個方向，採取對應研究方法進行探討：',
    info2:
      '1. 了解使用者樣貌、情境、與需求的角度： \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0⎼ 使用者研究(User Research) \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0⎼ 類競品分析（Comparative Analysis）\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0⎼ 問卷調查（Survey）',
    tab: '',
    info3:
      '2. 另一個面向是檢視產品的介面與互動設計：\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0⎼ 互動地圖(Interaction Map)、\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0⎼ 準則性評估（Heuristics Evaluation）\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0⎼ 易用性測試（Usability Test）',
    info4: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '互動地圖（Interaction Map）',
    info: '了解整個托特網站的操作流程，每個按鈕會跳轉至何處及相對應的交集點為何，藉此可以在操作上更加了解托特的網頁路線圖以及使用者最常停留的頁面。',
    info2: '',
    tab: '',
    info3: '',
    info4: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '使用者研究（User Research）',
    info: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0定義研究問題：為什麼大家要進行知識交流？',
    info2:
      '研究的流程包含製作訪綱、招募有知識交流經驗的人並進行訪談，最後進行親合圖的質性分析。以此探究出進行知識交流的動機分為三種：',
    tab: '（一）從他人身上學習新技能或知識，有團體約束力，幫助持續學習既有技能。\n（二）好奇不同價值觀，想接觸不同價值觀的人。\n（三）想在安全的情況下交新朋友。',
    list: '從他人身上學習新技能或知識，有團體約束力，幫助持續學習既有技能。',
    info3:
      '針對托特使用者的特質光譜，依照進行知識交流的動機不同分為三種類型的使用者，依照其重視的功能與內容製作出三位persona。',
    info4: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '類競品分析(Comparative Analysis)',
    info: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0研究目標是歸納出類競品可參考的功能與建議，挑選四項使用者常使用托特的主要功能做分析，並提供競品的截圖或操作影片範本。',
    info2:
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0例如在尋找夥伴功能中，提供使用者評價、過去活動紀錄、技能程度、交流進行方式等，會讓欲進行技能交換的使用者有更多資訊，且能有較多安全、互惠等保障。',
    tab: '',
    info3:
      '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0研究限制：不是每個人都用過所有的預選類競品產品，以敘述的方式讓團隊成員理解互動有限制性，因此在投票過程可能產生偏誤。',
    info4: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
