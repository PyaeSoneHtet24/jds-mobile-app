declare module 'react-native-config' {
  export interface NativeConfig {
    ENV: string;
    BASE_API_URL: string;
    API_ENCRYPTION_KEY: string;
  }
  export const Config: NativeConfig;
  export default Config;
}
