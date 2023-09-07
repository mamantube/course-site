import { useState } from "react";
import { Button, Modal, Form} from "react-bootstrap"
import { useEffect } from "react";

const CourseEditModal = ({show, handleClose, handleSubmit, data}) => {
    const [title, setTitle] = useState ("");
    const [description, setDescription] = useState ("");

    const submitData = () => {
      const payload = {
        id: data.id,
        title,
        description
      };
      console.log("payload", payload);
      handleSubmit(payload);
    }

    useEffect (() => {
        setTitle(data.title);
        setDescription(data.description)
    }, [data])
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
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
                defaultValue={title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control defaultValue={description} as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
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

export default CourseEditModal;