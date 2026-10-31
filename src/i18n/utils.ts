import { ui, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.en): string {
    return (ui[lang][key] ?? ui.en[key] ?? key) as string;
  };
}
