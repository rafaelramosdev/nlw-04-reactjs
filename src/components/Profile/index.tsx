import { useChallenges } from '../../hooks/useChallenges';

import styles from './styles.module.scss';

export function Profile() {
  const { level } = useChallenges();

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rafaelramosdev.png" alt="rafaelramosdev" />

      <div>
        <strong>Rafael Ramos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />

          Level {level}
        </p>
      </div>
    </div>
  )
}