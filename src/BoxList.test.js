import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import BoxList from './BoxList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoxList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let wrapper;

beforeEach(function () {
    wrapper = mount(<BoxList />);
    wrapper.setState({ boxes: [
        { id: 1,
            height: 50,
            width: 50,
            bgColor: 'tomato'
        }
    ]});
});

it('allows for changes in bgColor, height, width', function() {
    const bgColorInput = wrapper.find("#bgColor");
    bgColorInput.instance().value = "corn"
    bgColorInput.simulate("change");
    wrapper.update();
    console.log("What is in state?", wrapper.state());
    console.log(bgColorInput.debug());
    expect (wrapper.state().boxes[0].bgColor).toEqual("corn");
});