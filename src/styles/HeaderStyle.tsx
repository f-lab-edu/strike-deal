import { css } from '@emotion/react';

const headerStyle = {
    wrapper: css({
        width: '100%',
        height: 80,
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
        ':nth-of-type(1)': {
            display: 'flex',
            alignItems: 'center',
            flexGrow: 0.5,
            fontSize: 28,
            fontWeight: 700,
        },
        ':nth-of-type(2)': { flexGrow: 2 },
        ':nth-of-type(3)': {
            flexGrow: 0.5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 12,
        },
    }),
};

export { headerStyle };
