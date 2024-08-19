import { css } from '@emotion/react';

const mainStyle = {
    wrapper: css({
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    }),
    content: css({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 16,
    }),
    body: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
    }),
    categoryBox: css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 12,
    }),
    category: css({
        width: 120,
        height: 80,
        padding: 25,
        border: '1px black solid',
        borderRadius: 4,
    }),
};

export { mainStyle };
