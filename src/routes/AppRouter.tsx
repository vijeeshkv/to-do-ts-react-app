import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import AddPage from '../pages/AddPage';
import ListPage from '../pages/ListPage';

const AppRouter = () => {
    const linkStyle = ({ isActive }: { isActive: boolean }) => ({
        color: isActive ? 'yellow' : 'white',
        textDecoration: 'none',
        marginRight: '1rem'
      });
    
      return (
        <Router>
          <AppBar position="static">
            <Toolbar>
              <NavLink to="/" style={linkStyle}>
                <Button color="inherit">Add</Button>
              </NavLink>
              <NavLink to="/list" style={linkStyle}>
                <Button color="inherit">List</Button>
              </NavLink>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<AddPage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </Router>
      );
};

export default AppRouter;