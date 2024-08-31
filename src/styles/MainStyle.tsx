import { css } from '@emotion/react';

const mainStyle = {
    wrapper: css({
        width: '100%',
        height: '100%',
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
        position: 'relative',
        height: '100%',
        minHeight: 800,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        gap: 20,
    }),
    carousel: css(
        {
            display: 'flex',
            width: '100%',
            maxWidth: '800px',
            height: '300px',
            margin: 0,
            color: '#fff',
            fontWeight: 800,
            textAlign: 'center',
            overflow: 'hidden',
        },
        {
            '.ant-card-body': {
                padding: 0,
            },
        }
    ),
    catecories: css({
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
    }),
    categoryBox: css(
        {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontSize: 16,
            fontWeight: 600,
            gap: 12,
        },
        {
            div: {
                width: 120,
                height: 80,
                padding: 25,
                border: '1px black solid',
                borderRadius: 4,
            },
        }
    ),
    todayProducts: css({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    productCard: css(
        {
            width: 200,
            border: '1px solid #DFDFDF',
        },
        {
            '.ant-card-meta-title': {
                fontSize: 14,
            },
            '.ant-card-meta-description': {
                fontSize: 12,
            },
            '.ant-card-cover': {
                margin: 0,
            },
        }
    ),
};

export { mainStyle };
