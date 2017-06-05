import React from 'react';

class ErrorModal extends React.Component {
  componentDidMount(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Some title</h4>
        <p>Our error message</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    )
  }
}

export default ErrorModal;