import styles from './Student.module.css';
import PropTypes from 'prop-types';

function Student({ name = "Guest", age = 0, isStudent = false }) {

  // 直接调用 PropTypes 检查
  PropTypes.checkPropTypes(
    Student.propTypes,
    { name, age, isStudent },
    'prop',
    'Student'
  );

  return (
    <div className={styles.student}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "True": "false"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

export default Student;