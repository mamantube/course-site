import { Button, Modal} from "react-bootstrap"

const CourseDeleteModal = ({show, handleClose, onAgree}) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Apakah Anda Yakin Ingin MenghapusCourse?!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={onAgree}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CourseDeleteModal;