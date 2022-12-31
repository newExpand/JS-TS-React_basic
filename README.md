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

## class

```js
// 기본 class 사용법
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

// class 확장
class Person extends Human {
  constructor() {
    // 확장시 super()를 통해 상속 받아야 함, 안받으면 에러남
    super();
    this.name = "Max";
    // gender는 상속으로 받아온 값이나 밑에 다시 선언하면 선언값으로 바뀜
    this.gender = "female";
  }

  printMyName() {
    console.log(this.name);
  }
}

// class 사용 방법
const person = new Person();
person.printMyName();
// 확장후에는 class Human에 있는것도 사용 가능
person.printGender();
```

### class ES6 / Babel을 통한 차세대 버전

```js
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

// class 확장
class Person extends Human {
  name = "Max";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

// class 사용 방법
const person = new Person();
person.printMyName();
person.printGender();
```
