import React from 'react';
import { Button, Card, Flex, Typography, Carousel } from 'antd';

const cardStyle: React.CSSProperties = {
    width: '100%',
};

const imgStyle: React.CSSProperties = {
    display: 'block',
    width: 300,
    height: 300,
};

function ProductDetail() {
    return (
        <div style={{ maxWidth: 800 }}>
            <Card hoverable style={cardStyle}>
                <Flex>
                    <div style={{ width: '50%', flexBasis: '50%' }}>
                        <Carousel arrows>
                            <img
                                alt="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                style={imgStyle}
                            />
                            <img
                                alt="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                style={imgStyle}
                            />
                        </Carousel>
                    </div>
                    <div style={{ width: '50%' }}>
                        <Flex vertical justify="space-between" style={{ padding: 32 }}>
                            <Typography.Title level={3}>글러브 팝니다.</Typography.Title>
                            <Button type="primary" href="https://ant.design" target="_blank">
                                문의하기
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </Card>
        </div>
    );
}

export default ProductDetail;
