/** @jsxImportSource @emotion/react */
import React from 'react';
import { Input } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { headerStyle } from '../styles/HeaderStyle';

const { Search } = Input;

function Header() {
    return (
        <div css={headerStyle.wrapper}>
            <div css={headerStyle.header}>
                <div css={headerStyle.headerItem}>Strike Deal</div>
                <div
                    style={{ display: 'flex', flexDirection: 'row', gap: 32 }}
                    css={headerStyle.headerItem}
                >
                    <div>Home</div>
                    <div>Contact</div>
                    <div>About</div>
                    <div>내 상점</div>
                </div>
                <div css={headerStyle.headerItem}>
                    <Search style={{ maxWidth: '250px' }} placeholder="찾고 있는 물건이 있나요?" />
                    <UserOutlined style={{ fontSize: 24 }} />
                    <ShoppingCartOutlined style={{ fontSize: 24 }} />
                </div>
            </div>
        </div>
    );
}

export default Header;
