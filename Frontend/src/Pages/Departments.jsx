import { Link } from 'react-router-dom';
import classes from './Departments.module.css'

export default function DepartmentsPage() {
  return (
    <main className="main-container">
      <div className={classes.test}>
        <h1>Test Department</h1>
        <Link to='/signup'>Sign up to Department</Link>
      </div>
    </main>
  );
}
