
import styles from './styles.module.scss';

import { SiJavascript , SiCss3, SiTypescript  } from 'react-icons/si';
import { IoLogoHtml5 } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';

export function MorphingEffect(){
  return (
    <div className={styles.morphing}>

        <div className={styles.languages}> JavaScript </div>

        <div className={styles.languages}> CSS </div>

        <div className={styles.languages}> HTML </div>

        <div className={styles.languages} > React </div>

        <div className={styles.languages}> TypeScript </div>

        <div className={styles.languages} > /eloanferreira </div>

    </div>
  );
}