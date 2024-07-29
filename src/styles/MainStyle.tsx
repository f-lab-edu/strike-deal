import { css } from '@emotion/react';

const mainStyle = {
    wrapper: css({
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1,
    }),
    content: css({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
    }),
};

export { mainStyle };
