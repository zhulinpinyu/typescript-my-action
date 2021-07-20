const EventComponent: React.FC = () => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  }

  const onDrag = (e:React.DragEvent<HTMLDivElement>) => {
    console.log(e, new Date());
  }

  return <div>
    <input onChange={onChange} />
    <div draggable onDrag={onDrag}>Drag me!!!</div>
  </div>
}

export default EventComponent