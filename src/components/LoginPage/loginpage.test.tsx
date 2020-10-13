import React from "react";
import { mount } from "enzyme";
import { ILoginPageProps, LoginPage } from "components/LoginPage/loginpage";
import { ILoginFormData } from "models/iloginformdata";

const props: ILoginPageProps = {
  username: "Ant",
  loginState: false,
  login: jest.fn(),
}

//pure prop testing, compenent gets state from passed in prop
test("login page binds username", () => {
  const wrapper = mount(<LoginPage {...props} />)

  expect(
    wrapper.find({ name: "username" }).at(0).props().value
  ).toEqual(props.username)
});

test("login submit invokes login action", () => {
  const wrapper = mount(<LoginPage {...props} />);
  const form = wrapper.find("form");

  form.simulate("submit");

  expect(props.login)
  .toHaveBeenCalledTimes(1);
});
