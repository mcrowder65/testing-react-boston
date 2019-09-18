import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
// Fixes an issue with react-intl in test cases
Intl.RelativeTimeFormat = jest.fn();
