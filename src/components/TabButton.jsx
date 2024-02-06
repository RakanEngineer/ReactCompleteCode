export default function TabButton({ children, onSelect, isSelected }) {
  // function handleClick() {
  //     console.log("Hello");
  // }
  console.log("TABButton Component Exec");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
