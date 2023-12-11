This is the sample boilerplate created in react js, to start an application in react js from scratch and it has the following basic features.

   - Common Layout
   - Navigation, router
   - Redux implemented
   - Below Hooks implemented
   - useState, useEffect, useContext


# Project description

This is the sample boilerplate created in react js, when there is to start a new application in react js from scratch. If someone needs a basic react application with simple main features of react without so much complex code. This application has the following basic features implemented.

## Common Layout: 
It is one component with header and footer layout, then header layout contains the navigation, Also, there is footer layout with simple text, later on footer can be added, and it is basic layout, so any new design can be implemented easily with the basic code, Also this component accept all the existing and new component by calling in the routes. It includes all the module components into these layout components, and the data is passed through this component. Also used the bootstrap css for buttons and navigation with a predefined set of classes.

## Navigation: 
The navigation is created and uses the basic bootstrap and uses the source of bootstrap navigation and also by using the react router concept, by which all the routes can be managed with the router, no page reload is required in this navigation.

## Redux implemented:  
In today's market various applications needed the redux concept, so that the Basic redux implemented in which in one component the redux state is dispatched and one component is rendering the state which is updated by the redux concept. A separate directory is created to achieve the redux concept, also there are directories for actions, reducers and store, so that it is very clear to use separate files for each of these concepts, currently it is having simple once action to change amount.

# Below Hooks are implemented in this application, so that by using existing references this can be implemented in other new modules.

## useState: 
This is added to implement state concept in functional component, because state concept is only available to class component, and the class component will no longer be used.

## useEffect: 
This hook is used to implement side effects that are required sometimes in the application, such as if we need something to call while changing any props or state value. Sometimes it needs to add effect while the initial load of the component.

## useContext: 
This hook is used to use state from parent to sub child component without passing props to each component(prevent prop drilling). This is implemented in this application to use the common state along the parent to child components.

## Color button : 
It is used to check the changing state in one component and reflect the changes into another component.

## Amount change button: 
It is used to check the state change in one component with the help of redux concept, and use the same state in another component. In this concept, a simple action creator and simple reducer is created and to change the state in one component the store dispatch method is called. So that once the dispatch is called the reducer changes the state value.

## Memo: 
Also the memo concept of react js is implemented, so that the component will be only loaded when the props value will be changed. This can help in performance of the application.

## Events: 
following events are implemented in this application

## Onclick : 
this is used for the button for changing the amount and changing the color.

## Onkeyup: 
this is used in the input type text field, to check the changes in one component and by using react context the change in value is reflected in another component.
