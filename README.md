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

### Spread & Rest Operators

- spread operators

  기존에 있는 값을 다른 배열이나 객체에 간단하게 추가해줌

  ```js
  const numbers = [1, 2, 3];
  const newNumbers = [...numbers, 4];

  // 결과 [1, 2, 3, 4]
  console.log(newNumbers);

  const person = {
    name: "Max",
  };

  const newPerson = {
    ...person,
    age: 28,
  };

  // 결과 {age: 28, name: "Max"}
  console.log(newPerson);
  ```

- rest operators

  arguments 를 배열로 뽑아줌

  ```js
  const filter = (...args) => {
    return args.filter((el) => el === 1);
  };

  // 결과 [1]
  console.log(filter(1, 2, 3));
  ```

### Destructuring

배열에서 특정 원소나 객체에서 특정 속성을 추출하는 편한 방법

- array destructuring

  ```js
  const numbers = [1, 2, 3];
  [num1, num2] = numbers;

  // 결과 1 2
  console.log(num1, num2);
  ```

  ```js
  // 중간을 빼고 1 3을 출력하고 싶을 때
  const numbers = [1, 2, 3];
  // 중간에 공백을 표기
  [num1, , num3] = numbers;

  // 결과 1 3
  console.log(num1, num3);
  ```

- object destructuring

  ```js
  {name} = {name: 'Max', age: 28}
  console.log(name) // Max
  console.log(age) //undefined
  ```

### React 상기 할 것

- 컴포넌트 제일 밖의 div밖에 사용자 지정 컴포넌트를 넣는 경우 에러가 생긴다

  ```js
  // 옳은 예:
  import ExpenseItem from "./components/ExpenseItem";

  function App() {
    return (
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem></ExpenseItem>
      </div>
    );
  }

  export default App;

  // 틀린 예:
  import ExpenseItem from "./components/ExpenseItem";

  function App() {
    return (
      <div>
        <h2>Let's get started!</h2>
      </div>
        <ExpenseItem></ExpenseItem>
    );
  }

  export default App;
  ```

- jsx 동작원리(하위 요소를 감싸줄 jsx요소가 필요한 이유)

  ```js
  // 리액트에서 jsx 쓰일 때
  function App() {
    return (
      <div>
        <h2>Let's get started!</h2>
        <Expenses items={expenses}/>
      </div>
    );
  }
  // 실제 jsx 동작하는 형태
    function App() {
    return React.createElement(
      'div',
      {},
      React.createElement('h2', {}, "Let's get started!")
      React.createElement(Expenses, {items: expenses})
    );

  // 하위 요소를 감싸줄 jsx요소가 없어 생기는 에러 예시
      function App() {
    return 
      React.createElement('h2', {}, "Let's get started!"),
      React.createElement(Expenses, {items: expenses})
  }
  ```
  html과 유사한 형태지만 근본은 자바스크립트 입니다. createElement로 생성된건 배열 요소가 아니며, createElement 한개 이상의 자식 요소를 가질 수 있는 요소 한개를 생성하기 때문에 각각 다른 요소를 감싸 줄 부모 요소가 필요합니다.