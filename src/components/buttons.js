function Button({click, operators}) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const eachNumber = numbers.map((number) => {
    return <button key={number} onClick={click}>{number}</button>;
  });
  
  const eachOperator = operators.map((operator) => {
    return <button key={operator} onClick={click} >{operator}</button>;
  });
  const otherButtons = [ "del","=" ];
  const eachOtherButton = otherButtons.map((otherButton) => {
    return <button key={otherButton} onClick={click}>{otherButton}</button>;
  });

  return (
    <section className="button">
      <aside>
        {eachOperator}
        {eachNumber}
        {eachOtherButton}
      </aside>
    </section>
  );
}

export default Button;
