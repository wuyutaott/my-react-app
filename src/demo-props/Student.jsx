import styles from './Student.module.css';
import PropTypes from 'prop-types';

function Student(props) {
  // 直接调用 PropTypes 检查
  PropTypes.checkPropTypes(
    Student.propTypes,
    props,
    'prop',
    'Student'
  );

  return (
    <div className={styles.student}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "True": "false"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
};

Student.defaultProps = {    
  name: "Guest",
  age: 0,
  isStudent: false
};

export default Student;