import { css } from '@emotion/react';
import theme from './theme';

const productStyle = {
    wrapper: css({
        width: '100%',
        maxWidth: 1080,
        maxHeight: 600,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: '1 1 auto',
        gap: 20,
        padding: 16,
    }),
    productCard: css({
        width: '50%',
        alignContent: 'center',
        maxWidth: 500,
        height: 400,
        border: '0.3px solid #c4c4c4',
        borderRadius: 10,
        boxShadow: theme['boxShadow1'],
    }),
    arrowButton: css({
        '.slick-arrow': {
            color: 'grey',
        },
        '.slick-dots': {
            button: {
                backgroundColor: 'grey',
            },
        },
        '.slick-dots-bottom': {
            bottom: 0,
        },
    }),
    img: css({
        width: 300,
        height: 300,
        margin: '0 auto',
    }),
    carousel: css({
        width: '50%',
        maxWidth: 400,
        alignContent: 'center',
    }),
    contentWrapper: css({
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    }),
    divider: css({
        margin: '0 0 12px 0',
    }),
    statusWrapper: css(
        {
            height: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        {
            h3: {
                margin: 10,
            },
            h2: {
                margin: 10,
            },
        }
    ),
    statusContent: css({
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    }),
    titleStyle: css({
        fontSize: 18,
        fontWeight: 600,
    }),
    priceStyle: css({
        fontSize: 16,
        fontWeight: 500,
    }),
};

export { productStyle };
