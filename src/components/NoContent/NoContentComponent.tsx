type NoContentComponentProps = {
    message?: string
    classname?: string   
}

export default function NoContentComponent(props: NoContentComponentProps) {
  return (
    <div className={`alert alert-danger ${props.classname || ''}`} role="alert">
        <p>{props.message ? props.message : "Data not found"}</p>
    </div>
  )
}
