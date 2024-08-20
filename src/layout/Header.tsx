/** @jsxImportSource @emotion/react */
import React from 'react';
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { headerStyle } from '../styles/HeaderStyle';

const { Search } = Input;

function Header() {
    return (
        <div css={headerStyle.wrapper}>
            <div css={headerStyle.header}>
                <div
                    style={{
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            color: 'black',
                            fontSize: 24,
                            marginRight: 16,
                        }}
                    >
                        Exclusive
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 45,
                        }}
                    >
                        <div
                            style={{
                                textAlign: 'center',
                                color: 'black',
                                fontSize: 16,
                            }}
                        >
                            Home
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                fontSize: 16,
                            }}
                        >
                            Contact
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                fontSize: 16,
                            }}
                        >
                            About
                        </div>
                        <div
                            style={{
                                textAlign: 'center',
                                fontSize: 16,
                            }}
                        >
                            내 상점
                        </div>
                    </div>
                </div>
                <div>
                    <Search placeholder="찾고 있는 물건이 있나요?" />
                </div>
                <div>
                    <ShoppingCartOutlined style={{ fontSize: 24 }} />
                </div>
            </div>
        </div>
    );
}

export default Header;
