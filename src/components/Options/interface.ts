export default interface OptionsInterface {
  title: string | undefined;
  description?: string | undefined;
  canonical?: string | undefined;
  keywords?: string | undefined;
  favicon?: string | undefined;
  children: React.ReactNode;
}
