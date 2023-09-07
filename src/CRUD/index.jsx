import { Container, Row, Col, Table, Button } from "react-bootstrap";
import AddModal from "./components/AddModal";
import { useState } from "react";
import courseService from "./utils/Service";
import { useEffect } from "react";
import CourseEditModal from "./components/CourseEditModal";
import CourseDeleteModal from "./components/CourseDelete.Modal";

const MateriCRUD = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [courses, setCourses] = useState ([]);
    const [selectedCourse, setSelectedCourse] = useState ({});
    const [showEditModal, setShowEditModal] = useState (false);
    const [showDeleteModal, setShowDeleteModal] = useState (false);


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

    const openEditModal = (payload) => {
        setSelectedCourse(payload);
        setShowEditModal(true);
    }
    const closeEditModal = () => {
        setSelectedCourse({});
        setShowEditModal(false);
    }

    const handleEditCourse = (payload) => {
        const {id, ...otherPayload} = payload;
        courseService.updateCourse(id, otherPayload);
        closeEditModal();
        fetchCourses();
    }

    const openDeleteModal = (payload) => {
        setSelectedCourse(payload);
        setShowDeleteModal(true);
    }

    const closeDeleteModal = () => {
        setSelectedCourse({});
        setShowDeleteModal(false);
    }

    const handleDeleteCourse = () => {
        const {id} = selectedCourse;
        courseService.deleteCourse(id);
        fetchCourses();
        closeDeleteModal();
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
                                        <td><Button onClick={() => openEditModal(item)} variant="warning">Edit</Button></td>
                                        {""}
                                        <td><Button onClick={() => openDeleteModal(item)} variant="danger">Hapus</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <AddModal show={showCreateModal} handleClose={toggleCreateModal} handleSubmit={handleAddCourse} />
            <CourseEditModal show={showEditModal} handleClose={closeEditModal} handleSubmit={handleEditCourse} data={selectedCourse} />
            <CourseDeleteModal show={showDeleteModal} handleClose={closeDeleteModal} onAgree = {handleDeleteCourse} />
        </Container>
    );
}

export default MateriCRUD;