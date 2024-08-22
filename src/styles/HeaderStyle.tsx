import { css } from '@emotion/react';

const headerStyle = {
    wrapper: css({
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    }),
    header: css({
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
    }),
    headerItem: css({
        ':nth-child(1)': {
            display: 'flex',
            alignItems: 'center',
            flexGrow: 0.5,
            fontSize: 28,
            fontWeight: 700,
        },
        ':nth-child(2)': { flexGrow: 2 },
        ':nth-child(3)': { flexGrow: 0.5 },
    }),
};

export { headerStyle };
