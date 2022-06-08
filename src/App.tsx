import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import UserPage from './components/UserPage';
import { Container } from './styles';

const App = () => {

  return (
    <Container>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='contacts' element={<UserList />} />
        <Route path='contacts/:id' element={<UserPage />} />
        <Route
          path='*'
          element={<Navigate to='/' replace />}
        />
      </Routes>
    </Container>
  );
}

export default App;
