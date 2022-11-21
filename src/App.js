import './App.css';
import {UserProfileCollections} from './ui-components';
import {NavBar} from './ui-components';
import {Footer} from './ui-components';
import {AddUser} from './ui-components';
import {UserProfile} from './ui-components';
import {useState} from 'react';
import {Details} from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";


function App({ user, signOut }) {
  const [showForm,setShowForm]=useState(false)
  const [showDetails,setShowDetails]=useState(false)
  const [appuser,setUser]=useState()
  const [updateUser,setUpdateUser]=useState();
  
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");

  const formOverride={
    TextField29766922: {
      placeholder: name
    },
    TextField29766923:{
      placeholder: age
    },
    TextField29766924:{
      placeholder: email
    },
    TextField34632735: {
      placeholder: phone
    },
    Button34642690: {
      isDisabled: !updateUser ? true : false,
    },
    Button29766926: {
      isDisabled: updateUser ? true : false,
    },
    Icon: {
      style:{
        cursor: "pointer",
      },
      onClick: ()=>{
        setShowForm(false);
      }
    }
  }

  const navbarOverrides={
    Button: {
      onClick: signOut
    },
    image: {
      src: user?.attributes?.profile,
    },
    "Add User": {
      style:{
        cursor: "pointer"
      },
      onClick:()=>{
        setShowForm(!showForm)
      }
    }
  }
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        {showDetails && <Details
        user={appuser}
        style={{
          textAlign: "left",
          margin: "1rem"
        }}
        overrides={{
          Close:{
            onClick: ()=>{
              setShowDetails(false);
            },
            style: {
              cursor: "pointer",
            },
          }
        }}/>
        }
        
        {showForm && (
           <AddUser
           user={updateUser}
           overrides={formOverride}
            style={{
            textAlign: "left",
            margin: "1rem"
          }} />
        )}
       
        <UserProfileCollections
        overrideItems={({item,index})=>({
          overrides:{
            "Melinda Marcus": {color:"black"},
            Button29766907: {
              onClick: ()=>{
                setShowDetails(!showDetails);
                setUser(item);
              }
            },
            Button34512692: {
              onClick: ()=>{
                if(!showForm) setShowForm(true)
                setUpdateUser(item)
                setName(item.name)
                setAge(item.age)
                setEmail(item.email)
                setPhone(item.mobile)
              }
            }
          },
        })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
