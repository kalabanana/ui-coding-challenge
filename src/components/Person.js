import React from "react";
import Modal from './Modal';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let student = this.props.student;
        console.log(student);
        let input;
        return (
            <div>
                <h2>Student Details</h2>
                <div>
                    <h4> Name:</h4>
                    <span> {student.name} </span>
                    <button onClick={this.props.openNameModal}>Edit</button>
                    <Modal
                        isOpen={student.isNameModalOpen}
                        onClose={this.props.closeNameModal}
                    >
                        {" "}
                        <strong>Please Enter your Name</strong>
                        <br />
                        <input
                            ref={node => {
                                input = node;
                            }}
                        />{" "}
                        <br />
                        <button
                            onClick={() => {
                                this.addName(input.value);
                                input.value = "";
                            }}
                        >
                            Submit
                        </button>
                        <button onClick={this.props.closeNameModal}>Close</button>
                    </Modal>
                </div>
                <div>
                    <h4>College:</h4>
                    <span>{student.college} </span>
                    <button onClick={this.props.openCollegeModal}>Edit</button>
                    <Modal
                        isOpen={student.isCollegeModalOpen}
                        onClose={() => this.props.closeCollegeModal()}
                    >
                        <strong>Please enter your college</strong>
                        <br />
                        <input
                            ref={node => {
                                input = node;
                            }}
                        />
                        <br />
                        <button
                            onClick={() => {
                                this.addCollege(input.value);
                                input.value = "";
                            }}
                        >
                            Submit
                        </button>
                        <button onClick={() => this.props.closeCollegeModal()}>
                            Close
                        </button>
                    </Modal>
                </div>
                <div>
                    <h4> Department:</h4>
                    <span>{student.department} </span>
                    <button onClick={this.props.openDepartmentModal}>Edit</button>
                    <br />
                    <Modal
                        isOpen={student.isDepartmentModalOpen}
                        onClose={this.props.closeDepartmentModal}
                    >
                        <strong>Please Enter your Department</strong>
                        <input
                            ref={node => {
                                input = node;
                            }}
                        />{" "}
                        <br />
                        <button
                            onClick={() => {
                                this.addDepartment(input.value);
                                input.value = "";
                            }}
                        >
                            Submit
                        </button>
                        <button onClick={this.props.closeDepartmentModal}>Close</button>
                    </Modal>
                </div>
            </div>
        );
    }

    addName(name) {
        //pull the name and invoke action creater passed as props
        this.props.addName(name);

    }

    addCollege(college) {
        //pull the name and invoke action creater passed as props
        this.props.addCollege(college);

    }
    addDepartment(department) {
        //pull the name and invoke action creater passed as props
        this.props.addDepartment(department);

    }
}

export default App;
