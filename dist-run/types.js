export const SettingsSchema = {
    safeParse(value) {
        return {
            success: true,
            data: value,
        };
    },
};
