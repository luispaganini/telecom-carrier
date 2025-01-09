import { Spinner } from 'react-bootstrap'

type LoadingComponentProps = {
    classname?: string   
}

export default function LoadingComponent(props: LoadingComponentProps) {
    return (
        <div className={props.classname}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}
