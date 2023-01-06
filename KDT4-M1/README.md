# Zillinks 메인 페이지 클론 코딩

## HTML, SCSS, Swiperjs 사용

## 링크 

- <a href="https://www.zillinks.com/main" target="_blank">질링스 메인 페이지</a>

- <a href="https://startling-klepon-a9cf43.netlify.app" target="_blank">DEMO</a>

## 필수 요구사항

- [x] 설명이 포함된 README.md 파일을 제공하세요!
- [x] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [x] 확인 가능한 HTML, CSS 파일 등이 모두 포함돼야 합니다!
- [x] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항
  
- [x] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex 혹은 Grid 등을 활용해보세요.
- [x] 부분적으로 BEM 방법론을 도입해보세요.
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.(JS 과제가 아니니까 가볍게 구현하시길 추천해요)
- [x] SCSS 등의 CSS 전처리도구를 도입해보세요.
- [x] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.

## 구현한 기능

- portfolios section에 swiperjs로 슬라이더 구현해 보았습니다.

- 화면 너비가 980px 미만일 때 
  - header: nav logo 작은 사이즈로 대체됩니다.
  - plugins section: plugin grid 3열에서 2열로 변경됩니다.
  - portfolios: slider per view 5개에서 3개로 감소 및 swiper-next 버튼, shade 재배치 됩니다.

## 개선할 점

- 가로 너비 656px 미만일 때 반응형 지원이 안됩니다.
- porfolios section의 .swiper 컨테이너의 넓이만 신경쓰느라 position:absolute;로 설정된 하위 요소를 반응형 웹에서 일일히 재수정 하게되는 구조적인 결함을 해결 못 했습니다. 


