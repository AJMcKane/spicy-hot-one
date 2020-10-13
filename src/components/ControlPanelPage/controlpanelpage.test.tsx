import React from "react";
import { mount, shallow } from "enzyme";
import ControlPanelPage, { IControlPanelProps } from "./controlpanelpage";
import { IPanelContentDictionary, PanelContentType } from "models/ipanelcontent";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

//Example tests on something a little more complex, 
//using a bespoke mock store for initial state. 

const middlewares = [thunk];

const generateTestPanels = (): IPanelContentDictionary => {
  const panelContents: IPanelContentDictionary = {};
  for (let i = 0; i < 2; i++) {
    panelContents[i] = {
      title: "This is A" + i,
      text: "Test",
      logo: "www.google.com",
      id: i,
      type: PanelContentType.DefaultWidget
    }
  }
  return panelContents;
}

const createMockStore = (middlewares: any[], loggedIn: boolean): any => { 
  return configureStore(middlewares)({
      application: {
      controlPanelContent: generateTestPanels(),
      locationApiKey: "",
      contactEmail: "testEmail@gmail.com",
      contactNumber: "000111222333",
      styleData: {
          logoUrl: "https://someLogo.png",
          backgroundColour: "black",
          textColour: "white",
          border: "black",
          fontUrl:""
      },
    },
    auth: {
      loggedIn: loggedIn,
    }
  })
}


test("control panel renders panel count when logged in", () => {
  var store = createMockStore(middlewares, true);
  const wrapper = mount(
    <Router>
      <Provider store={store}>
        <ControlPanelPage />
      </Provider>
    </Router>
  )

  expect(wrapper.find('div.content-panel').length).toEqual(2);
});

test("Redirect doesn't render when not logged in", () => {
  const store = createMockStore(middlewares, false);

  const wrapper = mount(
    <Router>
      <Provider store={store}>
        <ControlPanelPage />
      </Provider>
    </Router>
  )
  console.log(wrapper.debug())
  expect(wrapper.find('div.content-panel').length).toEqual(0);
});
