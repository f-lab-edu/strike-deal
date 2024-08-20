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
        // minWidth: 600,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }),
};

export { headerStyle };
