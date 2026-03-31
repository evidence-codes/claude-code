export type SettingsJson = any

export const SettingsSchema = {
  safeParse(value: unknown) {
    return {
      success: true as const,
      data: value,
    }
  },
}
