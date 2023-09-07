import { Container, Row, Col, Table, Button } from "react-bootstrap";
import AddModal from "./components/AddModal";
import { useState } from "react";
import courseService from "./utils/Service";
import { useEffect } from "react";

const MateriCRUD = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [courses, setCourses] = useState ([]);


    const toggleCreateModal = () => {
        setShowCreateModal(!showCreateModal)
    }
    const handleAddCourse = (payload) => {
        courseService.addCourse(payload);
        fetchCourses();
        toggleCreateModal();
    }
    const fetchCourses = () => {
        const result = courseService.getCourses();
        setCourses(result.data);
    }

    useEffect(() => {
        fetchCourses();
    }, []);
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
                            {courses.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddModal show={showCreateModal} handleClose={toggleCreateModal} handleSubmit={handleAddCourse} />
        </Container>
    );
}

export default MateriCRUD;