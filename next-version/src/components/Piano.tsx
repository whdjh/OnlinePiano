import styles from './piano.module.css';
import { useEffect } from 'react';
import { usePianoSound } from '@/util/usePianoSound';
import { keyFrequency } from '@/type/keyFrequency';
import { keyMapping } from '@/type/keyMapping';

export default function Piano() {
  const { playNote } = usePianoSound();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const frequency = keyMapping[event.key];

      if (frequency) playNote(frequency);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playNote]);

  return (
    <div className={styles.piano}>
      {keyFrequency.map((key) => (
        <button
          key={key.label}
          className={`${styles.key} ${key.label.includes('b') ? styles.black : styles.white}`}
          onClick={() => playNote(key.frequency)}
        >
          {key.label}
        </button>
      ))}
    </div>
  );
}
