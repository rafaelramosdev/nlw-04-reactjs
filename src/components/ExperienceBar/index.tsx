import { useChallenges } from '../../hooks/useChallenges';

import styles from './styles.module.scss';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>

      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span style={{ left: `${percentToNextLevel}%` }} >{currentExperience} xp</span>
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}