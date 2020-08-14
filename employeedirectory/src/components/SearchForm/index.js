import React from "react";
import { Form } from "react-bootstrap";

function SearchForm(props){
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search By Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name Here" onChange={e => props.updateSearch(e.target.value)}></Form.Control>
            </Form.Group>
        </Form>
    )
}

export default SearchForm;