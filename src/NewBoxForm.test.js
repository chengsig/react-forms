import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewBoxForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  let wrapper;
  
  beforeEach(function () {
      wrapper = mount(<NewBoxForm />);
  });
  
  it('allows for changes in bgColor, height, width', function() {
      const bgColorInput = wrapper.find("#bgColor");
      bgColorInput.instance().value = "corn"
      bgColorInput.simulate("change");
      console.log("What is in state?", wrapper.state());
      console.log(bgColorInput.debug());
      expect (wrapper.state().bgColor).toEqual("corn");
  });