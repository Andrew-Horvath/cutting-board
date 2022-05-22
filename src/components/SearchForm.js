import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye } from "react-icons/fa";

const UserForm = props => {
    const [passwordVis, setPasswordVis] = useState(false);

    const togglePW = (e) => {
        e.preventDefault();
        setPasswordVis(!passwordVis);
    };
    
    return (
      <div style={styles.containerForm}>
        <h2 style={styles.formTitle}>Edit User Profile</h2>
        <p><img style={styles.userImage} src={props.img} alt={props.alt} /></p>
        <StyledForm>
          <fieldset class="name-items">
            <div container-inputs>
              <label for="fname">First</label>
              <input value={props.firstName} type="text" name="fname"/>
            </div>
            <div>
              <label for="lname">Last</label>
              <input value={props.lastName} type="text" name="lname" placeholder="Last"/>
            </div>
          </fieldset>        
          <fieldset class="contact-items">
            <label for="email">Email</label>
            <input value={props.emailAddress} type="text" name="email"/>          
            <label for="contact-number">Contact Number</label>
            <input value={props.contactNumber} type="text" name="contact-number"/>
          </fieldset>        
          <fieldset class="location-items">
            <div>
              <label for="address">Address</label>
              <input value={props.address} type="text" name="address" placeholder="Street address" />
            </div>
            <div>
              <label for="city">City</label>
              <input value={props.city} type="text" name="city" placeholder="City" />
            </div>
            <div>
              <label for="state">State</label>
              <input value={props.userState} type="text" name="state" placeholder="State" />
            </div>
            <div>            
              <label type="text" name="Zip Code">Zip Code</label>
              <input value={props.zipCode} type="text" name="name" placeholder="Postal / Zip code" />
            </div>
            <div>
              <label for="country">Country</label>
              <input value={props.country} type="text" name="country" placeholder="Country" />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label for="username" >Username</label>
              <input value={props.username} type="text" name="username" placeholder="Username" />
            </div>
            <div class="pw-wrapper">
              <label for="password" >Password</label>
              <input value={props.password} type={passwordVis ? "text" : "password"} name="password" placeholder="Password"/>
              <span class="btn-toggle" onClick={togglePW} >{<FaEye />}</span>
              {/* <button class="btn-toggle" onClick={togglePW}>Show Password</button> */}
            </div>
          </fieldset>
          <button class="btn-submit" type="button">Save</button>
        </StyledForm>
        </div>
    )
}

export default UserForm;

const styles = {
  containerForm: {
    padding: '2rem',
  },
  formTitle: {
    fontFamily: 'Montserrat',
    fontSize: '3rem',
    textTransform: 'uppercase',
  },
  userImage: {
    borderRadius: '3rem',
    margin: '2rem 0 0 3rem',
  }
}

const StyledForm = styled.form`
        width: 75%;
        display: flex;
        flex-direction: column;    
        padding: 2rem 2rem 2rem 4rem;
        font-family: 'Montserrat';
        font-size: 2rem;
        text-transform: uppercase;    
        // background: rgba(67, 170, 139, 1);
        border-radius: 1.5rem;
        color: rgba(37, 68, 65, 1);
        
        fieldset {
            outline: none;
            border: none;
            width: 60%;
        }
        label {
            display: block;
            margin: 3.5rem 0 0 0;
            font-weight: 500;
            color: rgba(255, 235, 245, 1);
        }
        input {
            width: 100%;
            padding: 1rem;
            background: rgba(255, 235, 245, 1);
            border-radius: .75rem;
            font-family: 'Montserrat';
            
              &:placeholder {
                text-transform: uppercase;
              }
              &:focus {
                // outline: none;
                outline: 1px solid rgba(247, 100, 107, 1);
              }
        }
        .name-items {
            display: flex;
            flex-direction: row;
            gap: 0 2rem;
            & div {
              flex: 2 0 40%;
            }
        }
        .location-items {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0rem 2rem;
          & div {
            flex: 2 0 40%;
          }
        }

        .pw-wrapper {
            position: relative;
        }
        .btn-toggle {
            position: absolute;
            font-size: 2.5rem;
            bottom: .4rem;
            left: 60rem;
        }
        span:hover {
            cursor: pointer;
            color: rgba(247, 100, 107, 1);
        }
        .btn-submit {
          width: 12.5rem;
          margin: 4rem 0 0 0;
          padding: 1.2rem;
          background: rgba(67, 170, 139, 1);
          color: rgba(255, 235, 245, 1);
          font-family: 'Montserrat';
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          border: none;
          border-radius: .75rem;
          &:hover {
            background: rgba(126, 217, 87, 1);
            color: rgba(37, 68, 65, 1);
          }
        }
`
