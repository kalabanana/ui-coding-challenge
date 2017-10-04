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
                <header>Sports Magazine</header>
                <section>
                    <h2>Sports Magazine Settings</h2>
                    <hr/>
                    <div>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4> Name:</h4>
                                <span> {person.name} </span>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-primary" onClick={this.props.openNameModal}>Edit</button>
                            </div>
                        </div>
                        <Modal
                            isOpen={person.isNameModalOpen}
                            onClose={this.props.closeNameModal}
                        >
                            {" "}
                            <strong>Please Modify your Name:</strong>
                            <br/><br/>
                            <input
                                ref={node => {
                                    input = node;
                                }}
                            />{" "}
                            <br/><br/>
                            <button className="btn btn-primary"
                                onClick={() => {
                                    this.props.changeName(input.value);
                                    input.value = "";
                                }}>
                                Submit
                            </button>
                            <button className="btn btn-danger" onClick={this.props.closeNameModal}>Close</button>
                        </Modal>
                    </div>
                    <hr/>
                    <div>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4>Address:</h4>
                                <span>{person.address} </span>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-primary" onClick={this.props.openAddressModal}>Edit</button>
                            </div>
                        </div>

                        <Modal
                            isOpen={person.isAddressModalOpen}
                            onClose={this.props.closeAddressModal}
                        >
                            <strong>Please Modify your Address</strong>
                            <br/><br/>
                            <input
                                ref={node => {
                                    input = node;
                                }}/>
                            <br/><br/>
                            <button className="btn btn-primary"
                                onClick={() => {
                                    this.props.changeAddress(input.value);
                                    input.value = "";
                                }}>
                                Submit
                            </button>
                            <button className="btn btn-danger" onClick={this.props.closeAddressModal}>
                                Close
                            </button>
                        </Modal>
                    </div>
                    <hr/>
                    <div>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4 >Favorite Teams:</h4>
                                <ol>
                                    {this.renderList(person.favoriteTeams)}
                                </ol>
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-primary" onClick={this.props.openTeamsModal}>{person.favoriteTeams.length === 0? "Add Teams" : "Update Teams"}</button>
                            </div>
                        </div>
                        <Modal
                            isOpen={person.isTeamsModalOpen}
                            onClose={this.props.closeTeamsModal}>
                            <p className="closing">close<span onClick={this.props.closeTeamsModal}>x</span></p>
                            <br/>
                            <strong>Add your Favorite Teams</strong>
                            <br/><br/>
                            <form ref={nodes => this.nodes = nodes }  onSubmit={this.onSubmit}>
                                <ul id="dynamicInput">
                                    {person.inputs.map((input, idx) =>{
                                        return (<li key={idx}>Team {idx+1}: <input /></li>)
                                    })}
                                </ul>
                                <a className="additional" onClick={this.addInputs}>+ add another</a><br/>
                                <button className="btn btn-primary" onSubmit={this.onSubmit}>Submit</button>
                                <button className="btn btn-danger" onClick={this.props.closeTeamsModal}>Close</button>
                            </form>
                        </Modal>
                    </div>
                </section>
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
