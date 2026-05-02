import { useState, useEffect, useRef, useCallback } from 'react';

const SpecialDeal = () => {
  const INITIAL_TIME = 59 * 60 + 59; // 0:59:59 в секундах

  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(true);
  const [isExpired, setIsExpired] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const intervalRef = useRef(null);

  // Очистка интервала
  const clearTimerInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Форматирование времени H:MM:SS
  const formatTime = useCallback((seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, []);

  // Эффект для запуска/остановки таймера
  useEffect(() => {
    if (isExpired || !isRunning) {
      clearTimerInterval();
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsExpired(true);
          setIsRunning(false);
          clearTimerInterval();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimerInterval;
  }, [isRunning, isExpired, clearTimerInterval]);

  // Очистка при размонтировании
  useEffect(() => {
    return clearTimerInterval;
  }, [clearTimerInterval]);

  // Обработчик стоп/возобновить
  const handleToggle = () => {
    if (!isExpired) {
      setIsRunning((prev) => !prev);
    }
  };

  // Обработчик рестарт
  const handleRestart = () => {
    clearTimerInterval();
    setTimeLeft(INITIAL_TIME);
    setIsExpired(false);

    if (isExpired) {
      // Из состояния истёк — сразу запускаем
      setIsRunning(true);
    } else {
      // Оставляем прежнее состояние работы таймера
      setIsRunning(isRunning);
    }
  };

  // Обработчик закрытия
  const handleClose = () => {
    clearTimerInterval();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#ef4444] text-white rounded-2xl p-4 max-w-sm shadow-md relative">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
      >
        ✕
      </button>

      <div className="flex items-center gap-2 mb-3">
        <div className="bg-white text-[#ef4444] text-xs font-bold px-3 py-1 rounded-full">
          Special Deal!
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-1">
        Register now to unlock
      </h3>
      <p className="text-white/90 text-[15px] leading-snug mb-4">
        exclusive offers and discounts
      </p>

      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-4">
        <div className="text-center text-3xl font-bold">
          {isExpired ? 'таймер истёк' : formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleToggle}
          disabled={isExpired}
          className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
            isExpired
              ? 'bg-white/10 text-white/50 cursor-not-allowed'
              : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          {isRunning ? 'стоп' : 'возобновить'}
        </button>

        <button
          onClick={handleRestart}
          className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
            isExpired
              ? 'bg-white text-[#ef4444] hover:bg-white/90 shadow-lg'
              : 'bg-white/20 hover:bg-white/30'
          }`}
        >
          рестарт
        </button>
      </div>
    </div>
  );
};

export default SpecialDeal;