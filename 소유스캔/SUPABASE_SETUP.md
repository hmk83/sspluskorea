# 소유스캔 Supabase 설정

## 1. 브라우저에 넣을 값

`supabase-config.js`에 아래 두 값을 입력합니다.

```js
window.SOYU_SUPABASE_CONFIG = {
  url: "https://프로젝트-ref.supabase.co",
  anonKey: "public anon key",
  adminEmail: "admin@soyou-scan.local",
  inquiryTable: "inquiries",
  pageViewTable: "page_views",
  trackEndpoint: "https://프로젝트-ref.supabase.co/functions/v1/track-visit"
};
```

`sbp_`로 시작하는 키는 브라우저 HTML에 넣지 않습니다.

## 2. DB 테이블과 정책

Supabase SQL Editor에서 `supabase-setup.sql` 내용을 실행합니다.

방문 통계까지 사용할 경우 `supabase-analytics.sql`도 실행합니다.

## 2-1. 방문 추적 함수

`supabase/functions/track-visit/index.ts`를 Supabase Edge Function `track-visit`로 배포합니다.

권장 설정:

- Function slug: `track-visit`
- JWT verification: off
- 브라우저에는 anon key만 노출
- DB 쓰기는 Edge Function 내부 service role로 처리

현재 랜딩 3개 페이지는 `soyu-analytics.js`를 통해 이 함수로 방문 이벤트를 전송합니다.

도시/지역 단위 통계까지 안정적으로 필요하면 `deploy/cloudflare-worker-track-visit.js`를 Cloudflare Worker로 배포하고 `trackEndpoint`를 Worker URL로 변경합니다.
Cloudflare Worker는 `request.cf` 위치 값을 받아 `country`, `region`, `city`를 더 정확히 저장할 수 있습니다.

저장 항목:

- 유입 페이지: `index-1`, `index-2`, `index-3`
- 접속 시간
- 기기 유형
- 국가, 지역, 도시
- referrer
- IP는 원문 저장 없이 해시만 저장

## 3. 관리자 계정

Supabase Authentication에서 사용자를 생성합니다.

- Email: `admin@soyou-scan.local`
- Password: Supabase Auth에 저장된 관리자 비밀번호
- User metadata:

```json
{
  "role": "admin"
}
```

관리자 페이지에서는 아이디 `admin`과 Supabase Auth에 저장된 관리자 비밀번호로 로그인합니다.

## 4. 페이지 배포

Supabase Storage에도 HTML 파일 업로드는 가능하지만 정적 사이트 호스팅 전용 기능은 약합니다.
상용 랜딩 페이지는 Cloudflare Pages, Vercel, Netlify, GitHub Pages 중 하나가 운영에 더 적합합니다.

방문 지역 통계가 중요하면 Cloudflare Pages 또는 Vercel처럼 요청 지역 헤더를 제공하는 호스팅을 권장합니다.
정적 페이지 3개는 그대로 배포하고, 문의/통계 데이터는 Supabase로 통합 저장하면 됩니다.
