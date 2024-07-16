/*
useRef Hook: 
The useRef hook is used to create a reference to a DOM element. 
This reference is persisted across re-renders, allowing you to access the DOM element directly.

current Property: 
The current property of the reference object returned by useRef holds the DOM element. 
When the component mounts, current will point to the form element.

reset Method: The reset method is a standard method available on HTML form elements. 
It resets the form controls to their initial values.
*/

import React, { useRef } from 'react';

function MyForm() {
  const formRef = useRef(null);

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div>
      <form ref={formRef}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default MyForm;

/***********************************************************************************************************************************/
/*
Ez a fontos példa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

if your intention is to reset the form and also fetch new data to populate the form fields, 
you'll need to combine the reset method with an API call to obtain new data, and then set the form fields with this new data.

Here's an extended example to illustrate this:

Using useState for Form Data: Manage the form data using React's useState hook.
Fetching New Data: Use a function to fetch new data from an API.
Populating the Form: Populate the form with the fetched data after resetting it.
*/
import React, { useRef, useState } from 'react';

function MyForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleReset = async () => {
    if (formRef.current) {
      formRef.current.reset();
      const newData = await fetchNewData();
      setFormData(newData);
    }
  };

  const fetchNewData = async () => {
    // Simulating an API call to fetch new data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          email: 'john.doe@example.com'
        });
      }, 1000);
    });
  };

  return (
    <div>
      <form ref={formRef}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </label>
        <br />
        <button type="button" onClick={handleReset}>
          Reset and Fetch New Data
        </button>
      </form>
    </div>
  );
}

export default MyForm;

/*
nagyon fontos, hogy meghívásnál is kibontjuk a formData és a megfelelő kulcsát pedig frissítjük az értékkel!!!!!!!!! 
setFormData({...formData, email: e.target.value})}

State Management:

useState is used to manage the form data (formData).
setFormData is used to update the form data state.
Handle Reset:

The handleReset function resets the form using formRef.current.reset().
It then calls fetchNewData to simulate an API call to fetch new data.
Once new data is fetched, setFormData updates the form fields with this new data.
Fetching New Data:

fetchNewData is a mock function that simulates an API call, returning new data after a short delay.
Form Elements:

The form fields (name and email) are controlled components, meaning their values are controlled by the React state (formData).
onChange handlers update the state when the user types in the input fields.

Elmagyarazás!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
1. Initial State and Input:
You start with an initial state for your form data using useState.
The form fields are controlled components, meaning their values are tied to the React state.

2. 
User Fills Out the Form:
As the user fills out the form, the state is updated with each keystroke via the onChange handlers.

3. 
Reset and Fetch New Data:
When the user clicks the "Reset and Fetch New Data" button, the handleReset function is triggered.
This function does two main things:
It resets the form fields to their initial state using formRef.current.reset().
It fetches new data (simulating an API call) and updates the form state with this new data.

4. Form Update with New Data:
The form fields are then populated with the new data fetched from the API call, 
updating the state and thus the input values.

->
1. Initial State and Input:
The initial state is set up using useState:
*/
const [formData, setFormData] = useState({
  name: '',
  email: ''
});
/*
<input 
  type="text" 
  name="name" 
  value={formData.name} 
  onChange={(e) => setFormData({...formData, name: e.target.value})}
/>
<input 
  type="email" 
  name="email" 
  value={formData.email} 
  onChange={(e) => setFormData({...formData, email: e.target.value})}
*/
/*
2. User Fills Out the Form:
As the user types, onChange handlers update the state:
*/
onChange={(e) => setFormData({...formData, name: e.target.value})}
onChange={(e) => setFormData({...formData, email: e.target.value})}
/*
3. Reset and Fetch New Data:
When the reset button is clicked:
*/
<button type="button" onClick={handleReset}>Reset and Fetch New Data</button>
//The handleReset function is executed:
const handleReset = async () => {
    if (formRef.current) {
      formRef.current.reset(); // Reset the form fields
      const newData = await fetchNewData(); // Fetch new data
      setFormData(newData); // Update the state with new data
    }
  };
/*
4. Fetch New Data:
The fetchNewData function simulates an API call and returns new data:
*/
const fetchNewData = async () => {
    // Simulating an API call to fetch new data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'John Doe',
          email: 'john.doe@example.com'
        });
      }, 1000);
    });
  };
/*
User fills out the form -> formData state is updated.
User clicks the reset button -> form fields are reset and new data is fetched.
New data updates the form state -> form fields are populated with new data.
By combining form reset and state update, you ensure the form always displays the latest data fetched from the API.
*/


