async function fetchUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const data = await response.json();
  return data; // { name: "홍길동" }
}

// fetchUser(5)
//   .then((user) => {
//     return user.name; // 값 반환
//   })
//   .then((name) => {
//     console.log("이름:", name);
//     return name.toUpperCase(); // 변환해서 반환
//   })
//   .then((upperName) => {
//     console.log("대문자:", upperName);
//   });

const user = await fetchUser(5);
const name = user.name;
console.log(name);
const upperName = name.toUpperCase();
console.log("대문자:", upperName);
