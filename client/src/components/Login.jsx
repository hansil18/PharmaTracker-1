import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { FiLogIn } from 'react-icons/fi'


const Login = () => {
    return (
        <div style={{ display: 'block', 
            width: '30%',
            margin: '100px auto',
            borderRadius: '5px',
            background: 'rgba(255,255,255, 0.15)',
            padding: 30,
         }}>
            <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 15}}>
                <FiLogIn style={{color: '#ffffff', fontSize: 20}} className="mr-2"/>
                Login
            </h4>
            <Form>
                <Form.Group as={Col}>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>User Name</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>Password</span>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"/>
                </Form.Group>
                <Button size="lg" variant="success" type="submit" style={{marginLeft: '40%', marginTop: 20}}>
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;