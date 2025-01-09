type NoContentComponentProps = {
    message?: string
    classname?: string   
}

export default function NoContentComponent(props: NoContentComponentProps) {
  return (
    <div>
        <p>{props.message ? props.message : "Data not found"}</p>
    </div>
  )
}
