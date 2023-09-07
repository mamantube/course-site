import { Container, Row, Col, Table, Button } from "react-bootstrap";
import AddModal from "./components/AddModal";
import { useState } from "react";
import courseService from "./utils/Service";

const MateriCRUD = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const toggleCreateModal = () => {
        setShowCreateModal(!showCreateModal)
    }
    const handleAddCourse = (payload) => {
        courseService.addCourse(payload);
        toggleCreateModal();
    }
    return (
        <Container style={{paddingTop: "50px"}}>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <Button onClick={toggleCreateModal}>Tambah Course</Button>
                    <Table>
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Judul</td>
                                <td>Deskripsi</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Course 1</td>
                                <td>Deskripsi Course 1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Course 2</td>
                                <td>Deskripsi Course 2</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Course 3</td>
                                <td>Deskripsi Course 3</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddModal show={showCreateModal} handleClose={toggleCreateModal} handleSubmit={handleAddCourse} />
        </Container>
    );
}

export default MateriCRUD;