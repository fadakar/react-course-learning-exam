import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({

                          title,
                          children,
                          data = undefined,
                          btnAcceptTitle = 'Yes',
                          btnRejectTitle = 'No',
                          isShow = false,
                          onAccept = undefined,
                          onReject = undefined
                      }) {

    return (
        <Modal
            onHide={onReject}
            show={isShow}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton={false}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button className="ml-2" variant="secondary" onClick={onReject}>{btnRejectTitle}</Button>
                <Button variant="primary" onClick={onAccept?.bind(this, data)}>{btnAcceptTitle}</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmModal;