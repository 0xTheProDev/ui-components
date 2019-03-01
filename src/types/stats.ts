// According to styleguide: By default, stats and labels are colored Slate (#294661).
// You can change the color of a stat by using one of the classes defined in stats.scss.
// https://github.com/sendgrid/style-guide/blob/master/app/scss/components/_stats.scss
type StatType =
  | 'delivered'
  | 'opens'
  | 'unique-opens'
  | 'clicks'
  | 'unique-clicks'
  | 'unsubscribes'
  | 'spam-reports'
  | 'valid'
  | 'risky'
  | 'invalid';

interface CardStatType {
  label: string;
  type?: StatType;
  value: number | string;
}
