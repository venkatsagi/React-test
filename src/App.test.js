import Enzyme, { shallow} from 'enzyme';
import EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

  test('render component without error', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
  });

  test('render button', () => {

  });

  test('render counter', () => {

  });

  test('start counter at 1', () => {

  });

  test('click on button to start counter', () => {

  });
