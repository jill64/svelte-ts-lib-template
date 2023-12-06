import { extendsConfig } from '@jill64/playwright-config'

export default extendsConfig({
  webServer: {
    command: 'pnpm run preview',
    port: 4173
  }
})
