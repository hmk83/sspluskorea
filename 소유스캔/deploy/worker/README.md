# 소유스캔 방문 추적 Worker

이 폴더는 Cloudflare Worker 배포용 설정만 보관합니다.

## 배포 구조

Cloudflare Worker는 DB에 직접 쓰지 않고, Cloudflare 지역 정보를 헤더로 보강해 Supabase Edge Function `track-visit`로 전달합니다.
DB 쓰기 권한은 Supabase Edge Function 내부의 `SUPABASE_SERVICE_ROLE_KEY`에만 둡니다.

IPinfo Lite 토큰을 Worker Secret `IPINFO_TOKEN`으로 넣으면 Cloudflare 국가값과 한 번 더 비교해 모순 위치를 `미확인`으로 낮춥니다.

## 배포 후

배포 URL이 생성되면 `supabase-config.js`의 `trackEndpoint`를 Worker URL로 교체합니다.

```js
trackEndpoint: "https://soyu-scan-track.{workers-subdomain}.workers.dev"
```
