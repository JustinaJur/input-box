import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
  onSubmitValue,
  handleChangeValue,
  addValue,
  handleModal
} from "./actions";

import { Header, Form, Button, Modal } from "semantic-ui-react";

///import { addPerson, addFacility, addExposure } from "./api/index";

class Input extends React.Component {
  state = {
    input: ""
    // isModalOpen: false,
    // result: null
  };

  // componentDidMount() {
  //   this.props.addPerson();
  // }

  // onSubmitValue = async e => {
  //   e.preventDefault();
  //   const { input } = this.state;

  //   if (!input) return;

  //   const personData = await addPerson(input);
  //   console.log(personData.val);

  //   const facilityData = await addFacility(personData.val1);

  //   const exposureData = await addExposure(personData.val2);

  //   console.log(input);
  //   console.log(personData);
  //   console.log(facilityData);
  //   console.log(exposureData);
  //   this.setState({
  //     input: "",
  //     isModalOpen: !this.state.isModalOpen,
  //     result: facilityData.val3 * facilityData.val4
  //   });
  // };

  onSubmitValue = e => {
    e.preventDefault();
    console.log("pajus");
    console.log(this.props.input);
    //console.log(this.state.input);
    this.props.addValue(this.state.input);
  };

  render() {
    const { input } = this.state;
    const { isModalOpen, result } = this.props;
    // console.log(this.props.result);
    console.log("ismodal open", isModalOpen);

    return (
      <div className="form-container">
        <Form>
          {/* <Form onSubmit={e => onSubmitValue(e.target.value)}> */}
          <Form.Field>
            <label>Enter a number between 0 and 1</label>
            <input
              placeholder="value"
              // value={this.state.input}
              type="number"
              onChange={e => this.setState({ input: e.target.value })}
              // onChange={e => this.props.handleChangeValue(e)}
            />
            <Button
              type="submit"
              onClick={this.onSubmitValue}
              // onClick={e => this.props.addValue(e)}
              // onClick={this.addValue}
              // onClick={() => this.props.createPerson}
              // disabled={input.length === 0 || input.length > 10}
              disabled={input > 1 || input.length === 0 || input.length > 10}
              primary
            >
              Add Value
            </Button>
            {/* Result: {result && result} */}
          </Form.Field>

          <Modal open={isModalOpen}>
            <Modal.Content>
              <Header>
                Result:
                {result && result}
              </Header>

              {/* onClick={e => this.setState({ isModalOpen: false })}>  */}

              <Button onClick={this.props.handleModal}>Close Modal</Button>
            </Modal.Content>
          </Modal>
        </Form>

        {/* <Field name="value" component={this.renderInput} />
        <Field name="description" /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isModalOpen, result } = state.api;
  console.log("resultatas", state.api.result);

  // return { search: state.search };
  // console.log(state);
  console.log("state in inputComponent", state.api.isModalOpen);
  console.log("state in inputComponent", state.api.result);
  console.log("result", state.api.result);
  return {
    //  input: state.input,
    // isModalOpen: state.isModalOpen,
    // result: state.result
    // input,
    result,
    isModalOpen
  };
};

//export default Input;
// export default reduxForm({
//   form: "Input"
// })(Input);
export default connect(mapStateToProps, {
  handleChangeValue,
  addValue,
  handleModal
})(Input);
