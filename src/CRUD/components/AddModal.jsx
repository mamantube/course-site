import { useState } from "react";
import { Button, Modal, Form} from "react-bootstrap"

const AddModal = ({show, handleClose, handleSubmit}) => {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ("");

    const submitData = () => {
      const timestamp = Math.floor(Date.now()/1000)
      const payload = {
        id: timestamp,
        title,
        description
      };
      console.log("payload", payload);
      handleSubmit(payload);
    }
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukan Judul"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default AddModal;