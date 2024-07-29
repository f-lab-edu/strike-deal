/** @jsxImportSource @emotion/react */
import React from 'react';
import { headerStyle } from '../styles/HeaderStyle';

function Header() {
    return (
        <div css={headerStyle.wrapper}>
            <div css={headerStyle.header}>
                <div
                    style={{
                        justifyContent: 'space-around',
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
                        }}
                    >
                        Exclusive
                    </div>
                    <div
                        id="memu"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: 40,
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
                <div
                    style={{
                        paddingTop: 7,
                        paddingBottom: 7,
                        paddingLeft: 20,
                        paddingRight: 12,
                        background: '#F5F5F5',
                        borderRadius: 4,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 34,
                        }}
                    >
                        <div
                            style={{
                                opacity: 0.5,
                                fontSize: 12,
                            }}
                        >
                            What are you looking for?
                        </div>
                        <div style={{ width: 24, height: 24, position: 'relative' }}>
                            <div
                                style={{
                                    width: 16,
                                    height: 16,
                                    left: 4,
                                    top: 4,
                                    position: 'absolute',
                                    border: '1.50px black solid',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 16,
                        display: 'flex',
                    }}
                >
                    <div style={{ width: 32, height: 32, position: 'relative' }}>
                        <div
                            style={{
                                width: 20,
                                height: 17.83,
                                left: 6,
                                top: 7,
                                position: 'absolute',
                                border: '1.50px black solid',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}
                    >
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                position: 'relative',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                display: 'flex',
                            }}
                        >
                            <div
                                style={{ width: 23, height: 17, border: '1.50px black solid' }}
                            ></div>
                            <div
                                style={{ width: 19.89, height: 10, border: '1.50px black solid' }}
                            ></div>
                            <div
                                style={{ width: 2, height: 2, border: '1.50px black solid' }}
                            ></div>
                            <div
                                style={{ width: 2, height: 2, border: '1.50px black solid' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
