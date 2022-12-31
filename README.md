# JS

## Exports & Imports 모듈

- default export
  ```js
  import 내가 생각하는 이름 from './파일경로'
  ```
- named export

  ```js
  // [case 1]
  import {파일 경로에 있는 변수명} from './파일경로'

  // [case 2]
  import {파일 경로에 있는 변수명 as 내가 생각하는 대체 변수} from './파일경로'

  // [case 3]
  // * 은 전체를 뜻함
  import * as 전체를 대표하는 내가 생각하는 대체 변수 from './파일경로'
  ```
