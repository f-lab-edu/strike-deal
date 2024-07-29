import { css } from '@emotion/react';

const headerStyle = {
    wrapper: css({
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    }),
    header: css({
        width: '100%',
        minWidth: 600,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }),
};

export { headerStyle };
