import logo from './logo.svg';
import { DataGrid, GridColumn, Accordion, AccordionPanel, ButtonGroup, LinkButton,
  Calendar, Form, FormField, TextBox, ComboBox, CheckBox, Tabs, TabPanel
 } from 'rc-easyui';

import './App.css';
import { useState } from 'react';
import Tab1 from './Tab1';


function App() {

  const [ data, setdata ] = useState([
    {"code":"FI-SW-01","name":"Koi","unitcost":10.00,"status":"P","listprice":36.50,"attr":"Large","itemid":"EST-1"},
    {"code":"K9-DL-01","name":"Dalmation","unitcost":12.00,"status":"P","listprice":18.50,"attr":"Spotted Adult Female","itemid":"EST-10"},
    {"code":"RP-SN-01","name":"Rattlesnake","unitcost":12.00,"status":"P","listprice":38.50,"attr":"Venomless","itemid":"EST-11"},
    {"code":"RP-SN-01","name":"Rattlesnake","unitcost":12.00,"status":"P","listprice":26.50,"attr":"Rattleless","itemid":"EST-12"},
    {"code":"RP-LI-02","name":"Iguana","unitcost":12.00,"status":"P","listprice":35.50,"attr":"Green Adult","itemid":"EST-13"},
    {"code":"FL-DSH-01","name":"Manx","unitcost":12.00,"status":"P","listprice":158.50,"attr":"Tailless","itemid":"EST-14"},
    {"code":"FL-DSH-01","name":"Manx","unitcost":12.00,"status":"P","listprice":83.50,"attr":"With tail","itemid":"EST-15"},
    {"code":"FL-DLH-02","name":"Persian","unitcost":12.00,"status":"P","listprice":23.50,"attr":"Adult Female","itemid":"EST-16"},
    {"code":"FL-DLH-02","name":"Persian","unitcost":12.00,"status":"P","listprice":89.50,"attr":"Adult Male","itemid":"EST-17"},
    {"code":"AV-CB-01","name":"Amazon Parrot","unitcost":92.00,"status":"P","listprice":63.50,"attr":"Adult Male","itemid":"EST-18"}
  ]);

  const [ user, setUser ] = useState({name : 'leemocha' ,accept : false});

  // const [form, setForm] = useRef();
  const form = {}

  const validator = (value) => {
    if (value){
      console.log(1)
      return true;
    } else {
      return Promise(resolve => {

        resolve(true);
      });
    }
  };

  const rules = {
    name: ["required", "length[5,10]"],
    email: "email",
    hero: "required",
    addr: {
      "required":true,
      "myrule":{
        "validator": validator,
        "message": "my error message."
      }
    }
  };

  const handleSave = () => {
    console.log("asdasdasdasdasd")
  }; 

  const heroes = ['a','b','c'];

  return (
    <div className="App">
        <DataGrid data={data} style={{height:250}}>
          <GridColumn field="itemid" title="Item ID"></GridColumn>
          <GridColumn field="name" title="Name"></GridColumn>
          <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
          <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
          <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
          <GridColumn field="status" title="Status" align="center"></GridColumn>
        </DataGrid>
        <Accordion style={{ height: 250 }}>
          <AccordionPanel title="Title1">
            <p>Content1</p>
          </AccordionPanel>
          <AccordionPanel title="Title2">
            <p>Content2</p>
          </AccordionPanel>
          <AccordionPanel title="Title3">
            <p>Content3</p>
          </AccordionPanel>
        </Accordion>
        <ButtonGroup selectionMode="single">
          <LinkButton iconCls="icon-add" toggle={false} selected={false} onClick={handleSave} >Add</LinkButton>
          <LinkButton iconCls="icon-remove" toggle >Remove</LinkButton>
          <LinkButton iconCls="icon-save" toggle >Save</LinkButton>
          <LinkButton iconCls="icon-cut" disabled={false} >Cut</LinkButton>
        </ButtonGroup>
        <Calendar
          style={{ width: 250, height: 250 }}
          selection={new Date()}
          onSelectionChange={null}
        ></Calendar>
        <Form
            ref={form}
            style={{maxWidth:500}}
            model={user}
            rules={rules}
            labelWidth={120}
            labelAlign="right"
            onChange={handleSave}
          >
            <FormField name="name" label="Name:">
              <TextBox></TextBox>
            </FormField>
            <FormField name="email" label="Email:">
              <TextBox></TextBox>
            </FormField>
            <FormField name="hero" label="Select a hero:">
              <ComboBox data={heroes} value={heroes} ></ComboBox>
            </FormField>
            <FormField name="accept" label="Accept Me:">
              <CheckBox checked={user.accept}></CheckBox>
            </FormField>
            <FormField style={{ marginLeft: 120 }}>
              <LinkButton onClick={handleSave}>Submit</LinkButton>
            </FormField>
          </Form>
          <Tabs style={{height:250}}>
          <TabPanel title="Tab1">
            <Tab1></Tab1>
          </TabPanel>
          <TabPanel title="Tab2">
            <p>Tab Panel2</p>
          </TabPanel>
          <TabPanel title="Tab3">
            <p>Tab Panel3</p>
          </TabPanel>
          <TabPanel title="Help" closable iconCls="icon-help">
            <p>This is the help content.</p>
          </TabPanel>
        </Tabs>
    </div>
  );
}

export default App;
