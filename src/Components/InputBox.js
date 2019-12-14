import React from "react";
import { connect } from "react-redux";
import { Header, Form, Button, Modal } from "semantic-ui-react";

import { addValue, handleModal } from "../actions";

class InputBox extends React.Component {
  state = {
    input: ""
  };

  onSubmitValue = e => {
    e.preventDefault();
    this.props.addValue(this.state.input);
  };

  render() {
    const { input } = this.state;
    const { isModalOpen, result } = this.props;

    return (
      <div className="form-container">
        <Form>
          <Form.Field>
            <label>Enter a number between 0 and 1</label>
            <input
              placeholder="value"
              value={this.state.input}
              type="number"
              onChange={e => this.setState({ input: e.target.value })}
            />
            <Button
              type="submit"
              onClick={this.onSubmitValue}
              disabled={input > 1 || input.length === 0 || input.length > 10}
              primary
            >
              Add Value
            </Button>
          </Form.Field>
          <Modal open={isModalOpen}>
            <Modal.Content>
              <Header>Result: {result}</Header>
              <Button onClick={this.props.handleModal}>Close Modal</Button>
            </Modal.Content>
          </Modal>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isModalOpen, result } = state.chainApi;

  return {
    result,
    isModalOpen
  };
};

export default connect(mapStateToProps, {
  addValue,
  handleModal
})(InputBox);
