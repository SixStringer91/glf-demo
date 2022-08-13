import { equalKeyIndex } from '../../libs';
import styles from './excretion.module.css';

function Excretion({ name, inputText }) {
  const countryIndex = equalKeyIndex(name, inputText);
  return (countryIndex !== -1 ? (
    <>
      {name.slice(0, countryIndex)}
      <span className={styles.selected}>
        {name.slice(countryIndex, countryIndex + inputText.length)}
      </span>
      {name.slice(countryIndex + inputText.length)}
    </>
  ) : (
    <span>{name}</span>
  )
  );
}

export default Excretion;