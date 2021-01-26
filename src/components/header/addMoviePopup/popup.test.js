import React from "react";
import { shallow } from "enzyme";
import AddMovie from "./index";
import { findByTestAtrr } from "../../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<AddMovie {...props} />);
  return component;
};

describe("AddMovie component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "popupComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render the add movie form", () => {
    const wrapper = findByTestAtrr(component, "formComponent");
    expect(wrapper.length).toBe(1);
  });
});
