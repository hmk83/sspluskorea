const SAMPLE_PROMPTS = [
  {
    id: "ours-1593",
    title: "동양 신비 손금 포스터",
    category: "운세·분석",
    thumb: "https://prompts3.com/img/ours-1593-thumb.jpg",
    desc: "손바닥 사진을 운세 해석 포스터처럼 구성하는 유형",
    prompt: "사용자가 첨부한 손바닥 사진을 바탕으로 동양적인 운세 리딩 포스터를 만든다. 손금의 주요 라인을 섬세하게 강조하고, 중앙에는 손바닥 이미지를 크게 배치한다. 주변에는 생명선, 감정선, 지능선, 운명선에 대한 짧은 한국어 해석을 정리한다. 배경은 먹색과 베이지 한지 질감, 포인트는 은은한 금색 라인으로 표현한다. 전체 분위기는 신비롭지만 과하게 무섭지 않고, 모바일에서도 글이 선명하게 읽히는 포스터 스타일."
  },
  {
    id: "ours-1583",
    title: "보그풍 패션 표지 i2i",
    category: "매거진",
    thumb: "https://prompts3.com/img/ours-1583-thumb.jpg",
    desc: "인물 사진을 고급 패션 매거진 표지로 변환하는 유형",
    prompt: "사용자가 첨부한 인물 사진을 고급 패션 매거진 표지처럼 재구성한다. 얼굴의 인상과 헤어라인은 유지하고, 조명은 전문 스튜디오 촬영처럼 세련되게 만든다. 상단에는 짧고 강한 매거진 로고를 넣고, 주변에는 패션 화보 기사 제목처럼 보이는 한글 카피를 배치한다. 컬러는 차콜, 화이트, 딥 블루를 중심으로 하고 전체 이미지는 프리미엄하고 정돈된 표지 디자인으로 완성한다."
  },
  {
    id: "ours-1602",
    title: "크레파스 러브 가족화",
    category: "가족·기념일",
    thumb: "https://prompts3.com/img/ours-1602-r8203-thumb.jpg",
    desc: "가족 사진을 따뜻한 손그림 풍경으로 바꾸는 유형",
    prompt: "첨부한 가족 사진을 따뜻한 크레파스 손그림 스타일의 기념일 일러스트로 변환한다. 가족 구성원의 분위기와 관계가 자연스럽게 느껴지도록 인물의 위치와 표정을 살린다. 배경은 작은 정원, 벤치, 하트 장식, 부드러운 햇살이 있는 장면으로 만든다. 그림체는 아이가 정성스럽게 그린 듯 순수하지만 완성도는 높게 유지한다. 중앙에는 LOVE 문구를 자연스럽게 배치하고, 전체 색감은 밝고 다정하게 표현한다."
  },
  {
    id: "ours-1571",
    title: "픽사풍 3D 셀카 캐릭터",
    category: "셀카 변신",
    thumb: "https://prompts3.com/img/ours-1571-thumb.jpg",
    desc: "셀카를 부드러운 3D 애니 캐릭터로 바꾸는 유형",
    prompt: "사용자가 첨부한 셀카 속 인물을 따뜻한 3D 애니메이션 캐릭터 초상으로 변환한다. 얼굴형, 눈매, 미소, 헤어스타일의 핵심 인상은 유지한다. 피부와 머리카락은 부드러운 3D 렌더링 질감으로 표현하고, 눈은 자연스럽게 크고 생기 있게 만든다. 배경은 은은한 파스텔 스튜디오 조명으로 처리한다. 전체 결과는 귀엽지만 유치하지 않고, 프로필 이미지로 바로 사용할 수 있는 완성도 높은 캐릭터 이미지."
  },
  {
    id: "ours-1572",
    title: "한복 아이돌 셀카 변신",
    category: "셀카 변신",
    thumb: "https://prompts3.com/img/ours-1572-thumb.jpg",
    desc: "셀카를 K-POP 한복 무대 화보로 바꾸는 유형",
    prompt: "첨부한 셀카의 얼굴 인상을 유지하면서 K-POP 아이돌 한복 무대 화보로 변환한다. 의상은 전통 한복의 선과 현대 무대 의상의 화려함을 결합한다. 딥 핑크, 아이보리, 골드 포인트를 사용하고 꽃자수 디테일을 넣는다. 배경은 대형 무대 조명과 한국적인 문양이 어우러진 장면으로 구성한다. 결과는 소셜 프로필과 포스터에 모두 어울리는 선명하고 화려한 세로형 이미지."
  },
  {
    id: "ours-1486",
    title: "로맨스 웹툰 표지",
    category: "웹툰·만화",
    thumb: "https://prompts3.com/img/ours-1486-thumb.jpg",
    desc: "남녀 주인공이 보이는 세로형 웹툰 표지 유형",
    prompt: "세로형 로맨스 웹툰 표지를 만든다. 남자 주인공과 여자 주인공을 가까운 거리의 클로즈업 구도로 배치하고, 서로에게 마음이 흔들리는 순간을 표현한다. 배경은 봄 저녁의 부드러운 빛과 꽃잎이 흩날리는 분위기다. 상단에는 작품 제목, 하단에는 짧은 부제를 넣는다. 선화는 또렷하고 채색은 부드럽게 하며, 웹툰 플랫폼 썸네일에서도 감정선이 바로 보이도록 만든다."
  },
  {
    id: "ours-1543",
    title: "사내 로맨스 엘리베이터 웹툰",
    category: "웹툰·만화",
    thumb: "https://prompts3.com/img/ours-1543-thumb.jpg",
    desc: "엘리베이터 안의 3패널 웹툰 장면 유형",
    prompt: "현대적인 회사 엘리베이터 안에서 벌어지는 사내 로맨스 웹툰 한 페이지를 만든다. 3개의 패널로 구성한다. 첫 패널은 엘리베이터가 멈춰 당황한 두 동료, 두 번째 패널은 어색한 침묵과 가까워진 거리, 세 번째 패널은 수줍은 미소와 설렘이 느껴지는 장면이다. 인물은 단정한 오피스룩을 입고, 표정 변화가 중요하다. 한국 웹툰 스타일의 깨끗한 선과 밝은 실내 조명으로 표현한다."
  },
  {
    id: "ours-1531",
    title: "노을 동아리방 애니컷",
    category: "애니 정지 컷",
    thumb: "https://prompts3.com/img/ours-1531-thumb.jpg",
    desc: "방과 후 동아리방의 애니메이션 정지 컷 유형",
    prompt: "방과 후 노을빛이 들어오는 학교 동아리방의 애니메이션 정지 컷을 만든다. 주인공은 교복을 입은 학생이며 책상 옆에 앉아 밝게 웃고 있다. 창밖의 따뜻한 오렌지빛, 책상 위의 노트와 작은 소품, 조용한 교실 분위기를 섬세하게 표현한다. 장면은 한 편의 애니메이션에서 멈춘 듯 자연스럽고, 색감은 따뜻하며 선은 깨끗하게 유지한다."
  },
  {
    id: "ours-1548",
    title: "아이스라떼 벽걸이 포스터",
    category: "카페·매장",
    thumb: "https://prompts3.com/img/ours-1548-thumb.jpg",
    desc: "메뉴 사진을 카페 단일 메뉴 포스터로 바꾸는 유형",
    prompt: "사용자가 첨부한 아이스 라떼 사진을 카페 벽걸이 메뉴 포스터로 변환한다. 컵은 중앙에 크게 배치하고 얼음과 커피 층이 맛있어 보이게 강조한다. 배경은 베이지와 브라운 톤의 미니멀한 카페 무드로 구성한다. 상단에는 메뉴 영문명 ICED LATTE, 하단에는 한글 메뉴명과 가격을 넣는다. 전체 디자인은 작은 카페에서도 바로 출력해 붙일 수 있는 깔끔한 단일 메뉴 포스터."
  },
  {
    id: "ours-1591",
    title: "비즈니스 매거진 표지",
    category: "비즈니스",
    thumb: "https://prompts3.com/img/ours-1591-thumb.jpg",
    desc: "프로필 사진을 비즈니스 매거진 표지로 구성하는 유형",
    prompt: "사용자가 첨부한 프로필 사진을 전문적인 비즈니스 매거진 표지로 재구성한다. 인물은 자신감 있는 표정과 단정한 자세로 보이게 하고, 배경은 현대적인 오피스와 은은한 조명으로 처리한다. 표지에는 리더십, 성장, 인터뷰를 암시하는 짧은 한글 헤드라인을 배치한다. 색상은 네이비, 화이트, 실버를 중심으로 신뢰감 있게 구성한다. 결과는 링크드인, 강연 소개, 회사 소개 페이지에 어울리는 이미지."
  }
];

const state = {
  selectedId: SAMPLE_PROMPTS[0].id,
  promptLines: [],
  managedLines: [],
  managedPrompts: { person: "", product: "", background: "" },
  references: {
    person: { enabled: false, name: "", dataUrl: "" },
    product: { enabled: false, name: "", dataUrl: "" },
    background: { enabled: false, name: "", dataUrl: "" }
  },
  generated: [],
  currentLightboxId: null
};

const SERVICE_ORIGIN = "http://127.0.0.1:8844";

const els = {
  topSearchInput: document.getElementById("topSearchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  categoryChips: document.getElementById("categoryChips"),
  catalogGrid: document.getElementById("catalogGrid"),
  serverBanner: document.getElementById("serverBanner"),
  serverBannerText: document.getElementById("serverBannerText"),
  detail: document.getElementById("detail"),
  backToCatalog: document.getElementById("backToCatalog"),
  selectedCategory: document.getElementById("selectedCategory"),
  selectedTitle: document.getElementById("selectedTitle"),
  detailPreviewImage: document.getElementById("detailPreviewImage"),
  previewActions: document.getElementById("previewActions"),
  previewOpen: document.getElementById("previewOpen"),
  previewDownloadWeb: document.getElementById("previewDownloadWeb"),
  previewDownloadPrint: document.getElementById("previewDownloadPrint"),
  myPreviewStrip: document.getElementById("myPreviewStrip"),
  myPreviewThumbs: document.getElementById("myPreviewThumbs"),
  communityGrid: document.getElementById("communityGrid"),
  promptLineList: document.getElementById("promptLineList"),
  addLineBtn: document.getElementById("addLineBtn"),
  promptEditor: document.getElementById("promptEditor"),
  copyPrompt: document.getElementById("copyPrompt"),
  copyPanel: document.getElementById("copyPanel"),
  copyFallbackText: document.getElementById("copyFallbackText"),
  copyPanelClose: document.getElementById("copyPanelClose"),
  resetPrompt: document.getElementById("resetPrompt"),
  personUse: document.getElementById("personUse"),
  productUse: document.getElementById("productUse"),
  backgroundUse: document.getElementById("backgroundUse"),
  personInput: document.getElementById("personInput"),
  productInput: document.getElementById("productInput"),
  backgroundInput: document.getElementById("backgroundInput"),
  personFile: document.getElementById("personFile"),
  productFile: document.getElementById("productFile"),
  backgroundFile: document.getElementById("backgroundFile"),
  productTemplatePanel: document.getElementById("productTemplatePanel"),
  productTemplateSelect: document.getElementById("productTemplateSelect"),
  productIntentInput: document.getElementById("productIntentInput"),
  ratioSelect: document.getElementById("ratioSelect"),
  moodSelect: document.getElementById("moodSelect"),
  generateBtn: document.getElementById("generateBtn"),
  statusLine: document.getElementById("statusLine"),
  gallery: document.getElementById("gallery"),
  emptyGallery: document.getElementById("emptyGallery"),
  thumbStrip: document.getElementById("thumbStrip"),
  generationModal: document.getElementById("generationModal"),
  lightbox: document.getElementById("lightbox"),
  lightboxImage: document.getElementById("lightboxImage"),
  lightboxMeta: document.getElementById("lightboxMeta"),
  lightboxTitle: document.getElementById("lightboxTitle"),
  closeLightbox: document.getElementById("closeLightbox"),
  downloadWeb: document.getElementById("downloadWeb"),
  downloadPrint: document.getElementById("downloadPrint")
};

function selectedPrompt() {
  return SAMPLE_PROMPTS.find((item) => item.id === state.selectedId) || SAMPLE_PROMPTS[0];
}

function uniqueCategories() {
  return [...new Set(SAMPLE_PROMPTS.map((item) => item.category))];
}

function escapeSvg(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapLines(text, maxChars, maxLines) {
  const words = String(text).replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines.slice(0, maxLines);
}

function splitPromptLines(text) {
  const normalized = String(text).replace(/\s+/g, " ").trim();
  if (!normalized) return [""];
  const lines = normalized.match(/[^.!?。]+[.!?。]?/g) || [normalized];
  return lines.map((line) => line.trim()).filter(Boolean);
}

function compilePromptText() {
  const values = [...els.promptLineList.querySelectorAll("textarea")]
    .map((input) => input.value.trim())
    .filter(Boolean);
  const text = values.join("\n");
  els.promptEditor.value = text;
  state.promptLines = values;
  return text;
}

function dataUrlToApiImage(dataUrl) {
  const match = String(dataUrl || "").match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return null;
  return { mimeType: match[1], data: match[2] };
}

function referencesForApi() {
  return activeReferences()
    .map((ref) => {
      const parsed = dataUrlToApiImage(ref.dataUrl);
      if (!parsed) return null;
      return {
        type: ref.type,
        label: ref.label,
        name: ref.name,
        ...parsed
      };
    })
    .filter(Boolean);
}

function apiUrl(path) {
  if (location.protocol === "file:") {
    return `${SERVICE_ORIGIN}${path}`;
  }
  return path;
}

function serviceUrlForCurrentPage() {
  return `${SERVICE_ORIGIN}/${location.hash || ""}`;
}

function setGenerationModal(open) {
  els.generationModal.classList.toggle("open", open);
  els.generationModal.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("modal-open", open);
}

function defaultOffLabel() {
  return "ON 후 이미지 첨부";
}

const REFERENCE_META = {
  person: {
    label: "인물",
    empty: "이미지 첨부"
  },
  product: {
    label: "제품사진",
    empty: "이미지 첨부"
  },
  background: {
    label: "배경",
    empty: "이미지 첨부"
  }
};

const PRODUCT_PROMPT_GROUPS = [
  {
    group: "화장품",
    items: [
      ["cosmetic-serum", "세럼 클로즈업", "첨부한 세럼 제품사진의 병 형태, 스포이드, 라벨, 투명한 유리 질감을 유지하고, 맑은 피부 광채를 강조하는 뷰티 클로즈업 소품으로 배치한다."],
      ["cosmetic-lipstick", "립스틱 화보", "첨부한 립스틱 제품사진의 컬러, 케이스 재질, 로고 방향을 유지하고, 모델의 손이나 입술 근처에 선명한 포인트 제품으로 배치한다."],
      ["cosmetic-cushion", "쿠션 팩트", "첨부한 쿠션 제품사진의 원형 케이스, 컬러, 반사 질감을 유지하고, 파우더리한 피부 표현과 함께 프리미엄 메이크업 컷으로 구성한다."],
      ["cosmetic-perfume", "향수 무드", "첨부한 향수 제품사진의 병 실루엣, 라벨, 캡 디테일을 유지하고, 빛 번짐과 섬세한 그림자로 고급 향수 캠페인처럼 연출한다."],
      ["cosmetic-cream", "크림 텍스처", "첨부한 크림 제품사진의 용기 형태와 라벨을 유지하고, 부드러운 크림 텍스처와 깨끗한 욕실 또는 화장대 무드로 배치한다."],
      ["cosmetic-mask", "마스크팩", "첨부한 마스크팩 제품사진의 패키지 컬러와 그래픽을 유지하고, 피부관리 루틴을 보여주는 깔끔한 라이프스타일 컷으로 구성한다."],
      ["cosmetic-sunscreen", "선크림 야외", "첨부한 선크림 제품사진의 튜브 형태와 라벨을 유지하고, 밝은 야외 햇살과 산뜻한 여름 무드 속 필수 제품처럼 배치한다."],
      ["cosmetic-eyeshadow", "아이섀도 팔레트", "첨부한 아이섀도 제품사진의 팔레트 색상 배열과 케이스를 유지하고, 메이크업 도구와 함께 컬러감이 돋보이게 연출한다."],
      ["cosmetic-cleanser", "클렌저 욕실", "첨부한 클렌저 제품사진의 펌프 또는 튜브 형태를 유지하고, 물방울, 세면대, 깨끗한 타월과 함께 신선한 욕실 장면으로 구성한다."],
      ["cosmetic-brand-set", "브랜드 세트", "첨부한 화장품 제품사진의 주요 형태와 컬러를 유지하고, 같은 브랜드 라인업처럼 보이는 세트 구성의 고급 제품 광고 컷으로 배치한다."]
    ]
  },
  {
    group: "음료수",
    items: [
      ["drink-can", "캔 음료", "첨부한 캔 음료 제품사진의 실루엣, 로고, 색상을 유지하고, 물방울과 차가운 조명으로 시원한 광고 컷처럼 전면 배치한다."],
      ["drink-bottle", "병 음료", "첨부한 병 음료 제품사진의 병 형태, 라벨, 액체 색감을 유지하고, 투명한 얼음과 함께 청량한 제품 중심 컷으로 구성한다."],
      ["drink-coffee", "커피 음료", "첨부한 커피 음료 제품사진의 컵 또는 병 디자인을 유지하고, 카페 테이블과 부드러운 브라운 톤의 라이프스타일 컷으로 배치한다."],
      ["drink-tea", "차 음료", "첨부한 차 음료 제품사진의 패키지와 라벨을 유지하고, 잎사귀, 유리잔, 자연광을 활용해 차분하고 건강한 무드로 구성한다."],
      ["drink-energy", "에너지 드링크", "첨부한 에너지 드링크 제품사진의 강한 컬러와 로고를 유지하고, 역동적인 조명과 스포츠 무드로 에너지감을 강조한다."],
      ["drink-sparkling", "탄산수", "첨부한 탄산수 제품사진의 병 또는 캔 형태를 유지하고, 기포, 물방울, 투명한 배경으로 깨끗하고 가벼운 이미지를 만든다."],
      ["drink-juice", "주스", "첨부한 주스 제품사진의 과일 컬러와 패키지 라벨을 유지하고, 신선한 과일 조각과 밝은 아침 식탁 장면으로 구성한다."],
      ["drink-smoothie", "스무디", "첨부한 스무디 제품사진의 컵 형태와 색감을 유지하고, 과일, 요거트, 부드러운 파스텔 배경과 함께 건강한 이미지로 배치한다."],
      ["drink-milk", "우유·유제품", "첨부한 유제품 사진의 패키지 형태와 로고를 유지하고, 흰색 톤, 시리얼, 아침 햇살을 활용해 신뢰감 있게 구성한다."],
      ["drink-menu-poster", "메뉴 포스터", "첨부한 음료 제품사진을 메뉴 포스터의 중심 이미지로 배치하고, 제품명과 가격이 들어갈 수 있는 여백을 확보한 매장용 광고 컷으로 만든다."]
    ]
  },
  {
    group: "술",
    items: [
      ["alcohol-soju", "소주", "첨부한 소주 제품사진의 병 형태, 초록 유리, 라벨을 유지하고, 차가운 물방울과 한국적인 테이블 무드로 선명하게 배치한다."],
      ["alcohol-beer", "맥주", "첨부한 맥주 제품사진의 캔 또는 병 라벨을 유지하고, 거품, 차가운 잔, 골든 톤 조명으로 청량한 광고 컷처럼 연출한다."],
      ["alcohol-wine", "와인", "첨부한 와인 제품사진의 병 실루엣, 라벨, 캡슐 컬러를 유지하고, 와인잔과 어두운 고급 레스토랑 무드로 배치한다."],
      ["alcohol-whisky", "위스키", "첨부한 위스키 제품사진의 병 형태와 라벨을 유지하고, 앰버 조명, 얼음잔, 나무 바 테이블로 프리미엄하게 구성한다."],
      ["alcohol-cocktail", "칵테일", "첨부한 칵테일 제품사진의 색감과 잔 형태를 유지하고, 바 조명과 과일 가니시가 있는 세련된 장면으로 배치한다."],
      ["alcohol-champagne", "샴페인", "첨부한 샴페인 제품사진의 병 라벨과 금속 포일을 유지하고, 축하 분위기와 반짝이는 조명 속 고급 컷으로 구성한다."],
      ["alcohol-makgeolli", "막걸리", "첨부한 막걸리 제품사진의 병 또는 팩 디자인을 유지하고, 한식 테이블, 도자기 잔, 부드러운 전통 무드로 배치한다."],
      ["alcohol-gift", "선물세트", "첨부한 주류 선물세트 제품사진의 박스와 병 구성을 유지하고, 명절 또는 프리미엄 선물 광고 컷처럼 정돈한다."],
      ["alcohol-party", "파티 장면", "첨부한 주류 제품사진을 파티 테이블의 중심 소품으로 배치하고, 네온 조명과 사람들의 분위기만 은은하게 느껴지도록 구성한다."],
      ["alcohol-poster", "주류 포스터", "첨부한 주류 제품사진의 병 라벨과 컬러를 유지하고, 성인 타깃의 고급 포스터 구성으로 제품명과 카피가 들어갈 여백을 만든다."]
    ]
  },
  {
    group: "음식",
    items: [
      ["food-burger", "버거", "첨부한 버거 제품사진의 번, 패티, 치즈, 소스 층을 유지하고, 윤기와 볼륨이 살아있는 먹음직스러운 메뉴 광고 컷으로 구성한다."],
      ["food-dessert", "디저트", "첨부한 디저트 사진의 크림, 토핑, 색감을 유지하고, 카페 접시와 부드러운 자연광으로 달콤한 분위기를 강조한다."],
      ["food-korean", "한식", "첨부한 한식 사진의 주요 재료와 담음새를 유지하고, 따뜻한 식탁 조명과 정갈한 반찬 구성으로 신뢰감 있게 연출한다."],
      ["food-noodle", "면요리", "첨부한 면요리 사진의 면발, 국물, 고명을 유지하고, 김이 오르는 따뜻한 클로즈업으로 식감을 강조한다."],
      ["food-pizza", "피자", "첨부한 피자 사진의 토핑, 치즈 늘어남, 도우 질감을 유지하고, 배달앱 썸네일에 적합한 강한 식욕 자극 컷으로 만든다."],
      ["food-chicken", "치킨", "첨부한 치킨 사진의 튀김 질감, 소스, 컬러를 유지하고, 바삭함이 돋보이는 메뉴 포스터 컷으로 구성한다."],
      ["food-salad", "샐러드", "첨부한 샐러드 사진의 채소 색감과 재료 구성을 유지하고, 깨끗한 접시와 밝은 자연광으로 건강한 이미지를 만든다."],
      ["food-packaged", "포장식품", "첨부한 포장식품 제품사진의 패키지 형태와 라벨을 유지하고, 실제 조리 예시와 함께 제품 중심 광고 컷으로 배치한다."],
      ["food-restaurant", "매장 메뉴판", "첨부한 음식 사진을 매장 메뉴판의 대표 이미지처럼 배치하고, 메뉴명과 가격을 넣을 수 있는 정돈된 여백을 확보한다."],
      ["food-delivery", "배달 썸네일", "첨부한 음식 사진의 핵심 메뉴를 크게 살리고, 모바일 배달앱 썸네일에서도 맛과 양이 바로 보이도록 선명하게 구성한다."]
    ]
  },
  {
    group: "옷",
    items: [
      ["fashion-dress", "원피스", "첨부한 원피스 제품사진의 컬러, 실루엣, 소재감을 유지하고, 모델이 자연스럽게 착용한 패션 화보 컷으로 스타일링한다."],
      ["fashion-jacket", "재킷", "첨부한 재킷 제품사진의 핏, 버튼, 칼라와 소재를 유지하고, 도시적인 배경 속 세련된 착장 컷으로 구성한다."],
      ["fashion-shirt", "셔츠", "첨부한 셔츠 제품사진의 원단 질감, 카라, 컬러를 유지하고, 깔끔한 데일리룩 또는 오피스룩 착장으로 배치한다."],
      ["fashion-hanbok", "한복", "첨부한 한복 제품사진의 선, 자수, 색 조합을 유지하고, 전통미와 현대적인 화보 조명을 결합한 착장 컷으로 만든다."],
      ["fashion-sportswear", "스포츠웨어", "첨부한 스포츠웨어 제품사진의 기능성 소재와 라인을 유지하고, 활동적인 포즈와 밝은 스포츠 무드로 구성한다."],
      ["fashion-street", "스트릿웨어", "첨부한 스트릿 의류 제품사진의 그래픽, 핏, 컬러를 유지하고, 도시 거리 배경과 트렌디한 포즈로 연출한다."],
      ["fashion-bag", "가방", "첨부한 가방 제품사진의 형태, 로고, 가죽 또는 패브릭 질감을 유지하고, 모델 착용 또는 손에 든 컷으로 자연스럽게 배치한다."],
      ["fashion-shoes", "신발", "첨부한 신발 제품사진의 실루엣, 컬러, 밑창 디테일을 유지하고, 착용 컷 또는 제품 단독 컷으로 선명하게 구성한다."],
      ["fashion-kids", "아동복", "첨부한 아동복 제품사진의 색감과 귀여운 디테일을 유지하고, 밝고 안전한 키즈 화보 무드로 자연스럽게 착용시킨다."],
      ["fashion-lookbook", "룩북", "첨부한 의류 제품사진의 핵심 디자인을 유지하고, 같은 스타일의 여러 착장으로 보이는 룩북 페이지 분위기로 구성한다."]
    ]
  },
  {
    group: "굿즈·소품",
    items: [
      ["goods-tumbler", "텀블러", "첨부한 텀블러 제품사진의 형태, 로고, 색상을 유지하고, 책상 또는 카페 테이블 위 라이프스타일 소품으로 배치한다."],
      ["goods-keyring", "키링", "첨부한 키링 제품사진의 캐릭터, 금속 고리, 컬러를 유지하고, 가방에 달린 모습 또는 귀여운 소품 컷으로 구성한다."],
      ["goods-sticker", "스티커", "첨부한 스티커 제품사진의 그래픽과 색감을 유지하고, 다이어리, 노트북, 포장지에 붙인 활용 컷으로 연출한다."],
      ["goods-phonecase", "폰케이스", "첨부한 폰케이스 제품사진의 패턴, 컬러, 카메라 홀을 유지하고, 손에 든 실제 사용 장면으로 자연스럽게 배치한다."],
      ["goods-doll", "인형", "첨부한 인형 제품사진의 표정, 색상, 형태를 유지하고, 침대나 선반 위 감성 소품 컷으로 구성한다."],
      ["goods-mug", "머그컵", "첨부한 머그컵 제품사진의 형태, 프린트, 손잡이 방향을 유지하고, 따뜻한 음료와 함께 감성적인 테이블 컷으로 배치한다."],
      ["goods-stationery", "문구류", "첨부한 문구 제품사진의 색상과 패키지를 유지하고, 책상 위 정돈된 작업 공간의 핵심 소품으로 구성한다."],
      ["goods-tech", "전자소품", "첨부한 전자소품 제품사진의 형태, 버튼, 재질을 유지하고, 미니멀한 데스크 셋업 속 제품 중심 컷으로 배치한다."],
      ["goods-candle", "캔들", "첨부한 캔들 제품사진의 용기, 라벨, 왁스 질감을 유지하고, 따뜻한 조명과 향기로운 실내 무드로 연출한다."],
      ["goods-package", "패키지 박스", "첨부한 패키지 제품사진의 박스 형태, 라벨, 색상을 유지하고, 개봉 장면 또는 선물 포장 컷처럼 정돈한다."]
    ]
  }
];

const PRODUCT_PROMPT_TEMPLATES = PRODUCT_PROMPT_GROUPS.flatMap((group) => (
  group.items.map(([id, label, prompt]) => ({
    id,
    label,
    group: group.group,
    prompt
  }))
));

function activeReferences() {
  return Object.entries(state.references)
    .filter(([, ref]) => ref.enabled && ref.dataUrl)
    .map(([type, ref]) => ({ type, label: REFERENCE_META[type].label, ...ref }));
}

function referenceSummary(refs = activeReferences()) {
  return refs.length ? refs.map((ref) => `${ref.label}: ${ref.name}`).join(" · ") : "참고 이미지 없음";
}

function generatedForCurrentPrompt() {
  return state.generated.filter((item) => item.sourceId === state.selectedId);
}

function setPreviewActionState(generatedId = "") {
  els.previewActions.hidden = !generatedId;
  els.previewActions.dataset.generatedId = generatedId;
}

function setMainPreview(src, alt, generatedId = "") {
  els.detailPreviewImage.src = src;
  els.detailPreviewImage.alt = alt;
  setPreviewActionState(generatedId);
}

function populateProductTemplates() {
  els.productTemplateSelect.innerHTML = PRODUCT_PROMPT_GROUPS.map((group) => (
    `<optgroup label="${group.group}">${group.items.map(([id, label]) => (
      `<option value="${id}">${label}</option>`
    )).join("")}</optgroup>`
  )).join("");
  els.productIntentInput.value = PRODUCT_PROMPT_TEMPLATES[0].prompt;
}

function selectedProductTemplate() {
  return PRODUCT_PROMPT_TEMPLATES.find((item) => item.id === els.productTemplateSelect.value) || PRODUCT_PROMPT_TEMPLATES[0];
}

function setUploadSwitch(type, enabled) {
  const box = document.querySelector(`[data-upload="${type}"]`);
  const switchText = box.querySelector(".use-switch em");
  if (switchText) switchText.textContent = enabled ? "ON" : "OFF";
  box.classList.toggle("is-on", enabled);
}

function resetReferenceControls() {
  const inputMap = {
    person: els.personInput,
    product: els.productInput,
    background: els.backgroundInput
  };
  const useMap = {
    person: els.personUse,
    product: els.productUse,
    background: els.backgroundUse
  };
  const labelMap = {
    person: els.personFile,
    product: els.productFile,
    background: els.backgroundFile
  };

  Object.keys(inputMap).forEach((type) => {
    const box = document.querySelector(`[data-upload="${type}"]`);
    useMap[type].checked = false;
    inputMap[type].disabled = true;
    inputMap[type].value = "";
    labelMap[type].textContent = defaultOffLabel();
    state.references[type] = { enabled: false, name: "", dataUrl: "" };
    box.style.removeProperty("--preview-image");
    box.classList.remove("is-on", "has-file");
    setUploadSwitch(type, false);
  });
  state.managedLines = [];
  state.managedPrompts = { person: "", product: "", background: "" };
  els.productTemplatePanel.hidden = true;
  els.productTemplateSelect.value = PRODUCT_PROMPT_TEMPLATES[0].id;
  els.productIntentInput.value = PRODUCT_PROMPT_TEMPLATES[0].prompt;
}

function personRoleForPrompt(item) {
  const text = `${item.title} ${item.category} ${item.prompt}`;
  if (text.includes("한복")) return "첨부한 사진의 모델이 한복을 입은 K-POP 아이돌 무대 화보의 주인공이 되도록 만든다.";
  if (text.includes("매거진") || text.includes("표지")) return "첨부한 사진의 모델을 기존 샘플의 표지 인물로 대체하고, 얼굴 인상과 헤어 분위기를 유지한 고급 화보 컷으로 만든다.";
  if (text.includes("웹툰")) return "첨부한 사진의 인물 특징을 참고해 기존 샘플의 주인공을 닮은 웹툰 캐릭터로 재구성한다.";
  if (text.includes("애니")) return "첨부한 사진의 인물 인상과 분위기를 참고해 기존 샘플의 애니메이션 주인공으로 자연스럽게 바꾼다.";
  if (text.includes("가족")) return "첨부한 인물 사진의 관계와 표정 분위기를 유지해 기존 샘플의 가족 또는 기념일 장면에 맞게 재구성한다.";
  return "첨부한 인물 사진의 얼굴 인상, 표정, 헤어와 분위기를 유지하고 기존 샘플의 주인공 역할을 첨부 인물로 대체한다.";
}

function backgroundLineForPrompt() {
  return "첨부한 배경 사진의 공간 구조, 색감, 질감과 조명 방향을 참고해 기존 배경 프롬프트를 같은 분위기의 장면으로 수정한다.";
}

function productLineForPrompt() {
  return (els.productIntentInput.value || PRODUCT_PROMPT_TEMPLATES[0].prompt).trim();
}

function isPersonLine(line) {
  return /(인물|모델|셀카|프로필|주인공|학생|가족|여자|남자|얼굴|표정)/.test(line);
}

function isBackgroundLine(line) {
  return /(배경|장면|공간|스튜디오|조명|카페|오피스|학교|정원|실내|야외|풍경)/.test(line);
}

function replaceFirstLine(lines, predicate, replacement) {
  const next = [...lines];
  const index = next.findIndex(predicate);
  if (index >= 0) next[index] = replacement;
  else next.push(replacement);
  return next;
}

function syncReferencePromptLines() {
  const current = compilePromptText().split("\n").filter(Boolean);
  let baseLines = current.filter((line) => {
    const isInactivePerson = line === state.managedPrompts.person && !state.references.person.dataUrl;
    const isInactiveProduct = line === state.managedPrompts.product && !state.references.product.dataUrl;
    const isInactiveBackground = line === state.managedPrompts.background && !state.references.background.dataUrl;
    const isChangedProduct = line === state.managedPrompts.product && line !== productLineForPrompt();
    return !(isInactivePerson || isInactiveProduct || isInactiveBackground || isChangedProduct);
  });
  const item = selectedPrompt();
  const nextManagedLines = [];
  const nextManagedPrompts = { person: "", product: "", background: "" };

  if (state.references.person.enabled && state.references.person.dataUrl) {
    const line = personRoleForPrompt(item);
    baseLines = replaceFirstLine(baseLines, (row) => row === state.managedPrompts.person || isPersonLine(row), line);
    nextManagedLines.push(line);
    nextManagedPrompts.person = line;
  }

  if (state.references.background.enabled && state.references.background.dataUrl) {
    const line = backgroundLineForPrompt();
    const protectedLines = [state.managedPrompts.person, state.managedPrompts.product].filter(Boolean);
    baseLines = replaceFirstLine(baseLines, (row) => {
      if (row === state.managedPrompts.background) return true;
      if (protectedLines.includes(row)) return false;
      return isBackgroundLine(row);
    }, line);
    nextManagedLines.push(line);
    nextManagedPrompts.background = line;
  }

  if (state.references.product.enabled && state.references.product.dataUrl) {
    const line = productLineForPrompt();
    baseLines = replaceFirstLine(baseLines, (row) => row === state.managedPrompts.product, line);
    if (!baseLines.includes(line)) baseLines.push(line);
    nextManagedLines.push(line);
    nextManagedPrompts.product = line;
  }

  state.managedLines = nextManagedLines;
  state.managedPrompts = nextManagedPrompts;
  state.promptLines = baseLines;
  renderPromptLines();
}

function ratioSize(ratio) {
  const map = {
    "1:1": [1200, 1200],
    "4:5": [1200, 1500],
    "16:9": [1600, 900],
    "9:16": [1080, 1920]
  };
  return map[ratio] || map["4:5"];
}

function moodPalette(mood, category) {
  const categoryAccent = {
    "운세·분석": ["#13213a", "#8a6dff", "#f7d377"],
    "매거진": ["#101726", "#2457e6", "#ffffff"],
    "가족·기념일": ["#ffe0b8", "#00a7a7", "#d94462"],
    "셀카 변신": ["#e8f0ff", "#2457e6", "#ffb020"],
    "웹툰·만화": ["#fff1f5", "#e85d75", "#2457e6"],
    "애니 정지 컷": ["#fff5df", "#ff8a00", "#2457e6"],
    "카페·매장": ["#f5e5cf", "#8b5a2b", "#ffffff"],
    "비즈니스": ["#e9f1ff", "#0b2b64", "#00a7a7"]
  };
  const base = categoryAccent[category] || ["#eef3fb", "#2457e6", "#00a7a7"];
  const moodBoost = {
    clean: base,
    cinematic: ["#111827", base[1], "#f7d377"],
    bright: ["#ffffff", base[2], base[1]],
    premium: ["#0e1320", "#d7b56d", base[1]]
  };
  return moodBoost[mood] || base;
}

function buildGeneratedSvg(item, promptText, ratio, mood, refs) {
  const [width, height] = ratioSize(ratio);
  const [bg, primary, accent] = moodPalette(mood, item.category);
  const titleLines = wrapLines(item.title, 14, 3);
  const promptLines = wrapLines(promptText, ratio === "16:9" ? 34 : 22, 5);
  const isDark = bg.startsWith("#0") || bg.startsWith("#1");
  const textColor = isDark ? "#ffffff" : "#162033";
  const subColor = isDark ? "rgba(255,255,255,.72)" : "#5f6d82";
  const stamp = new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
  const titleY = Math.round(height * .12);
  const titleSize = Math.max(42, Math.round(width * .06));
  const bodySize = Math.max(24, Math.round(width * .026));
  const inset = Math.round(width * .075);
  const photoW = Math.round(width * (ratio === "16:9" ? .36 : .62));
  const photoH = Math.round(height * (ratio === "16:9" ? .62 : .36));
  const photoX = ratio === "16:9" ? width - photoW - inset : Math.round((width - photoW) / 2);
  const photoY = ratio === "16:9" ? Math.round(height * .18) : Math.round(height * .42);
  const bodyY = ratio === "16:9" ? Math.round(height * .34) : Math.round(height * .78);
  const refLines = wrapLines(referenceSummary(refs), ratio === "16:9" ? 42 : 24, 2);
  const personRef = refs.find((ref) => ref.type === "person");
  const productRef = refs.find((ref) => ref.type === "product");
  const backgroundRef = refs.find((ref) => ref.type === "background");
  const hasRefs = Boolean(personRef || productRef || backgroundRef);
  const productW = Math.round(photoW * .38);
  const productH = Math.round(photoH * .46);
  const productX = photoX + photoW - productW - 28;
  const productY = photoY + photoH - productH - 28;

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${bg}"/>
        <stop offset=".58" stop-color="${primary}" stop-opacity=".34"/>
        <stop offset="1" stop-color="${accent}" stop-opacity=".22"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="30" stdDeviation="28" flood-color="#000000" flood-opacity=".22"/>
      </filter>
      <clipPath id="photoClip">
        <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" rx="38"/>
      </clipPath>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)"/>
    <circle cx="${Math.round(width * .12)}" cy="${Math.round(height * .18)}" r="${Math.round(width * .18)}" fill="${accent}" opacity=".18"/>
    <circle cx="${Math.round(width * .86)}" cy="${Math.round(height * .84)}" r="${Math.round(width * .22)}" fill="${primary}" opacity=".18"/>
    <rect x="${inset}" y="${inset}" width="${width - inset * 2}" height="${height - inset * 2}" rx="42" fill="none" stroke="${isDark ? "rgba(255,255,255,.24)" : "rgba(22,32,51,.18)"}" stroke-width="3"/>
    <text x="${inset}" y="${Math.round(inset * .84)}" fill="${subColor}" font-size="${Math.max(22, Math.round(width * .018))}" font-weight="800" font-family="Pretendard, Apple SD Gothic Neo, sans-serif" letter-spacing="2">${escapeSvg(item.category)} · ${escapeSvg(stamp)}</text>
    ${titleLines.map((line, i) => `<text x="${inset}" y="${titleY + i * titleSize * 1.1}" fill="${textColor}" font-size="${titleSize}" font-weight="900" font-family="Pretendard, Apple SD Gothic Neo, sans-serif">${escapeSvg(line)}</text>`).join("")}
    <g filter="url(#shadow)">
      <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" rx="38" fill="rgba(255,255,255,.5)"/>
      ${hasRefs ? `
        <g clip-path="url(#photoClip)">
          <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" fill="${isDark ? "#151c2d" : "#eef3fb"}"/>
          ${backgroundRef ? `<image href="${escapeSvg(backgroundRef.dataUrl)}" x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" preserveAspectRatio="xMidYMid slice"/>` : ""}
          <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" fill="${primary}" opacity="${backgroundRef ? ".16" : ".08"}"/>
          ${personRef ? `<image href="${escapeSvg(personRef.dataUrl)}" x="${photoX}" y="${photoY}" width="${productRef ? Math.round(photoW * .72) : photoW}" height="${photoH}" preserveAspectRatio="xMidYMid slice"/>` : ""}
          ${!personRef && !backgroundRef && productRef ? `<rect x="${photoX + 22}" y="${photoY + 22}" width="${photoW - 44}" height="${photoH - 44}" rx="30" fill="rgba(255,255,255,.82)"/>` : ""}
        </g>
        ${productRef ? `
          <rect x="${productX}" y="${productY}" width="${productW}" height="${productH}" rx="26" fill="rgba(255,255,255,.9)" stroke="rgba(255,255,255,.8)" stroke-width="4"/>
          <image href="${escapeSvg(productRef.dataUrl)}" x="${productX + 18}" y="${productY + 18}" width="${productW - 36}" height="${productH - 36}" preserveAspectRatio="xMidYMid meet"/>
        ` : ""}
        <rect x="${photoX + 22}" y="${photoY + 22}" width="${Math.min(250, photoW - 44)}" height="52" rx="26" fill="rgba(255,255,255,.78)"/>
        <text x="${photoX + 48}" y="${photoY + 56}" fill="#172033" font-size="${Math.max(18, Math.round(width * .015))}" font-weight="950" font-family="Pretendard, Apple SD Gothic Neo, sans-serif">프롬프트 반영 시안</text>
      ` : `
        <rect x="${photoX + 22}" y="${photoY + 22}" width="${photoW - 44}" height="${photoH - 44}" rx="30" fill="${isDark ? "rgba(255,255,255,.12)" : "rgba(36,87,230,.10)"}"/>
        <circle cx="${photoX + Math.round(photoW * .34)}" cy="${photoY + Math.round(photoH * .38)}" r="${Math.round(Math.min(photoW, photoH) * .2)}" fill="${accent}" opacity=".82"/>
        <circle cx="${photoX + Math.round(photoW * .64)}" cy="${photoY + Math.round(photoH * .58)}" r="${Math.round(Math.min(photoW, photoH) * .25)}" fill="${primary}" opacity=".76"/>
        <path d="M ${photoX + Math.round(photoW * .14)} ${photoY + Math.round(photoH * .78)} C ${photoX + Math.round(photoW * .32)} ${photoY + Math.round(photoH * .54)}, ${photoX + Math.round(photoW * .56)} ${photoY + Math.round(photoH * .93)}, ${photoX + Math.round(photoW * .86)} ${photoY + Math.round(photoH * .28)}" fill="none" stroke="${textColor}" stroke-width="${Math.max(5, Math.round(width * .008))}" stroke-linecap="round" opacity=".78"/>
        <text x="${photoX + Math.round(photoW / 2)}" y="${photoY + Math.round(photoH / 2) + Math.round(width * .024)}" text-anchor="middle" fill="${textColor}" font-size="${Math.max(56, Math.round(width * .07))}" font-weight="950" font-family="Pretendard, Apple SD Gothic Neo, sans-serif">${escapeSvg(item.category.slice(0, 2))}</text>
      `}
      <rect x="${photoX}" y="${photoY}" width="${photoW}" height="${photoH}" rx="38" fill="none" stroke="rgba(255,255,255,.62)" stroke-width="5"/>
    </g>
    <g>
      ${promptLines.map((line, i) => `<text x="${inset}" y="${bodyY + i * bodySize * 1.42}" fill="${subColor}" font-size="${bodySize}" font-weight="700" font-family="Pretendard, Apple SD Gothic Neo, sans-serif">${escapeSvg(line)}</text>`).join("")}
    </g>
    <g>
      ${refLines.map((line, i) => `<text x="${inset}" y="${height - inset - 132 + i * Math.max(22, Math.round(width * .02)) * 1.3}" fill="${subColor}" font-size="${Math.max(20, Math.round(width * .017))}" font-weight="800" font-family="Pretendard, Apple SD Gothic Neo, sans-serif">${escapeSvg(line)}</text>`).join("")}
    </g>
    <rect x="${inset}" y="${height - inset - 76}" width="${Math.min(420, width - inset * 2)}" height="54" rx="27" fill="${isDark ? "rgba(255,255,255,.14)" : "rgba(255,255,255,.76)"}"/>
    <text x="${inset + 28}" y="${height - inset - 41}" fill="${textColor}" font-size="${Math.max(22, Math.round(width * .018))}" font-weight="900" font-family="Pretendard, Apple SD Gothic Neo, sans-serif">Prompt Atelier 생성 시안</text>
  </svg>`;
}

function svgToDataUrl(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function filteredPrompts() {
  const query = els.topSearchInput.value.trim().toLowerCase();
  const cat = els.categoryFilter.value;
  return SAMPLE_PROMPTS.filter((item) => {
    const haystack = `${item.title} ${item.category} ${item.desc} ${item.prompt}`.toLowerCase();
    return (!query || haystack.includes(query)) && (cat === "all" || item.category === cat);
  });
}

function renderCatalog() {
  els.catalogGrid.innerHTML = "";
  filteredPrompts().forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "sample-card";
    card.tabIndex = 0;
    card.style.setProperty("--pin-h", `${[330, 430, 380, 500, 360, 455][index % 6]}px`);
    card.innerHTML = `
      <img src="${item.thumb}" alt="${item.title} 미리보기" loading="lazy">
      <div class="sample-body">
        <span>${item.category}</span>
        <h3>${item.title}</h3>
        <button type="button">이미지 제작</button>
      </div>
    `;
    const goDetail = () => {
      openDetail(item.id);
    };
    card.addEventListener("click", goDetail);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        goDetail();
      }
    });
    els.catalogGrid.appendChild(card);
  });
}

function renderCategories() {
  uniqueCategories().forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    els.categoryFilter.appendChild(opt);
  });
  renderCategoryChips();
}

function renderCategoryChips() {
  els.categoryChips.innerHTML = "";
  const cats = ["all", ...uniqueCategories()];
  cats.forEach((cat) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.classList.toggle("active", els.categoryFilter.value === cat);
    chip.textContent = cat === "all" ? "전체" : cat;
    chip.addEventListener("click", () => {
      els.categoryFilter.value = cat;
      renderCategoryChips();
      renderCatalog();
    });
    els.categoryChips.appendChild(chip);
  });
}

function selectPrompt(id) {
  state.selectedId = id;
  const item = selectedPrompt();
  resetReferenceControls();
  els.selectedCategory.textContent = item.category;
  els.selectedTitle.textContent = item.title;
  const latest = [...state.generated].reverse().find((row) => row.sourceId === item.id);
  setMainPreview(
    latest ? latest.dataUrl : item.thumb,
    latest ? `${item.title} 내가 제작한 이미지` : `${item.title} 미리보기`,
    latest ? latest.id : ""
  );
  state.promptLines = splitPromptLines(item.prompt);
  renderPromptLines();
  renderMyPreviews();
  renderCommunityImages();
  els.statusLine.textContent = "";
  els.copyPanel.hidden = true;
}

function renderPromptLines() {
  els.promptLineList.innerHTML = "";
  state.promptLines.forEach((line, index) => {
    const row = document.createElement("div");
    row.className = "prompt-line";
    row.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <textarea rows="2" spellcheck="false"></textarea>
      <button class="line-delete" type="button" aria-label="${index + 1}번 프롬프트 삭제" title="프롬프트 삭제">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    `;
    const input = row.querySelector("textarea");
    input.value = line;
    input.addEventListener("input", compilePromptText);
    row.querySelector(".line-delete").addEventListener("click", () => removePromptLine(index));
    els.promptLineList.appendChild(row);
  });
  compilePromptText();
}

function removePromptLine(index) {
  compilePromptText();
  state.promptLines = state.promptLines.filter((_, rowIndex) => rowIndex !== index);
  renderPromptLines();
}

function openDetail(id, updateHash = true) {
  selectPrompt(id);
  document.body.classList.add("detail-mode");
  els.detail.hidden = false;
  if (updateHash) history.pushState(null, "", `#detail=${encodeURIComponent(id)}`);
  window.scrollTo(0, 0);
  window.setTimeout(() => window.scrollTo(0, 0), 50);
}

function closeDetail() {
  document.body.classList.remove("detail-mode");
  els.detail.hidden = true;
  history.pushState(null, "", "#catalog");
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function addPromptLine() {
  state.promptLines = [...state.promptLines, ""];
  renderPromptLines();
  const last = els.promptLineList.querySelector(".prompt-line:last-child textarea");
  if (last) last.focus();
}

function clearReferenceFile(type) {
  const inputMap = {
    person: els.personInput,
    product: els.productInput,
    background: els.backgroundInput
  };
  const labelMap = {
    person: els.personFile,
    product: els.productFile,
    background: els.backgroundFile
  };
  const box = document.querySelector(`[data-upload="${type}"]`);
  inputMap[type].value = "";
  state.references[type] = { enabled: true, name: "", dataUrl: "" };
  labelMap[type].textContent = REFERENCE_META[type].empty;
  box.style.removeProperty("--preview-image");
  box.classList.remove("has-file");
  syncReferencePromptLines();
}

function handleReferenceUpload(type, file) {
  const labelMap = {
    person: els.personFile,
    product: els.productFile,
    background: els.backgroundFile
  };
  const box = document.querySelector(`[data-upload="${type}"]`);
  const ref = state.references[type];
  if (box.classList.contains("has-file")) {
    clearReferenceFile(type);
    return;
  }
  if (!ref.enabled) {
    labelMap[type].textContent = defaultOffLabel();
    return;
  }
  if (!file) {
    state.references[type] = { enabled: true, name: "", dataUrl: "" };
    labelMap[type].textContent = REFERENCE_META[type].empty;
    box.style.removeProperty("--preview-image");
    box.classList.remove("has-file");
    syncReferencePromptLines();
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    state.references[type] = {
      enabled: true,
      name: file.name,
      dataUrl: String(reader.result || "")
    };
    labelMap[type].textContent = "삭제";
    box.style.removeProperty("--preview-image");
    box.classList.add("has-file");
    if (type === "product" && !els.productIntentInput.value.trim()) {
      els.productIntentInput.value = selectedProductTemplate().prompt;
    }
    syncReferencePromptLines();
  };
  reader.readAsDataURL(file);
}

function handleReferenceToggle(type, enabled) {
  const inputMap = {
    person: els.personInput,
    product: els.productInput,
    background: els.backgroundInput
  };
  const labelMap = {
    person: els.personFile,
    product: els.productFile,
    background: els.backgroundFile
  };
  const box = document.querySelector(`[data-upload="${type}"]`);
  inputMap[type].disabled = !enabled;
  setUploadSwitch(type, enabled);
  if (!enabled) {
    inputMap[type].value = "";
    state.references[type] = { enabled: false, name: "", dataUrl: "" };
    labelMap[type].textContent = defaultOffLabel();
    box.style.removeProperty("--preview-image");
    box.classList.remove("has-file");
  } else {
    state.references[type] = { enabled: true, name: "", dataUrl: "" };
    labelMap[type].textContent = REFERENCE_META[type].empty;
  }
  if (type === "product") {
    els.productTemplatePanel.hidden = !enabled;
    if (enabled && !els.productIntentInput.value.trim()) {
      els.productIntentInput.value = selectedProductTemplate().prompt;
    }
  }
  syncReferencePromptLines();
}

function renderGallery() {
  els.gallery.hidden = !state.generated.length;
  els.emptyGallery.style.display = "none";
  els.thumbStrip.innerHTML = "";
  state.generated.forEach((item) => {
    const card = document.createElement("article");
    card.className = "thumb-card";
    card.innerHTML = `
      <button type="button" aria-label="${item.title} 크게 보기">
        <img src="${item.dataUrl}" alt="${item.title} 생성 이미지">
      </button>
      <div class="thumb-info">
        <strong>${item.title}</strong>
        <span>${item.ratio} · ${item.moodLabel}</span>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => openLightbox(item.id));
    els.thumbStrip.prepend(card);
  });
}

function renderMyPreviews() {
  const items = generatedForCurrentPrompt().slice().reverse();
  els.myPreviewStrip.hidden = !items.length;
  els.myPreviewThumbs.innerHTML = "";
  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === 0 ? "active" : "";
    button.setAttribute("aria-label", `${item.title} 내가 제작한 이미지 보기`);
    button.innerHTML = `<img src="${item.dataUrl}" alt="">`;
    button.addEventListener("click", () => {
      setMainPreview(item.dataUrl, `${item.title} 내가 제작한 이미지`, item.id);
      openLightbox(item.id);
      [...els.myPreviewThumbs.querySelectorAll("button")].forEach((row) => row.classList.remove("active"));
      button.classList.add("active");
    });
    els.myPreviewThumbs.appendChild(button);
  });
}

function communityItems() {
  const current = selectedPrompt();
  const sameCategory = SAMPLE_PROMPTS.filter((item) => item.category === current.category && item.id !== current.id);
  const fallback = SAMPLE_PROMPTS.filter((item) => item.id !== current.id);
  return [...sameCategory, ...fallback].slice(0, 8);
}

function renderCommunityImages() {
  els.communityGrid.innerHTML = "";
  communityItems().forEach((item) => {
    const card = document.createElement("article");
    card.className = "community-card";
    card.innerHTML = `
      <button type="button" aria-label="${item.title} 프롬프트 활용">
        <img src="${item.thumb}" alt="${item.title} 제작 예시">
        <span>${item.category}</span>
        <strong>${item.title}</strong>
        <em>프롬프트 활용</em>
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      state.promptLines = splitPromptLines(item.prompt);
      renderPromptLines();
      els.statusLine.textContent = `${item.title} 프롬프트를 적용했습니다.`;
      document.querySelector(".editor-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    els.communityGrid.appendChild(card);
  });
}

async function generateImage() {
  if (location.protocol === "file:") {
    els.statusLine.textContent = "이미지 제작이 가능한 서비스 주소로 이동합니다.";
    location.href = serviceUrlForCurrentPage();
    return;
  }

  const item = selectedPrompt();
  const promptText = compilePromptText().trim();
  if (!promptText) {
    els.statusLine.textContent = "프롬프트를 입력하세요";
    return;
  }

  els.generateBtn.disabled = true;
  els.generateBtn.textContent = "생성 중";
  els.statusLine.textContent = "";
  setGenerationModal(true);

  try {
    const ratio = els.ratioSelect.value;
    const mood = els.moodSelect.value;
    const moodLabel = els.moodSelect.options[els.moodSelect.selectedIndex].textContent;
    const references = activeReferences();
    const response = await fetch(apiUrl("/api/generate"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: promptText,
        ratio,
        mood,
        references: referencesForApi()
      })
    });
    const result = await response.json();
    if (!response.ok || !result.image) {
      throw new Error(result.error || "이미지 생성에 실패했습니다.");
    }
    const generated = {
      id: `${item.id}-${Date.now()}`,
      sourceId: item.id,
      title: item.title,
      category: item.category,
      prompt: promptText,
      ratio,
      mood,
      moodLabel,
      references: referenceSummary(references),
      svg: "",
      dataUrl: result.image,
      model: result.model || "Google Gemini"
    };
    state.generated.push(generated);
    renderGallery();
    setMainPreview(generated.dataUrl, `${generated.title} 내가 제작한 이미지`, generated.id);
    renderMyPreviews();
    els.statusLine.textContent = "생성 완료";
  } catch (error) {
    els.statusLine.textContent = error.message || "이미지 생성 중 오류가 발생했습니다.";
  } finally {
    setGenerationModal(false);
    els.generateBtn.disabled = false;
    els.generateBtn.textContent = "이미지 제작";
  }
}

function openLightbox(id) {
  const item = state.generated.find((row) => row.id === id);
  if (!item) return;
  state.currentLightboxId = id;
  els.lightboxImage.src = item.dataUrl;
  els.lightboxImage.alt = `${item.title} 생성 이미지`;
  els.lightboxMeta.textContent = `${item.category} · ${item.ratio} · ${item.moodLabel}`;
  els.lightboxTitle.textContent = item.title;
  els.lightbox.classList.add("open");
  els.lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  els.lightbox.classList.remove("open");
  els.lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  state.currentLightboxId = null;
}

async function downloadGenerated(id, kind) {
  const item = state.generated.find((row) => row.id === id);
  if (!item) return;
  const scale = kind === "print" ? 2.2 : 1;
  const [w, h] = ratioSize(item.ratio);
  const blob = item.svg
    ? await rasterizeSvg(item.svg, Math.round(w * scale), Math.round(h * scale))
    : await rasterizeDataUrl(item.dataUrl, Math.round(w * scale), Math.round(h * scale));
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${item.title.replace(/[^\w가-힣-]+/g, "-")}-${kind === "print" ? "print" : "web"}.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function downloadCurrent(kind) {
  await downloadGenerated(state.currentLightboxId, kind);
}

function rasterizeDataUrl(dataUrl, width, height) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      const sourceRatio = img.width / img.height;
      const targetRatio = width / height;
      let drawWidth = width;
      let drawHeight = height;
      let drawX = 0;
      let drawY = 0;
      if (sourceRatio > targetRatio) {
        drawHeight = height;
        drawWidth = Math.round(height * sourceRatio);
        drawX = Math.round((width - drawWidth) / 2);
      } else {
        drawWidth = width;
        drawHeight = Math.round(width / sourceRatio);
        drawY = Math.round((height - drawHeight) / 2);
      }
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("이미지를 만들 수 없습니다."));
      }, "image/png", 0.94);
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function rasterizeSvg(svg, width, height) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("이미지를 만들 수 없습니다."));
      }, "image/png", 0.94);
    };
    img.onerror = reject;
    img.src = svgToDataUrl(svg);
  });
}

async function copyPromptText() {
  const text = compilePromptText().trim();
  if (!text) {
    els.statusLine.textContent = "복사할 프롬프트가 없습니다.";
    return;
  }

  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "1px";
    textarea.style.height = "1px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const copied = document.execCommand("copy");
    textarea.remove();
    if (!copied) throw new Error("copy failed");
  };

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy();
    }
    els.statusLine.textContent = "프롬프트를 복사했습니다.";
    els.copyPanel.hidden = true;
  } catch {
    try {
      fallbackCopy();
      els.statusLine.textContent = "프롬프트를 복사했습니다.";
      els.copyPanel.hidden = true;
    } catch {
      els.copyFallbackText.value = text;
      els.copyPanel.hidden = false;
      els.copyFallbackText.focus();
      els.copyFallbackText.select();
      els.statusLine.textContent = "브라우저 권한 때문에 자동 복사가 제한되어 전체 프롬프트를 선택해두었습니다.";
    }
  }
}

function selectedPreviewGeneratedId() {
  return els.previewActions.dataset.generatedId || "";
}

async function checkServerHealth() {
  if (location.protocol !== "file:") return;
  try {
    const response = await fetch(apiUrl("/api/health"), { cache: "no-store" });
    const result = await response.json();
    if (response.ok && result.ready) {
      location.replace(serviceUrlForCurrentPage());
      return;
    }
    els.serverBannerText.textContent = "서버는 열려 있지만 이미지 생성 키가 준비되지 않았습니다. .env.local의 GEMINI_API_KEY를 확인해주세요.";
  } catch {
    els.serverBannerText.textContent = "현재 파일로 열려 있습니다. 이미지 제작은 터미널에서 node server.js 실행 후 http://127.0.0.1:8844/ 주소에서 진행해주세요.";
  }
  els.serverBanner.hidden = false;
}

function init() {
  populateProductTemplates();
  renderCategories();
  renderCatalog();
  selectPrompt(state.selectedId);
  renderGallery();
  checkServerHealth();

  const syncSearch = () => {
    renderCatalog();
  };
  els.topSearchInput.addEventListener("input", syncSearch);
  els.categoryFilter.addEventListener("change", () => {
    renderCategoryChips();
    renderCatalog();
  });
  els.backToCatalog.addEventListener("click", closeDetail);
  els.copyPrompt.addEventListener("click", copyPromptText);
  els.copyPanelClose.addEventListener("click", () => {
    els.copyPanel.hidden = true;
  });
  els.resetPrompt.addEventListener("click", () => selectPrompt(state.selectedId));
  els.addLineBtn.addEventListener("click", addPromptLine);
  els.personUse.addEventListener("change", (event) => handleReferenceToggle("person", event.target.checked));
  els.productUse.addEventListener("change", (event) => handleReferenceToggle("product", event.target.checked));
  els.backgroundUse.addEventListener("change", (event) => handleReferenceToggle("background", event.target.checked));
  els.personInput.addEventListener("change", (event) => handleReferenceUpload("person", event.target.files[0]));
  els.productInput.addEventListener("change", (event) => handleReferenceUpload("product", event.target.files[0]));
  els.backgroundInput.addEventListener("change", (event) => handleReferenceUpload("background", event.target.files[0]));
  els.productTemplateSelect.addEventListener("change", () => {
    els.productIntentInput.value = selectedProductTemplate().prompt;
    syncReferencePromptLines();
  });
  els.productIntentInput.addEventListener("input", syncReferencePromptLines);
  els.generateBtn.addEventListener("click", generateImage);
  els.previewOpen.addEventListener("click", () => openLightbox(selectedPreviewGeneratedId()));
  els.previewDownloadWeb.addEventListener("click", () => downloadGenerated(selectedPreviewGeneratedId(), "web"));
  els.previewDownloadPrint.addEventListener("click", () => downloadGenerated(selectedPreviewGeneratedId(), "print"));
  els.closeLightbox.addEventListener("click", closeLightbox);
  els.lightbox.addEventListener("click", (event) => {
    if (event.target === els.lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
  els.downloadWeb.addEventListener("click", () => downloadCurrent("web"));
  els.downloadPrint.addEventListener("click", () => downloadCurrent("print"));
  document.querySelector(".brand").addEventListener("click", () => {
    if (document.body.classList.contains("detail-mode")) {
      document.body.classList.remove("detail-mode");
      els.detail.hidden = true;
    }
  });
  document.querySelectorAll('a[href="#detail"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openDetail(state.selectedId);
    });
  });
  document.querySelectorAll('a[href="#catalog"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("detail-mode")) {
        document.body.classList.remove("detail-mode");
        els.detail.hidden = true;
      }
    });
  });

  const detailMatch = location.hash.match(/^#detail=(.+)$/);
  if (detailMatch) {
    const id = decodeURIComponent(detailMatch[1]);
    if (SAMPLE_PROMPTS.some((item) => item.id === id)) openDetail(id, false);
  }
}

init();
