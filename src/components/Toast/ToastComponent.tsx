import { Toast } from 'react-bootstrap';

type ToastComponentProps = {
    show: boolean;
    setShow: (show: boolean) => void;
    title: string;
    message: string;
}

export function ToastComponent(props: ToastComponentProps) {
    return (
        <div className="w-full max-w-xs mr-2">
            <Toast show={props.show} onClose={() => props.setShow(!props.show)} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </div>
    );
}