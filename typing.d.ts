declare module '*.svg' {
    import React = require('react');

    export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}
