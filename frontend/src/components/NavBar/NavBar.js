import React from 'react'
import { Navbar, Form, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.scss'
import { connect } from "react-redux"
import { bindActionCreators, compose } from "redux"
import { getSearchQuery, getGenre } from "../../store/actions/reviewActions"
import { NavLink, withRouter } from "react-router-dom"

class NavBar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }
  




  onChange = (e) => {

    this.setState({
      search: e.target.value
    })


  }



  onSubmit = (e) => {

    e.preventDefault()


    if (this.state.search.length >= 3) {

      const query = this.state.search



      this.props.getSearchQuery(query)
      this.props.history.push({
        pathname: '/search',
        search: `?q=${query}`


      })



    }

  }

  onGenreClick = (Genre) => {
    this.setState({
      search:''
    })
    this.props.getGenre(Genre)
    this.props.history.push({
      pathname: '/genre',
      search: `?v=${Genre}`


    })
  }

  render() {



    return (
      <Navbar expand="md">
        <Navbar.Brand href="/">GameReviewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" activeStyle={{ color: "red" }} exact>Home</NavLink>
            <NavLink to={{ pathname: "/toprated" }} activeStyle={{ color: "red" }}
            >
              Top Rated</NavLink>




            <NavDropdown tag={NavLink} title="Genre"  id="collapsible-nav-dropdown" >
              <NavDropdown.Item tag={NavLink} onClick={() => this.onGenreClick('Action')}>Action</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('RPG')}>RPG</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Adventure')}>Adventure</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Shooter')}>Shooter</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Fighting')}>Fighting</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Racing')}>Racing</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Sports')}>Sports</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Fighting')}>Fighting</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Racing')}>Racing</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Strategy')}>Strategy</NavDropdown.Item>

              <NavDropdown.Item onClick={() => this.onGenreClick('Puzzle')}>Puzzle</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Board')}>Board</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Music')}>Music</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.onGenreClick('Platformer')}>Platformer</NavDropdown.Item>
            </NavDropdown>

          </Nav>


          <Form inline
            onSubmit={(e) => this.onSubmit(e)}
          >
            <FormControl type="text" placeholder="Search Game" className="mr-md-2 mr-sm-2" onChange={this.onChange} value={this.state.search} />
            {/*<Link to={`/search?v=${this.state.search}`} > */}
            <Button variant="outline-success" onClick={this.onSubmit} >
              Search</Button>

          </Form>

        </Navbar.Collapse>

      </Navbar>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    page: state.page

  }
}


const mapDispatchToprops = (dispatch) => {


  return bindActionCreators({ getSearchQuery, getGenre }, dispatch)

}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToprops))(NavBar)