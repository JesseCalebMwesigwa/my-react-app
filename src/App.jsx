// function App(){
//   return (
//     // fragments
//     <>
//       <h1>Hello World!</h1>
//       <h2>Learning to code with React</h2>
//     </>
//   )
// }

// export default App

// composing multiple components
export default function ParentComponent() {
  return (
    <>
      <UserComponent />
      <ProfileComponent />
      <FeedComponent />
    </>
  );
}

function UserComponent() {
  return <h1> User Component </h1>;
}

function ProfileComponent() {
  return <h1> Profile Component </h1>;
}

function FeedComponent() {
  return <h1> Feed Component</h1>;
}