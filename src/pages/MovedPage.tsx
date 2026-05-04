import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const NEW_BOT = 'https://t.me/kgasu_schedule_bot';
const NEW_SITE = 'https://obshak.space';

export default function MovedPage() {
  const openLink = (url: string) => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.openTelegramLink?.(url);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="w-24 h-24 rounded-3xl overflow-hidden mb-8"
      >
        <img src="/Photoroom_20260504_213046.png" alt="Obshak" className="w-full h-full object-cover" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-foreground mb-3"
      >
        Мы переехали! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-sm max-w-xs mb-8"
      >
        Obshak теперь доступен как полноценный сайт и через нового бота. Переходи по ссылкам ниже!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-3 w-full max-w-xs"
      >
        <button
          onClick={() => openLink(NEW_BOT)}
          className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-2xl font-semibold flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Открыть нового бота
        </button>

        <button
          onClick={() => window.open(NEW_SITE, '_blank', 'noopener,noreferrer')}
          className="w-full py-3 px-6 bg-secondary text-secondary-foreground rounded-2xl font-semibold flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Открыть сайт Obshak
        </button>
      </motion.div>
    </div>
  );
}
