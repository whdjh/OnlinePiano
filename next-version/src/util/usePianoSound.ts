import { useState, useEffect } from 'react';

export const usePianoSound = () => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 AudioContext 초기화
    const context = new (window.AudioContext || window.AudioContext)();
    setAudioContext(context);

    // clean up
    return () => {
      context.close();
    };
  }, []);

  const playNote = (frequency: number) => {
    if (!audioContext) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // 사운드 타입 설정
    oscillator.type = 'sine';
    // 주파수 설정
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    // 초기 볼륨 설정
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    // 점차적으로 소리 감소
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);

    // 사운드 생성기 -> 볼륨 -> 오디오 출력 연결
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1);
  };

  return { playNote };
};
