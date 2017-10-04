import React from "react";
import Modal from './Modal';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.addInputs = this.addInputs.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        let {person} = this.props;

        let input;
        return (
            <div>
                <h2>Sports Magazine Details</h2>
                <div>
                    <h4> Name:</h4>
                    <span> {person.name} </span>
                    <button onClick={this.props.openNameModal}>Edit</button>
                    <Modal
                        isOpen={person.isNameModalOpen}
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
                                this.props.changeName(input.value);
                                input.value = "";
                            }}
                        >
                            Submit
                        </button>
                        <button onClick={this.props.closeNameModal}>Close</button>
                    </Modal>
                </div>
                <div>
                    <h4>Address:</h4>
                    <span>{person.address} </span>
                    <button onClick={this.props.openAddressModal}>Edit</button>
                    <Modal
                        isOpen={person.isAddressModalOpen}
                        onClose={this.props.closeAddressModal}
                    >
                        <strong>Please modify your address</strong>
                        <br />
                        <input
                            ref={node => {
                                input = node;
                            }}
                        />
                        <br />
                        <button
                            onClick={() => {
                                this.props.changeAddress(input.value);
                                input.value = "";
                            }}
                        >
                            Submit
                        </button>
                        <button onClick={this.props.closeAddressModal}>
                            Close
                        </button>
                    </Modal>
                </div>
                <div>
                    <h4>Favorite Team:</h4>
                    <ol>
                        {this.renderList(person.favoriteTeams)}
                    </ol>
                    <button onClick={this.props.openTeamsModal}>{person.favoriteTeams.length === 0? "Add Teams" : "Update Temas"}</button>
                    <br />
                    <Modal
                        isOpen={person.isTeamsModalOpen}
                        onClose={this.props.closeTeamsModal}
                    >
                        <p>close<span onClick={this.props.closeTeamsModal}>X</span></p>
                        <strong>ADD Teams</strong>
                        <form ref={nodes => this.nodes = nodes }  onSubmit={this.onSubmit}>
                            <ul id="dynamicInput">
                                {person.inputs.map((input, idx) =>{
                                    return (<li key={idx}>Team {idx+1}: <input /></li>)
                                })}
                            </ul>
                            <button onSubmit={this.onSubmit}>submit</button>
                        </form>
                        <br />

                        <button onClick={this.addInputs}>+add another</button>
                        <button onClick={this.props.closeTeamsModal}>Close</button>
                    </Modal>
                </div>
            </div>
        );
    }

    renderList(teams){
        return teams.map((team, idx) =>{
            return (
                <li key={idx}>
                    {team}
                </li>
            )
        })
    }
    onSubmit(){
        const inputs = Array.from(this.nodes.querySelectorAll('input'));
        const teams = inputs.reduce((teams, input) => {
            if (input.value && input.value.length !== 0){
                teams.push(input.value);
            }
            return teams;
        }, []);
        this.props.updateTeam(teams);

    }
    addInputs(){
        const newInput = `input-${this.props.person.inputs.length}`;
        this.props.addInputs(newInput);
    }
}

export default App;
