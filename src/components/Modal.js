import React from 'react';

export default class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;

        return (
            <div>
                <div className="modals">
                    {this.props.children} {/*display all the props passes by parent component*/}

                </div>
                <div className="backdropStyle" onClick={e => this.close(e)} /> {/* close the modal by click event outside the modal box*/}

            </div>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}