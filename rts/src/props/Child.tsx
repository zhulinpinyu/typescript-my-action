interface ChildProps {
  color: string;
}

export const Child = (props: ChildProps) => {
  return <div>Hi {props.color}</div>
}
