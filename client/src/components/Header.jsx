import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import { useContext } from 'react';
import {GiMedicines} from 'react-icons/gi';
import {FaRegHandPeace} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { LoginContext } from '../controller/loginstate';
import { useHistory } from 'react-router-dom';


const Header = () => {

    const { account,setAccount } = useContext(LoginContext);

    const history = useHistory();

    const clickHandler = () => {
        history.push('/');
        setAccount('');
    }

    return (
        <Navbar style={{height: 50, background: 'black', marginTop: 15}} sticky="top">
            <Link to='/' className="mx-auto">
                <Navbar.Brand>
                    <GiMedicines className="mb-2" style={{color: '#5cb85c'}}/>
                    <span style={{color:'#ffffff', fontWeight: 600}}>Pharma</span>
                    <span style={{color:'#5cb85c', fontWeight: 600}}>Tracker</span>
                    </Navbar.Brand>
            </Link>
            {
                account === '' ?
                // login pachinu
                <Nav className="ml-auto mx-auto">
                        <Link to='/Signup'>
                            <Nav.Item  className="mr-4">
                                <Button variant="outline-success">
                                    AdminSignup
                                </Button>
                            </Nav.Item>
                        </Link>
                        <Link to='/Login'>
                            <Nav.Item style = {{color: 'white'}}>
                                <Button variant="success">
                                    AdminLogin
                                </Button>
                            </Nav.Item>
                        </Link>
                </Nav>
                :
                // login pelanu default
                <Nav className="ml-auto mx-auto">
                    <Button variant = "outline-success" style={{marginRight: '150px'}}>
                        <FaRegHandPeace /><FaRegHandPeace />  {account}!!
                    </Button>
                    <Link to='/Upload'>
                        <Nav.Item  className="mr-4">
                            <Button variant="outline-success">
                                Add
                            </Button>
                        </Nav.Item>
                    </Link>
                    <Link to='/Update'>
                        <Nav.Item style = {{color: 'white'}} className="mr-4">
                            <Button variant="outline-success">
                                Update/Delete
                            </Button>
                        </Nav.Item>
                    </Link>
                    <Link to='/Login'>
                        <Nav.Item style = {{color: 'white'}}>
                            <Button variant="success" onClick={clickHandler}>
                                Logout
                            </Button>
                        </Nav.Item>
                    </Link>
                </Nav> 
            }
        </Navbar>
    )
}

export default Header;


