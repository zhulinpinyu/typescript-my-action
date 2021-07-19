interface ChildProps {
  color: string;
  onClick: () => void;
}

// Function style component define
export const Child = ({color, onClick}: ChildProps) => {
  return <div>
      Hi {color}
      <button onClick={onClick}>Click me!</button>
    </div>
}

// React style Function Component define
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
  return <div>
    Hi {color}
    <button onClick={onClick}>Click me!</button>
    {children}
  </div>
}
